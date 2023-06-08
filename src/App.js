import React, { useState, useEffect } from "react"

const App = () => {
  const [userChoice, setUserChoice] = useState("")
  const [computerChoice, setComputerChoice] = useState("")
  const [result, setResult] = useState(null)

  // const choices = ["rock", "paper", "scissors"] //✌🏻 ✊🏻 🖐🏻
  const choices = ["✊🏻", "🖐🏻", "✌🏻"]

  const handleClick = (value) => {
    setUserChoice(value)
    generateComputerChoice()
    checkResult()
  }

  const generateComputerChoice = () => {
    const randomNumber = Math.floor(Math.random() * choices.length)
    const randomChoice = choices[randomNumber]

    setComputerChoice(randomChoice)
  }

  useEffect(() => {
    checkResult()
  }, [computerChoice, userChoice])

  const checkResult = () => {
    switch (userChoice + computerChoice) {
      case "✌🏻🖐🏻":
      case "✊🏻✌🏻":
      case "🖐🏻✊🏻":
        // case "scissorspaper":
        // case "rockscissors":
        // case "paperrock":
        setResult("You Win!")
        break

      case "🖐🏻✌🏻":
      case "✌🏻✊🏻":
      case "✊🏻🖐🏻":
        setResult("You Lose!")
        break

      case "✊🏻✊🏻":
      case "🖐🏻🖐🏻":
      case "✌🏻✌🏻":
        setResult("A Draw!")
        break
    }
  }
  return (
    <div className="App">
      <h1>You: {userChoice} </h1>
      <h1>Computer: {computerChoice} </h1>

      <div className="title">
        {choices.map((choice, index) => (
          <button
            type="button"
            className="btn selection"
            style={{ marginTop: "2rem" }}
            key={index}
            onClick={() => handleClick(choice)}
          >
            {choice}
          </button>
        ))}
      </div>
      <h1>{result}</h1>
    </div>
  )
}

export default App
