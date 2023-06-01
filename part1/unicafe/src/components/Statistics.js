import React from "react"
import StatisticLine from "./StatisticLine"

const Statistics = (props) => {
    if (props.good + props.neutral + props.bad === 0) {
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

export default Statistics