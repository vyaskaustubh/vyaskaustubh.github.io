"use client"

import type React from "react"

import { useState, useRef, useEffect } from "react"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"

type CommandHistory = {
  input: string
  output: string
  isError?: boolean
}

type GameState = {
  active: boolean
  target?: number
  attempts: number
  min: number
  max: number
  lastGuess?: number
}

export function PythonConsole() {
  const [input, setInput] = useState("")
  const [history, setHistory] = useState<CommandHistory[]>([
    {
      input: "",
      output:
        "Welcome to the interactive Python console! Try some commands:\n- help()\n- about()\n- skills()\n- contact()\n- projects()\n- game()\n- clear()",
    },
  ])
  const [gameState, setGameState] = useState<GameState>({
    active: false,
    attempts: 0,
    min: 1,
    max: 100,
  })
  const inputRef = useRef<HTMLTextAreaElement>(null)
  const consoleRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (consoleRef.current) {
      consoleRef.current.scrollTop = consoleRef.current.scrollHeight
    }
  }, [history])

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault()
      executeCommand()
    }
  }

  const startGame = () => {
    const target = Math.floor(Math.random() * 100) + 1
    setGameState({
      active: true,
      target,
      attempts: 0,
      min: 1,
      max: 100,
    })
    return `I'm thinking of a number between 1 and 100. Try to guess it!
Type a number and press Enter to make a guess.
Type 'exit' to quit the game.`
  }

  const handleGameGuess = (guess: string) => {
    if (guess.toLowerCase() === "exit") {
      setGameState({ ...gameState, active: false })
      return `Game over. The number was ${gameState.target}. Thanks for playing!`
    }

    const guessNum = Number.parseInt(guess, 10)
    if (isNaN(guessNum) || guessNum < 1 || guessNum > 100) {
      return "Please enter a valid number between 1 and 100."
    }

    const newAttempts = gameState.attempts + 1
    let result = ""
    const newGameState = { ...gameState, attempts: newAttempts, lastGuess: guessNum }

    if (guessNum === gameState.target) {
      result = `Congratulations! You guessed the number ${gameState.target} in ${newAttempts} attempts!
      
Would you like to play again? Type 'game()' to start a new game.`
      newGameState.active = false
    } else if (guessNum < gameState.target) {
      result = `Too low! Try a higher number.`
      newGameState.min = Math.max(newGameState.min, guessNum + 1)
    } else {
      result = `Too high! Try a lower number.`
      newGameState.max = Math.min(newGameState.max, guessNum - 1)
    }

    if (newGameState.active) {
      result += `\nAttempts: ${newAttempts} | Range: ${newGameState.min}-${newGameState.max}`
    }

    setGameState(newGameState)
    return result
  }

  const executeCommand = () => {
    if (!input.trim()) return

    const command = input.trim()
    let output = ""
    let isError = false

    // Handle game state
    if (gameState.active) {
      output = handleGameGuess(command)
      setHistory([...history, { input: command, output }])
      setInput("")
      return
    }

    // Simple command processor
    try {
      if (command === "help()") {
        output = `Available commands:
- help(): Show this help message
- about(): Learn about me
- skills(): View my technical skills
- contact(): Get my contact information
- projects(): See my projects
- publications(): View my research publications
- game(): Play a number guessing game
- clear(): Clear the console
- print(message): Print a message
- 2 + 2: Try some basic math!`
      } else if (command === "about()") {
        output =
          "I'm an AI Research Engineer with a passion for developing novel machine learning algorithms and applying them to solve real-world problems. My research focuses on natural language processing and multimodal learning, with a particular interest in improving model efficiency and interpretability."
      } else if (command === "skills()") {
        output = `Technical Skills:
- Deep Learning: 95%
- Natural Language Processing: 90%
- Computer Vision: 85%
- PyTorch: 90%
- TensorFlow: 85%
- Python: 95%`
      } else if (command === "contact()") {
        output = `Email: contact@example.com
LinkedIn: linkedin.com/in/johndoe
GitHub: github.com/johndoe`
      } else if (command === "projects()") {
        output = `Projects:
1. NLP Efficiency Toolkit: An open-source toolkit for optimizing and benchmarking NLP models
2. MultiModal Research Framework: A framework for experimenting with multimodal learning
3. Model Interpretability Dashboard: An interactive dashboard for visualizing model behavior`
      } else if (command === "publications()") {
        output = `Publications:
1. EfficientTune: Parameter-Efficient Fine-tuning for Large Language Models (ICLR 2023)
2. MultiModal-T: A Transformer Architecture for Integrating Multiple Modalities (EMNLP 2022)`
      } else if (command === "game()") {
        output = startGame()
      } else if (command === "clear()") {
        setHistory([])
        setInput("")
        return
      } else if (command.startsWith("print(") && command.endsWith(")")) {
        const message = command.substring(6, command.length - 1).trim()
        if ((message.startsWith("'") && message.endsWith("'")) || (message.startsWith('"') && message.endsWith('"'))) {
          output = message.substring(1, message.length - 1)
        } else {
          output = message
        }
      } else if (/^\d+\s*[+\-*/]\s*\d+$/.test(command)) {
        // Simple math operations
        output = eval(command).toString()
      } else {
        output = `Error: '${command}' is not recognized as a valid command. Type help() for available commands.`
        isError = true
      }
    } catch (err) {
      output = `Error: ${err}`
      isError = true
    }

    setHistory([...history, { input: command, output, isError }])
    setInput("")
  }

  return (
    <div className="bg-slate-900 dark:bg-black rounded-lg overflow-hidden border border-slate-700 w-full max-w-2xl mx-auto">
      <div className="flex items-center p-2 bg-slate-800 dark:bg-slate-950 border-b border-slate-700">
        <div className="flex space-x-2 mr-4">
          <div className="w-3 h-3 rounded-full bg-red-500"></div>
          <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
          <div className="w-3 h-3 rounded-full bg-green-500"></div>
        </div>
        <Badge variant="outline" className="text-slate-400 border-slate-700">
          python3
        </Badge>
        {gameState.active && (
          <Badge variant="outline" className="ml-2 text-green-400 border-green-700">
            Game Active
          </Badge>
        )}
      </div>

      <div
        ref={consoleRef}
        className="p-4 h-80 overflow-y-auto font-mono text-sm text-green-400 bg-slate-900 dark:bg-black"
      >
        {history.map((item, index) => (
          <div key={index} className="mb-2">
            {item.input && (
              <div className="flex">
                <span className="text-blue-400 mr-2">{">>>"}</span>
                <span className="text-white">{item.input}</span>
              </div>
            )}
            <div className={`ml-4 whitespace-pre-wrap ${item.isError ? "text-red-400" : "text-green-400"}`}>
              {item.output}
            </div>
          </div>
        ))}
        <div className="flex mt-2">
          <span className="text-blue-400 mr-2">{">>>"}</span>
          <textarea
            ref={inputRef}
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyDown={handleKeyDown}
            className="w-full bg-transparent text-white outline-none resize-none overflow-hidden"
            rows={1}
            style={{ minHeight: "1.5em" }}
            autoFocus
          />
        </div>
      </div>

      <div className="p-2 bg-slate-800 dark:bg-slate-950 border-t border-slate-700 flex justify-between">
        <div className="text-xs text-slate-400">
          {gameState.active ? "Guess a number between 1-100" : "Press Enter to execute"}
        </div>
        <div className="flex space-x-2">
          {gameState.active && (
            <Button
              variant="ghost"
              size="sm"
              onClick={() => {
                setGameState({ ...gameState, active: false })
                setHistory([
                  ...history,
                  {
                    input: "exit",
                    output: `Game over. The number was ${gameState.target}. Thanks for playing!`,
                  },
                ])
              }}
              className="text-xs text-red-400 hover:text-red-300"
            >
              Exit Game
            </Button>
          )}
          <Button
            variant="ghost"
            size="sm"
            onClick={() => {
              setGameState({
                active: false,
                attempts: 0,
                min: 1,
                max: 100,
              })
              setHistory([
                {
                  input: "",
                  output:
                    "Welcome to the interactive Python console! Try some commands:\n- help()\n- about()\n- skills()\n- contact()\n- projects()\n- game()\n- clear()",
                },
              ])
            }}
            className="text-xs text-slate-400 hover:text-white"
          >
            Reset
          </Button>
        </div>
      </div>
    </div>
  )
}
