var PythonText = [
    ">>> print(About_Me)\n",
    "Hi there! I am Kaustubh 😁\n",
    ">>> "
];

// Simulate the typing effect
function SimulateTyping(text, delay) {
    return new Promise(resolve => {
        var index = 0;
        var interval = setInterval(function() {
            document.getElementById('PythonShell').textContent += text[index++];
            if (index === text.length) {
                clearInterval(interval);
                resolve();
            }
        }, delay);
    });
}

// Start Typing effect one by one for each element of the 'PythonText'
async function startTyping() {
    for (let i = 0; i < PythonText.length; i++) {
        await SimulateTyping(PythonText[i], 50);
    }
}

// Start typing when the page loads
window.onload = startTyping;