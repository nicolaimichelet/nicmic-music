import React from 'react';
import DateTimeDisplay from './datetimeDisplay';
import { useCountdown } from '../hooks/useCountdown';

const ExpiredNotice = () => {
  return (
    <div className="expired-notice">
      <span>Released</span>
      <p>Please select a future date and time.</p>
    </div>
  );
};

const ShowCounter = ({ days, hours, minutes, seconds }) => {
  return (
    <div className="show-counter flex text-white"> 
        <DateTimeDisplay value={days} isDanger={days <= 3} />
        <p className='mr-4'>:</p>
        <DateTimeDisplay value={hours} isDanger={false} />
        <p className='mr-4'>:</p>
        <DateTimeDisplay value={minutes} isDanger={false} />
        <p className='mr-4'>:</p>
        <DateTimeDisplay value={seconds} isDanger={false} />
    </div>
  );
};

const CountdownTimer = ({ targetDate }) => {
  const [days, hours, minutes, seconds] = useCountdown(targetDate);

  if (days + hours + minutes + seconds <= 0) {
    return <ExpiredNotice />;
  } else {
    return (
      <ShowCounter
        days={days}
        hours={hours}
        minutes={minutes}
        seconds={seconds}
      />
    );
  }
};

export default CountdownTimer;
