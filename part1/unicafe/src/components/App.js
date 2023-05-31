import React, { useState, useEffect } from "react"

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

    return (
        <div>
            <h1>give feedback</h1>
            <button onClick={handleGood}>good</button>
            <button onClick={handleNeutral}>neutral</button>
            <button onClick={handleBad}>bad</button>
            <h1>statistics</h1>
            <p>
                good {good}
            </p>
            <p>
                neutral {neutral}
            </p>
            <p>
                bad {bad}
            </p>
        </div>
    )
}


export default App