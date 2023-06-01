import React, { useState, useEffect } from "react"
import Statistics from "./Statistics"

const App = () => {
    // save clicks of each button to its own state
    const [good, setGood] = useState(0)
    const [neutral, setNeutral] = useState(0)
    const [bad, setBad] = useState(0)

    const handleGood = (event) => {
        event.preventDefault()
        setGood(good + 1)
    }

    const handleNeutral = (event) => {
        event.preventDefault()
        setNeutral(neutral + 1)
    }

    const handleBad = (event) => {
        event.preventDefault()
        setBad(bad + 1)
    }

    const Button = (props) => {
        return (
            <button onClick={props.handle}>{props.text}</button>
        )
    }

    return (
        <div>
            <h1>give feedback</h1>
            <Button handle={handleGood} text={'good'} />
            <Button handle={handleNeutral} text={'neutral'} />
            <Button handle={handleBad} text={'bad'} />
            <h1>statistics</h1>
            <Statistics good={good} neutral={neutral} bad={bad} />
        </div>
    )
}


export default App