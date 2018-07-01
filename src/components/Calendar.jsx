import React from 'react'
import PropTypes from 'prop-types'
import CalendarRow from './CalendarRow'

const Calendar = (props) => {
    const {
        year,
        monthName,
        daysInMonth,
        monthStartsOn,
        today,
    } = props

    // Create an array of days in the month
    const monthDays = Array.from({length: daysInMonth}, (v, i) => i)

    // Inject "empty" days to account for the month not always starting on Sunday
    const emptyDays = Array.from({length: monthStartsOn})
    monthDays.unshift(...emptyDays)

    // Determine how many rows will be needed
    const numberOfRows = Math.ceil(daysInMonth / 7) + 1

    // Take a slice of month days for each row
    const rows = []
    for (let i = 0; i < numberOfRows; i++) {
        const start = 7 * i
        const end = start + 7
        const rowDays = monthDays.slice(start, end)
        rows.push(rowDays)
    }

    return (
        <React.Fragment>
            <table>
                <tbody>
                    <tr>
                        <td>{monthName} {year}</td>
                    </tr>
                </tbody>
            </table>
            <table>
                <thead>
                    <tr>
                        <td>Su</td>
                        <td>Mo</td>
                        <td>Tu</td>
                        <td>We</td>
                        <td>Th</td>
                        <td>Fr</td>
                        <td>Sa</td>
                    </tr>
                </thead>
                <tbody style={{textAlign: 'right'}}>
                    {
                        rows.map((rowDays, index) => {
                            return (
                                <CalendarRow
                                    rowDays={rowDays}
                                    key={index}
                                    today={today}
                                />
                            )
                        })
                    }
                </tbody>
            </table>
        </React.Fragment>
    )
}

Calendar.propTypes = {
    year: PropTypes.number.isRequired,
    month: PropTypes.number.isRequired,
    monthName: PropTypes.string.isRequired,
    daysInMonth: PropTypes.number.isRequired,
    monthStartsOn: PropTypes.number.isRequired,
    today: PropTypes.number.isRequired,
}

export default Calendar