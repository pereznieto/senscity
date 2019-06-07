import React from 'react';
import styles from './Timer.module.scss';

export const millisecondsPerTurn = 5000;

class Timer extends React.Component {

  constructor(props) {
    super(props);
    this.tick = this.tick.bind(this);
  }

  state = {
    timeLeft: millisecondsPerTurn,
  }

  componentDidMount() {
    if (this.props.isRunning) {
      this.interval = setInterval(() => this.tick(), 10);
    }
  }

  componentDidUpdate(prevProps) {
    const { isRunning } = this.props;

    if (prevProps.isRunning !== isRunning) {
      if (isRunning) {
        this.setState({ timeLeft: millisecondsPerTurn });
        this.interval = setInterval(() => this.tick(), 10);
      } else {
        clearInterval(this.interval);
      }
    }
  }

  tick() {
    const { onTick, onEnd } = this.props;
    const { timeLeft } = this.state;
    const newTimeLeft = timeLeft - 10;

    if (timeLeft > 0) {
      this.setState({ timeLeft: newTimeLeft });
      onTick(newTimeLeft);
    } else {
      clearInterval(this.interval);
      onEnd();
    }
  }

  render() {
    return (
      <div className={styles.timer}>
        <div className={styles.time} style={{ width: `${(millisecondsPerTurn - this.state.timeLeft) * 100 / millisecondsPerTurn}%` }} />
      </div>
    );
  }
}

export default Timer;
