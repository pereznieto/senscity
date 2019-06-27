import React from 'react';
import styles from './RoundsResult.module.scss';
import RoundResult from '../RoundResult/RoundResult';

const RoundsResult = ({ playedCities }) => (
  <div className={styles.roundsResult}>
    {playedCities.map(({ real, clicked, id }) => (
      <RoundResult key={id} real={real} clicked={clicked} />
    ))}
  </div>
);

export default RoundsResult;
