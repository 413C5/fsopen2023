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

    const Statistics = (props) => {
        return (
            <div>
                <p>
                    good {props.good}
                </p>
                <p>
                    neutral {props.neutral}
                </p>
                <p>
                    bad {props.bad}
                </p>
                <p>
                    all {props.good + props.neutral + props.bad}
                </p>
                <p>
                    average {(props.good - props.bad) / (props.good + props.neutral + props.bad)}
                </p>
                <p>
                    positive {(props.good / (props.good + props.neutral + props.bad)) * 100} %
                </p>
            </div>
        )
    }

    return (
        <div>
            <h1>give feedback</h1>
            <button onClick={handleGood}>good</button>
            <button onClick={handleNeutral}>neutral</button>
            <button onClick={handleBad}>bad</button>
            <h1>statistics</h1>
            <Statistics good={good} neutral={neutral} bad={bad} />
        </div>
    )
}


export default App