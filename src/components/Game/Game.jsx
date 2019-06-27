import React from 'react';
import {
  getRandomCity,
  getRandomPopularCity,
  isCityNameDuplicate,
} from '../../utils/city';
import {
  getDistanceBetweenClickAndCity,
  latitudeToY,
  longitudeToX,
} from '../../utils/distance';
import { calculateTurnScore } from '../../utils/score';
import { saveScoreLocally } from '../../utils/storage';
import Controls from '../Controls/Controls';
import Map from '../Map/Map';
import Timer from '../Timer/Timer';
import styles from './Game.module.scss';

const citiesPerGame = 10;

export const difficulties = ['easy', 'normal', 'hard'];

const getDisplayName = ({ name, country }, mode) => {
  if (name) {
    if (mode === difficulties[0] || isCityNameDuplicate(name)) {
      return `${name}, ${country}`;
    }
    return name;
  }
};

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

const getRealCoordinates = (mapSize, currentCity) => {
  return {
    x: longitudeToX(mapSize.width, currentCity.longitude),
    y: latitudeToY(mapSize.height, currentCity.latitude),
  };
};

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
    this.setState({ mode }, () => {
      this.setState({
        isRunning: true,
        splashScreen: false,
        currentCity: this.getCity()([]),
      });
    });
  }

  restartGame(mode) {
    this.setState({ mode }, () => {
      this.setState({
        ...initialState,
        currentCity: this.getCity()([]),
        isRunning: true,
      });
    });
  }

  getCity() {
    const { mode } = this.state;
    if (mode === difficulties[0]) {
      return getRandomPopularCity;
    } else if (mode === difficulties[1]) {
      return getRandomCity(1000000);
    } else if (mode === difficulties[2]) {
      return getRandomCity(100000);
    }
  }

  nextCity() {
    this.setState({ pause: null, isRunning: true });
  }

  updateMapSize(mapSize) {
    this.setState({ mapSize });
  }

  endTurn(clickedCoordinate) {
    const { playedCities, currentCity, mapSize, score, timeLeft, mode } = this.state;

    const distance = clickedCoordinate
      ? getDistanceBetweenClickAndCity(clickedCoordinate, mapSize, currentCity)
      : null;
    const turnScore = calculateTurnScore(distance, timeLeft);
    const newScore = distance ? score + turnScore : score;
    const clicked = clickedCoordinate
      ? {
          x: clickedCoordinate.x,
          y: clickedCoordinate.y,
        }
      : null;
    const newPlayedCities = [
      ...playedCities,
      {
        ...currentCity,
        clicked,
        distance,
        real: getRealCoordinates(mapSize, currentCity),
        score: turnScore,
      },
    ];

    const newCity = this.getCity()(newPlayedCities.map(({ id }) => id));
    const gameOver = newPlayedCities.length === citiesPerGame;

    this.setState({
      isRunning: false,
      clickedCoordinate,
      playedCities: newPlayedCities,
      currentCity: newCity,
      gameOver,
      distance,
      score: newScore,
      pause: {
        city: getDisplayName(currentCity, mode),
        real: getRealCoordinates(mapSize, currentCity),
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
      playedCities,
    } = this.state;

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
          playedCities={playedCities}
        />
        <div className={styles.gameMenu}>
          {!splashScreen && (
            <Timer
              isRunning={isRunning}
              onTick={timeLeft => {
                this.setState({ timeLeft });
              }}
              onEnd={this.endTurn}
            />
          )}
          <Controls
            mode={mode}
            score={score}
            pause={pause}
            gameOver={gameOver}
            distance={distance}
            getDisplayName={getDisplayName}
            splashScreen={splashScreen}
            currentCity={currentCity}
            nextCity={this.nextCity}
          />
        </div>
      </div>
    );
  }
}

export default Game;
