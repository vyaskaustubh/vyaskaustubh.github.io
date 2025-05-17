"use client"

import { useEffect, useState, useRef } from "react"
import { Badge } from "@/components/ui/badge"

export function PythonTypingEffect() {
  const [text, setText] = useState("")
  const [currentIndex, setCurrentIndex] = useState(0)
  const [currentLine, setCurrentLine] = useState(0)
  const cursorRef = useRef<HTMLSpanElement>(null)

  const codeLines = [
    "def introduce_myself():",
    "    skills = ['Machine Learning', 'NLP', 'Computer Vision', 'PyTorch']",
    "    publications = 2  # ICLR and EMNLP",
    "    looking_for = 'Exciting AI Research Opportunities'",
    "    ",
    "    return {",
    "        'status': 'Available for hire',",
    "        'passion': 'Advancing AI'",
    "    }",
  ]

  useEffect(() => {
    if (currentLine >= codeLines.length) return

    const timer = setTimeout(
      () => {
        if (currentIndex < codeLines[currentLine].length) {
          setText((prev) => prev + codeLines[currentLine][currentIndex])
          setCurrentIndex(currentIndex + 1)
        } else {
          setText((prev) => prev + "\n")
          setCurrentLine(currentLine + 1)
          setCurrentIndex(0)
        }
      },
      Math.random() * 50 + 30,
    ) // Random typing speed for realism

    return () => clearTimeout(timer)
  }, [currentIndex, currentLine, codeLines])

  // Blinking cursor effect
  useEffect(() => {
    const blinkInterval = setInterval(() => {
      if (cursorRef.current) {
        cursorRef.current.style.opacity = cursorRef.current.style.opacity === "0" ? "1" : "0"
      }
    }, 530)

    return () => clearInterval(blinkInterval)
  }, [])

  return (
    <div className="bg-slate-900 rounded-lg p-4 font-mono text-sm sm:text-base overflow-hidden">
      <div className="flex items-center mb-2 border-b border-slate-700 pb-2">
        <div className="flex space-x-2 mr-4">
          <div className="w-3 h-3 rounded-full bg-red-500"></div>
          <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
          <div className="w-3 h-3 rounded-full bg-green-500"></div>
        </div>
        <Badge variant="outline" className="text-slate-400 border-slate-700">
          python_profile.py
        </Badge>
      </div>
      <pre className="text-green-400 whitespace-pre">
        {text}
        <span ref={cursorRef} className="text-white">
          |
        </span>
      </pre>
      {currentLine >= codeLines.length && (
        <div className="mt-4 text-white">
          <span className="text-blue-400">{">>>"}</span> introduce_myself()
          <div className="bg-slate-800 mt-2 p-2 rounded text-yellow-300">
            {`{
    'status': 'Available for hire',
    'passion': 'Advancing AI'
}`}
          </div>
        </div>
      )}
    </div>
  )
}
