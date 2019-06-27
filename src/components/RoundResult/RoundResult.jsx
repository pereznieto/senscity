import React from 'react';
import styles from './RoundResult.module.scss';
import { getLineBetweenTwoPoints } from '../../utils/distance';

const RoundResult = ({ real, clicked }) => (
  <div className={styles.pause}>
    <div
      className={styles.realCoordinates}
      style={{
        top: `${real.y - 4}px`,
        left: `${real.x - 4}px`,
      }}
    />
    {clicked && (
      <React.Fragment>
        <div
          className={styles.clickedCoordinates}
          style={{
            top: `${clicked.y - 4}px`,
            left: `${clicked.x - 4}px`,
          }}
        />
        <div className={styles.line} style={getLineBetweenTwoPoints(real, clicked)} />
      </React.Fragment>
    )}
  </div>
);

export default RoundResult;
