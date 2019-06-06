import React from 'react';
import styles from './Game.module.scss';
import Map from "../Map/Map";
import { getRandomCity } from '../../utils/city';
import { getDistanceBetweenClickAndCity } from '../../utils/distance';

class Game extends React.Component {
  constructor(props) {
    super(props);
    this.updateGameOnMapClick = this.updateGameOnMapClick.bind(this);
    this.updateMapSize = this.updateMapSize.bind(this);
  }

  state = {
    mapSize: {
      width: 0,
      height: 0,
    },
    clickedCoordinate: {
      x: null,
      y: null,
    },
    currentCity: null,
    playedCities: [],
    gameOver: false,
    score: 0,
  };

  componentWillMount() {
    this.setState({
      currentCity: getRandomCity([]),
    });
  }

  updateGameOnMapClick(clickedCoordinate) {
    const { playedCities, currentCity, mapSize, score } = this.state;
    const newPlayedCities = [...playedCities, currentCity];
    const newCity = getRandomCity(newPlayedCities.map(({ id }) => id));
    const gameOver = newPlayedCities.length === 5;
    const distance = getDistanceBetweenClickAndCity(clickedCoordinate, mapSize, currentCity);
    const newScore = score + distance;  //TODO: Score addition

    this.setState({
      clickedCoordinate,
      playedCities: newPlayedCities,
      currentCity: newCity,
      gameOver,
      score: newScore,
    });
  }

  updateMapSize(mapSize) {
    this.setState({ mapSize });
  }

  render() {
    const { clickedCoordinate, currentCity, gameOver, score } = this.state;

    return (
      <div>
        <Map
          gameOver={gameOver}
          updateMapSize={this.updateMapSize}
          updateClickCoordinates={this.updateGameOnMapClick}
        />
        {currentCity &&
          <div>Find: <strong>{currentCity.name}</strong></div>
        }
        <div>
          <p>Score: <strong>{score}</strong></p>
        </div>
        {clickedCoordinate.x !== null &&
          <div className={styles.clickedCoordinates}>
            <p><strong>You clicked on:</strong></p>
            <p>(x: <strong>{clickedCoordinate.x}</strong>, y: <strong>{clickedCoordinate.y}</strong>)</p>
          </div>
        }
      </div>
    );
  }
}

export default Game;
