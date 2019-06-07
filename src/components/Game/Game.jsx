import React from 'react';
import styles from './Game.module.scss';
import Map from "../Map/Map";
import { getRandomCity } from '../../utils/city';
import { getDistanceBetweenClickAndCity, latitudeToY, longitudeToX } from '../../utils/distance';
import Button from "@material-ui/core/Button";
import cx from 'classnames';

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
};

const citiesPerGame = 10;

class Game extends React.Component {
  constructor(props) {
    super(props);
    this.updateGameOnMapClick = this.updateGameOnMapClick.bind(this);
    this.updateMapSize = this.updateMapSize.bind(this);
    this.restartGame = this.restartGame.bind(this);
    this.nextCity = this.nextCity.bind(this);
  }

  state = {
    ...initialState,
    mapSize: {
      width: 0,
      height: 0,
    },
  };

  componentWillMount() {
    this.setState({ currentCity: getRandomCity([]) });
  }

  updateGameOnMapClick(clickedCoordinate) {
    const { playedCities, currentCity, mapSize, score } = this.state;
    const newPlayedCities = [...playedCities, currentCity];
    const newCity = getRandomCity(newPlayedCities.map(({ id }) => id));
    const gameOver = newPlayedCities.length === citiesPerGame;
    const distance = getDistanceBetweenClickAndCity(clickedCoordinate, mapSize, currentCity);
    const newScore = score + (12742 - distance);

    this.setState({
      clickedCoordinate,
      playedCities: newPlayedCities,
      currentCity: newCity,
      gameOver,
      distance,
      score: newScore,
      pause: {
        city: currentCity.name,
        distance,
        real: {
          x: longitudeToX(mapSize.width, currentCity.longitude),
          y: latitudeToY(mapSize.height, currentCity.latitude),
        },
        clicked: {
          x: clickedCoordinate.x,
          y: clickedCoordinate.y,
        },
      },
    });
  }

  nextCity() {
    this.setState({ pause: null });
  }

  updateMapSize(mapSize) {
    this.setState({ mapSize });
  }

  restartGame() {
    this.setState({ ...initialState, currentCity: getRandomCity([]) });
  }

  render() {
    const { currentCity, gameOver, score, pause, distance } = this.state;
    const percentageScore = ((score * 100) / (12742 * citiesPerGame)).toFixed(2);

    return (
      <div>
        <Map
          pause={pause}
          gameOver={gameOver}
          playAgain={this.restartGame}
          updateMapSize={this.updateMapSize}
          updateClickCoordinates={this.updateGameOnMapClick}
        />
        <div className={styles.gameMenu}>
          <div className={cx(styles.score, { [styles.bigScore]: gameOver })}>
            <p>
              {gameOver ? 'Final score:' : 'Score:'} <strong>{score.toFixed(0)}{gameOver ? ` (${percentageScore}%)` : ''}</strong>
            </p>
          </div>
          {!pause && currentCity &&
            <div><p>Find: <strong>{currentCity.name}</strong></p></div>
          }
          {pause &&
            <div>
              <div className={styles.distance}>
                <p>
                  You missed <strong>{pause.city}</strong> by <strong>{distance.toFixed(2)} km</strong>
                </p>
              </div>
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
            </div>
          }
        </div>
      </div >
    );
  }
}

export default Game;
