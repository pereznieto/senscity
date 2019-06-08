import React from 'react';
import styles from './Map.module.scss';
import Button from "@material-ui/core/Button";

class Map extends React.Component {
  constructor(props) {
    super(props);
    this.mapDiv = React.createRef();
    this.getMouseCoordinates = this.getMouseCoordinates.bind(this);
  }

  state = {
    width: 0,
    height: 0,
    top: 0,
    left: 0,
  }

  componentDidMount() {
    const width = this.mapDiv.current.offsetWidth;
    const height = this.mapDiv.current.offsetHeight;
    const { top, left } = this.mapDiv.current.getBoundingClientRect();

    this.props.updateMapSize({ width, height });
    this.setState({ width, height, top: top.toFixed(0), left: left.toFixed(0) });
  }

  getMouseCoordinates({ clientX, clientY }) {
    const { top, left } = this.state;
    const coordinates = {
      x: clientX - left,
      y: clientY - top,
    };
    this.props.updateClickCoordinates(coordinates);
  }

  render() {
    const { splashScreen, startGame, pause, gameOver, playAgain } = this.props;
    return (
      <div
        ref={this.mapDiv}
        onClick={(!gameOver && !pause && !splashScreen) ? this.getMouseCoordinates : undefined}
        className={styles.map}
      >
        {pause &&
          <div className={styles.pause}>
            <div
              className={styles.realCoordinates}
              style={{ top: `${pause.real.y}px`, left: `${pause.real.x}px` }}
            />
            {pause.clicked &&
              <div
                className={styles.clickedCoordinates}
                style={{ top: `${pause.clicked.y}px`, left: `${pause.clicked.x}px` }}
              />
            }
          </div>
        }
        {(splashScreen || gameOver) &&
          <div className={styles.splash}>
            <div className={styles.splashText}>Senscity</div>
            <div className={styles.difficultyText}>Select difficulty to {gameOver ? 'play again' : 'start'}:</div>
            <div className={styles.buttonWrapper}>
              <Button
                variant="contained"
                color="primary"
                size="large"
                className={styles.startButton}
                onClick={() => { gameOver ? playAgain('easy') : startGame('easy'); }}
              >
                Easy
            </Button>
              <Button
                variant="contained"
                color="primary"
                size="large"
                className={styles.startButton}
                onClick={() => { gameOver ? playAgain('normal') : startGame('normal'); }}
              >
                Normal
            </Button>
              <Button
                variant="contained"
                color="primary"
                size="large"
                className={styles.startButton}
                onClick={() => { gameOver ? playAgain('hard') : startGame('hard'); }}
              >
                Hard
            </Button>
            </div>
          </div>
        }
      </div>
    );
  }
}

export default Map;
