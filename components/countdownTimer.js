import React from 'react'
import DateTimeDisplay from './datetimeDisplay'
import { useCountdown } from '../hooks/useCountdown'

const ExpiredNotice = () => {
    return (
        <div className="expired-notice">
            <span className="text-white"></span>
            <p></p>
        </div>
    )
}

const ShowCounter = ({ days, hours, minutes, seconds }) => {
    return (
        <div className="mt-4">
            <p className="font-medium text-nicmic-white">Next release in</p>
            <div className="flex font-thin text-nicmic-white">
                <DateTimeDisplay value={days} isDanger={days <= 3} />
                <p className="mr-4 self-center">:</p>
                <DateTimeDisplay value={hours} isDanger={false} />
                <p className="mr-4 self-center">:</p>
                <DateTimeDisplay value={minutes} isDanger={false} />
                <p className="mr-4 self-center">:</p>
                <DateTimeDisplay value={seconds} isDanger={false} />
            </div>
        </div>
    )
}

const CountdownTimer = ({ targetDate }) => {
    const [days, hours, minutes, seconds] = useCountdown(targetDate)

    if (days + hours + minutes + seconds <= 0) {
        return <ExpiredNotice />
    } else {
        return (
            <ShowCounter
                days={days}
                hours={hours}
                minutes={minutes}
                seconds={seconds}
            />
        )
    }
}

export default CountdownTimer
