import React from 'react';
import styles from './Map.module.scss';
import Button from "@material-ui/core/Button";
import { TextField } from '@material-ui/core';
import _ from 'lodash';
import { getScores } from '../../utils/storage';

class Map extends React.Component {
  constructor(props) {
    super(props);
    this.mapDiv = React.createRef();
    this.getMouseCoordinates = this.getMouseCoordinates.bind(this);
    this.saveScore = this.saveScore.bind(this);
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

  saveScore(event) {
    event.preventDefault();
    this.props.saveScore(this.state.name);
  }

  render() {
    const { splashScreen, startGame, pause, gameOver, playAgain, isScoreSaved } = this.props;

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
            {gameOver && !isScoreSaved &&
              <div className={styles.nameWrapper}>
                <p className={styles.saveText}>Enter your name to save your score:</p>
                <TextField
                  fullWidth
                  id="name"
                  variant="outlined"
                  onChange={event => { this.setState({ name: _.startCase(event.target.value) }); }}
                  label="Name"
                  disabled={isScoreSaved}
                />
                <Button
                  variant="contained"
                  color="secondary"
                  size="large"
                  onClick={this.saveScore}
                  className={styles.saveButton}
                  disabled={isScoreSaved}
                >
                  {isScoreSaved ? 'Score saved!' : 'Save score'}
                </Button>
              </div>
            }
            {gameOver && isScoreSaved &&
              <div className={styles.scores}>
                <p className={styles.scoresText}>Smartest folks in here:</p>
                <div className={styles.topScores}>
                  {getScores()
                    .sort((a, b) => a.score > b.score ? -1 : 1)
                    .map(({ name, score, mode }) => (
                      <div className={styles.score}>
                        <strong className={styles.scoreItem}>{score}:</strong>
                        <span className={styles.nameItem}>{name}</span>
                        <em className={styles.modeItem}>({_.startCase(mode)})</em>
                      </div>
                    ))}
                </div>
              </div>
            }
          </div>
        }
      </div>
    );
  }
}

export default Map;
