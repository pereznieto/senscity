import React from 'react';
import styles from './Game.module.scss';
import Map from "../Map/Map";
import { getRandomCity } from '../../utils/city';

class Game extends React.Component {
  constructor(props) {
    super(props);
    this.updateClickCoordinates = this.updateClickCoordinates.bind(this);
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
  }

  componentWillMount() {
    this.setState({
      currentCity: getRandomCity([]),
    });
  }

  updateClickCoordinates(clickedCoordinate) {
    const playedCities = [...this.state.playedCities, this.state.currentCity];
    const newCity = getRandomCity(playedCities.map(({ id }) => id));
    const gameOver = playedCities.length === 5;

    this.setState({
      clickedCoordinate,
      playedCities,
      currentCity: newCity,
      gameOver,
    });
  }

  updateMapSize(mapSize) {
    this.setState({ mapSize });
  }

  render() {
    const { clickedCoordinate, currentCity, gameOver } = this.state;

    return (
      <div>
        <Map
          gameOver={gameOver}
          updateMapSize={this.updateMapSize}
          updateClickCoordinates={this.updateClickCoordinates}
        />
        {currentCity &&
          <div>Find: <strong>{currentCity.name}</strong></div>
        }
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
