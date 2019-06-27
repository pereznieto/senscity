import React from 'react';
import styles from './RoundsResult.module.scss';
import RoundResult from '../RoundResult/RoundResult';

const RoundsResult = ({ playedCities }) => {
  return (
    <div className={styles.roundsResult}>
      {playedCities.map(city => {
        const { real, clicked } = city;
        return <RoundResult key={city.id} real={real} clicked={clicked} />;
      })}
    </div>
  );
};

export default RoundsResult;
