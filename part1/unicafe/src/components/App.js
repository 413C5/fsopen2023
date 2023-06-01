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

    const Button = (props) => {
        return (
            <button onClick={props.handle}>{props.text}</button>
        )
    }

    const StatisticLine = (props) => {
        return (
            <tr>
                <td>
                    {props.text}
                </td>
                <td>
                    {props.value} {props.extra}
                </td>
            </tr>
        )
    }

    const Statistics = (props) => {
        if (good + neutral + bad === 0) {
            return (
                <div>
                    No feedback given
                </div>
            )
        }

        else {
            return (
                <div>
                    <table>
                        <tbody>
                            <StatisticLine text={'good'} value={props.good} extra={''} />
                            <StatisticLine text={'neutral'} value={props.neutral} extra={''} />
                            <StatisticLine text={'bad'} value={props.bad} extra={''} />
                            <StatisticLine text={'all'} value={props.good + props.neutral + props.bad} extra={''} />
                            <StatisticLine text={'average'} value={(props.good - props.bad) / (props.good + props.neutral + props.bad)} extra={''} />
                            <StatisticLine text={'positive'} value={(props.good / (props.good + props.neutral + props.bad)) * 100} extra={'%'} />
                        </tbody>
                    </table>
                </div>
            )
        }
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