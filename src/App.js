import React, {
    Component
} from 'react'
import Calendar from './components/Calendar'

class App extends Component {
    constructor() {
        super()

        // Ignoring timezones etc
        const today = new Date()
        this.state = {
            year: today.getFullYear(),
            month: today.getMonth(), // zero-indexed e.g. 5 for June
            monthName: today.toLocaleDateString('en-EN', { month: 'long' }), // e.g. "June"
            daysInMonth: new Date(today.getFullYear(), today.getMonth() + 1, 0).getDate(), // e.g. 31
            monthStartsOn: new Date(`${today.getFullYear()}-${today.getMonth() + 1}-01`).getDay(), // e.g. 5
            today: today.getDate(), // e.g. 12
        }
    }

    render() {
        const {
            year,
            month,
            daysInMonth,
            monthStartsOn,
            monthName,
            today,
        } = this.state

        return (
            <Calendar
                year={year}
                month={month}
                monthName={monthName}
                daysInMonth={daysInMonth}
                monthStartsOn={monthStartsOn}
                today={today}
            />
        )
    }
}

export default App
