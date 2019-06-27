import React from 'react';
import RoundResult from 'components/RoundResult/RoundResult';

const RoundsResult = ({ roundHistory, playedCities }) =>
  playedCities.map((playedCity, index) => {
    return <RoundResult real={playedCity} clicked={roundHistory[index]} />;
  });

export default RoundsResult;
