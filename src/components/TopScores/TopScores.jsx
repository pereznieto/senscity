import _ from 'lodash';
import React from 'react';
import { getScores } from '../../utils/storage';
import styles from './TopScores.module.scss';

const TopScores = () => (
  <div className={styles.scores}>
    <p className={styles.scoresText}>Top scores:</p>
    <div className={styles.topScores}>
      {getScores()
        .sort((a, b) => (a.score > b.score ? -1 : 1))
        .map(({ name, score, mode }) => (
          <div className={styles.score}>
            <strong className={styles.scoreItem}>{score}:</strong>
            <span className={styles.nameItem}>{name}</span>
            <em className={styles.modeItem}>({_.startCase(mode)})</em>
          </div>
        ))}
    </div>
  </div>
);

export default TopScores;
