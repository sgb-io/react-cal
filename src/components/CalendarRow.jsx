import React from 'react'
import PropTypes from 'prop-types'

const renderDay = (day, today) => {
    const text = isNaN(day) ? null : day + 1
    const formatted = (text === today) ? (
        <strong style={{
            background: 'grey',
            color: 'white',
        }}>{text}</strong>
    ) : text

    return formatted
}

const CalendarRow = (props) => {
    const {
        rowDays,
        today,
    } = props

    return (
        <tr>
            {
                rowDays.map((day, index) => {
                    return (
                        <td key={index}>{renderDay(day, today)}</td>
                    )
                })
            }
        </tr>
    )
}

CalendarRow.propTypes = {
    rowDays: PropTypes.arrayOf(PropTypes.number),
    today: PropTypes.number.isRequired,
}

export default CalendarRow