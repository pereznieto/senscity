import { initialState } from '.';
import {
  citiesPerGame,
  getCitiesToPlay,
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

const newGame = (store, mode, stateOverride) => {
  const citiesToPlay = getCitiesToPlay(mode);
  store.setState({
    ...stateOverride,
    mode,
    isRunning: true,
    splashScreen: false,
    citiesToPlay,
    currentCity: citiesToPlay[0],
  });
};

export const startGame = (store, mode) => newGame(store, mode, []);

export const restartGame = (store, mode) => newGame(store, mode, initialState);

export const nextCity = store => {
  store.setState({ pause: null, isRunning: true });
};

export const endTurn = (store, clickedCoordinate) => {
  const {
    playedCities,
    citiesToPlay,
    currentCity,
    mapSize,
    score,
    timeLeft,
    mode,
  } = store.state;
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
      timeLeft,
    },
  ];

  const gameOver = newPlayedCities.length === citiesPerGame;

  store.setState({
    isRunning: false,
    clickedCoordinate,
    playedCities: newPlayedCities,
    currentCity: citiesToPlay[newPlayedCities.length],
    gameOver,
    distance,
    score: score + turnScore,
    pause: {
      city: getDisplayName(currentCity, mode),
      score: turnScore,
      real: getRealCoordinates(mapSize, currentCity),
      clicked,
      timeLeft,
    },
  });
};

export const saveScore = (store, name) => {
  const { score, mode } = store.state;
  saveScoreLocally({ name, score, mode });
  store.setState({ isScoreSaved: true });
};

export const toggleRoundsResult = store => {
  store.setState({ showRoundsResult: !store.state.showRoundsResult });
};

export const updateMissedSummary = (store, city) => {
  store.setState({ missedSummary: city });
};
