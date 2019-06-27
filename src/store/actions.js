import { initialState } from '.';
import {
  citiesPerGame,
  getCity,
  getDisplayName,
  getRealCoordinates,
} from '../utils/city';
import { getDistanceBetweenClickAndCity } from '../utils/distance';
import { calculateTurnScore } from '../utils/score';
import { saveScoreLocally } from '../utils/storage';

export const updateMapSize = (store, mapSize) => {
  store.setState({ mapSize });
};

export const setTimeLeft = (store, timeLeft) => {
  store.setState({ timeLeft });
};

export const startGame = (store, mode) => {
  store.setState({
    mode,
    isRunning: true,
    splashScreen: false,
    currentCity: getCity(mode)([]),
  });
};

export const restartGame = (store, mode) => {
  store.setState({
    ...initialState,
    mode,
    isRunning: true,
    splashScreen: false,
    currentCity: getCity(mode)([]),
  });
};

export const nextCity = store => {
  store.setState({ pause: null, isRunning: true });
};

export const endTurn = (store, clickedCoordinate) => {
  const { playedCities, currentCity, mapSize, score, timeLeft, mode } = store.state;
  const distance = clickedCoordinate
    ? getDistanceBetweenClickAndCity(clickedCoordinate, mapSize, currentCity)
    : null;
  const turnScore = calculateTurnScore(distance, timeLeft);
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

  const newCity = getCity(mode)(newPlayedCities.map(({ id }) => id));
  const gameOver = newPlayedCities.length === citiesPerGame;

  store.setState({
    isRunning: false,
    clickedCoordinate,
    playedCities: newPlayedCities,
    currentCity: newCity,
    gameOver,
    distance,
    score: score + turnScore,
    pause: {
      city: getDisplayName(currentCity, mode),
      score: turnScore,
      real: getRealCoordinates(mapSize, currentCity),
      clicked,
    },
  });
};

export const saveScore = (store, name) => {
  const { score, mode } = store.state;
  store.setState({ isScoreSaved: true });
  saveScoreLocally({ name, score, mode });
};

export const toggleRoundsResult = store => {
  store.setState({ showRoundsResult: !store.state.showRoundsResult });
};

export const updateMissedSummary = (store, city) => {
  store.setState({ missedSummary: city });
};
