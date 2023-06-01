import React from "react"

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

export default StatisticLine