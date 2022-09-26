import React from 'react';
import ExpiredNotice from './ExpiredNotice'
import ShowCounter from './ShowCounter'
import { useCountdown } from '../../hooks/useCountdown';

const CountdownTimer = ({ targetDate }) => {
  const [days, hours, minutes, seconds, countdown] = useCountdown(targetDate);
  if (days + hours + minutes + seconds <= 0) {
    return <ExpiredNotice />;
  } else {
    return (
      <ShowCounter
        counter={countdown}
        days={days}
        hours={hours}
        minutes={minutes}
        seconds={seconds} />
    );
  }
}

export default CountdownTimer;