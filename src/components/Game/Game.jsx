import React from 'react';
import styles from './Game.module.scss';
import Map from "../Map/Map";
import { getRandomCity } from '../../utils/city';
import { getDistanceBetweenClickAndCity } from '../../utils/distance';

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
};

const citiesPerGame = 5;

class Game extends React.Component {
  constructor(props) {
    super(props);
    this.updateGameOnMapClick = this.updateGameOnMapClick.bind(this);
    this.updateMapSize = this.updateMapSize.bind(this);
    this.restartGame = this.restartGame.bind(this);
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
    });
  }

  updateMapSize(mapSize) {
    this.setState({ mapSize });
  }

  restartGame() {
    this.setState({ ...initialState, currentCity: getRandomCity([]) });
  }

  render() {
    const { currentCity, gameOver, score, distance } = this.state;

    return (
      <div>
        <Map
          gameOver={gameOver}
          playAgain={this.restartGame}
          updateMapSize={this.updateMapSize}
          updateClickCoordinates={this.updateGameOnMapClick}
        />
        <div className={styles.gameMenu}>
          {currentCity &&
            <div><p>Find: <strong>{currentCity.name}</strong></p></div>
          }
          <div>
            <p>Score: <strong>{score.toFixed(0)}</strong></p>
            {distance && <p>You were off by: <strong>{distance.toFixed(1)} km</strong></p>}
          </div>
        </div>
      </div>
    );
  }
}

export default Game;
