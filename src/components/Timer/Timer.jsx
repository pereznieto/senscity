import React, { useEffect, useState } from 'react';
import useGlobal from '../../store';
import { useInterval } from '../../utils/hooks';
import styles from './Timer.module.scss';

export const millisecondsPerTurn = 5000;
const tickSpeed = 10;

const Timer = () => {
  const [timeLeft, setLocalTimeLeft] = useState(millisecondsPerTurn);
  const [delay, setDelay] = useState(tickSpeed);
  const [{ isRunning }, { setTimeLeft, endTurn }] = useGlobal();

  useEffect(() => {
    if (isRunning) {
      setLocalTimeLeft(millisecondsPerTurn);
      setDelay(tickSpeed);
    } else {
      setDelay(null);
    }
  }, [isRunning]);

  useInterval(() => {
    if (timeLeft > 0) {
      setLocalTimeLeft(timeLeft - tickSpeed);
      setTimeLeft(timeLeft - tickSpeed);
    } else {
      endTurn();
    }
  }, delay);

  const barStyle = {
    width: `${((millisecondsPerTurn - timeLeft) * 100) / millisecondsPerTurn}%`,
    animation: isRunning ? `redden ${millisecondsPerTurn / 1000}s ease-out` : '',
  };

  return (
    <div className={styles.timer}>
      <div className={styles.time} style={barStyle} />
    </div>
  );
};

export default Timer;
