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

  nextCity() {
    this.setState({ pause: null, isRunning: true });
  }

  updateMapSize(mapSize) {
    this.setState({ mapSize });
  }

  restartGame() {
    this.setState({ ...initialState, currentCity: this.getCity()([]), isRunning: true });
  }

  render() {
    const { splashScreen, currentCity, gameOver, score, pause, distance, isRunning, mode } = this.state;
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
            <Grid item xs={3}>
              {!splashScreen &&
                <div className={cx(styles.score, { [styles.bigScore]: gameOver })}>
                  <p>
                    {gameOver ? 'Final score:' : 'Score:'} <strong>{score.toFixed(0)}</strong>
                  </p>
                </div>
              }
            </Grid>
            <Grid item xs={2}>
              {!splashScreen && !pause && currentCity &&
                <div><p>Find: <strong>{displayName}</strong></p></div>
              }
            </Grid>
            {pause && (
              <React.Fragment>
                <Grid item xs={4}>
                  <div className={styles.distance}>
                    <p>
                      You missed <strong>{pause.city}</strong> {displayDistance}
                    </p>
                  </div>
                </Grid>
                <Grid item xs={3}>
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
