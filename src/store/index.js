import React from 'react';
import * as actions from './actions';
import useGlobalHook from './GlobalHook';

export const initialState = {
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
  splashScreen: true,
};

const useGlobal = useGlobalHook(React, initialState, actions);

export default useGlobal;
