import React from 'react';
import styles from './Game.module.scss';
import Map from "../Map/Map";
import { getRandomCity } from '../../utils/city';
import { getDistanceBetweenClickAndCity, latitudeToY, longitudeToX } from '../../utils/distance';
import Button from "@material-ui/core/Button";
import cx from 'classnames';
import Grid from "@material-ui/core/Grid";
import { calculatePrevScore } from "../../utils/score";
import Timer from '../Timer/Timer';
import { saveScoreLocally } from '../../utils/storage';

const initialState = {
  clickedCoordinate: {
    x: null,
    y: null,
  },
  currentCity: null,
  playedCities: [],
  gameOver: false,
  distance: null,
  score: 0,
  pause: null,
  isRunning: false,
  isScoreSaved: false,
};

const citiesPerGame = 10;

class Game extends React.Component {
  constructor(props) {
    super(props);
    this.startGame = this.startGame.bind(this);
    this.endTurn = this.endTurn.bind(this);
    this.updateMapSize = this.updateMapSize.bind(this);
    this.restartGame = this.restartGame.bind(this);
    this.nextCity = this.nextCity.bind(this);
    this.getCity = this.getCity.bind(this);
    this.saveScore = this.saveScore.bind(this);
  }

  state = {
    ...initialState,
    mapSize: {
      width: 0,
      height: 0,
    },
    splashScreen: true,
  };

  startGame(mode) {
    this.setState({
      isRunning: true,
      splashScreen: false,
      mode,
      currentCity: this.getCity()([]),
    });
  }

  restartGame(mode) {
    this.setState({ ...initialState, mode, currentCity: this.getCity()([]), isRunning: true });
  }

  getCity() {
    const { mode } = this.state;

    if (mode === 'easy') {
      return getRandomCity(2000000);
    } else if (mode === 'normal') {
      return getRandomCity(1000000);
    } else if (mode === 'hard') {
      return getRandomCity(100000);
    }

    return getRandomCity(500000);
  }

  nextCity() {
    this.setState({ pause: null, isRunning: true });
  }

  updateMapSize(mapSize) {
    this.setState({ mapSize });
  }

  endTurn(clickedCoordinate) {
    const { playedCities, currentCity, mapSize, score, timeLeft, mode } = this.state;
    const newPlayedCities = [...playedCities, currentCity];
    const newCity = this.getCity()(newPlayedCities.map(({ id }) => id));
    const gameOver = newPlayedCities.length === citiesPerGame;
    const distance = clickedCoordinate ?
      getDistanceBetweenClickAndCity(clickedCoordinate, mapSize, currentCity) :
      null;
    const newScore = distance ? score + calculatePrevScore(distance, timeLeft) : score;
    const clicked = clickedCoordinate ? {
      x: clickedCoordinate.x,
      y: clickedCoordinate.y,
    } : null;

    this.setState({
      isRunning: false,
      clickedCoordinate,
      playedCities: newPlayedCities,
      currentCity: newCity,
      gameOver,
      distance,
      score: newScore,
      pause: {
        city: mode === 'easy' ? `${currentCity.name}, ${currentCity.country}` : currentCity.name,
        real: {
          x: longitudeToX(mapSize.width, currentCity.longitude),
          y: latitudeToY(mapSize.height, currentCity.latitude),
        },
        clicked,
      },
    });
  }

  saveScore(name) {
    const { score, mode } = this.state;
    this.setState({ isScoreSaved: true });
    saveScoreLocally({ name, score, mode });
  }

  render() {
    const {
      splashScreen,
      currentCity,
      gameOver,
      score,
      pause,
      distance,
      isRunning,
      mode,
      isScoreSaved,
    } = this.state;
    const displayName = currentCity && (mode === 'easy' ? `${currentCity.name}, ${currentCity.country}` : currentCity.name);
    const displayDistance = distance ? <span>by<strong> {distance.toFixed(2)} km</strong></span> : 'completely!';

    return (
      <div>
        <Map
          startGame={this.startGame}
          splashScreen={splashScreen}
          pause={pause}
          gameOver={gameOver}
          playAgain={this.restartGame}
          updateMapSize={this.updateMapSize}
          updateClickCoordinates={this.endTurn}
          saveScore={this.saveScore}
          isScoreSaved={isScoreSaved}
        />
        <div className={styles.gameMenu}>
          {!splashScreen &&
            <Timer
              isRunning={isRunning}
              onTick={timeLeft => { this.setState({ timeLeft }); }}
              onEnd={this.endTurn}
            />
          }
          <Grid container spacing={2}>
            {!splashScreen &&
              <Grid item sm={4}>
                <div className={cx(styles.score, { [styles.finalScore]: gameOver })}>
                  <p>
                    {gameOver ? 'Final score:' : 'Score:'} <strong>{score.toFixed(0)}</strong>
                  </p>
                </div>
              </Grid>
            }
            {!splashScreen && !pause && currentCity &&
              <Grid item sm={4}>
                <div><p>Find: <strong>{displayName}</strong></p></div>
              </Grid>
            }
            {pause && (
              <React.Fragment>
                <Grid item sm={4}>
                  <div className={styles.distance}>
                    <p>
                      You missed <strong>{pause.city}</strong> {displayDistance}
                    </p>
                  </div>
                </Grid>
                <Grid item sm={4}>
                  {!gameOver &&
                    <Button
                      variant="contained"
                      color="primary"
                      size="large"
                      onClick={this.nextCity}
                    >
                      Next city
                    </Button>
                  }
                </Grid>
              </React.Fragment>
            )}
          </Grid>
        </div>
      </div>
    );
  }
}

export default Game;
