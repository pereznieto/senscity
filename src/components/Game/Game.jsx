import React from 'react';
import styles from './Game.module.scss';
import Map from "../Map/Map";
import {getRandomCity} from '../../utils/city';
import {getDistanceBetweenClickAndCity} from '../../utils/distance';
import Button from "@material-ui/core/Button";

const initialState = {
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

class Game extends React.Component {
  constructor(props) {
    super(props);
    this.updateGameOnMapClick = this.updateGameOnMapClick.bind(this);
    this.updateMapSize = this.updateMapSize.bind(this);
    this.restartGame = this.restartGame.bind(this);
  }

  state = initialState;

  componentWillMount() {
    this.setState({
      currentCity: getRandomCity([]),
    });
  }

  updateGameOnMapClick(clickedCoordinate) {
    const {playedCities, currentCity, mapSize, score} = this.state;
    const newPlayedCities = [...playedCities, currentCity];
    const newCity = getRandomCity(newPlayedCities.map(({id}) => id));
    const gameOver = newPlayedCities.length === 5;
    const distance = getDistanceBetweenClickAndCity(clickedCoordinate, mapSize, currentCity);
    const newScore = score + distance;

    this.setState({
      clickedCoordinate,
      playedCities: newPlayedCities,
      currentCity: newCity,
      gameOver,
      score: newScore,
    });
  }

  updateMapSize(mapSize) {
    this.setState({mapSize});
  }

  restartGame() {
    this.setState(initialState)
    this.componentWillMount()
  }

  render() {
    const {debug} = this.props;
    const {clickedCoordinate, currentCity, gameOver, score} = this.state;

    return (
      <div>
        <Map
          gameOver={gameOver}
          updateMapSize={this.updateMapSize}
          updateClickCoordinates={this.updateGameOnMapClick}
        />

        <div className={styles.gameMenu}>
          {currentCity &&
            <div>Find: <strong>{currentCity.name}</strong></div>
          }

          <div>
            <p>Score: <strong>{score}</strong></p>
          </div>

          {debug && clickedCoordinate.x !== null &&
          <div className={styles.clickedCoordinates}>
            <p><strong>You clicked on:</strong></p>
            <p>(x: <strong>{clickedCoordinate.x}</strong>, y: <strong>{clickedCoordinate.y}</strong>)</p>
          </div>
          }

          <Button href={''} variant="contained" color="primary" onClick={this.restartGame}>Play again</Button>
        </div>
      </div>
    );
  }
}

export default Game;
