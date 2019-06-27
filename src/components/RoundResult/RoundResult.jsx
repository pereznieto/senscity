import React from 'react';
import styles from './RoundResult.module.scss';
import { getLineBetweenTwoPoints } from '../../utils/distance';

const getStyle = coordinates => ({
  top: `${coordinates.y - 4}px`,
  left: `${coordinates.x - 4}px`,
});

const RoundResult = ({ real, clicked }) => (
  <div className={styles.pause}>
    <div className={styles.real} style={getStyle(real)} />
    {clicked && (
      <React.Fragment>
        <div className={styles.clicked} style={getStyle(clicked)} />
        <div className={styles.line} style={getLineBetweenTwoPoints(real, clicked)} />
      </React.Fragment>
    )}
  </div>
);

export default RoundResult;
