import cx from 'classnames';
import _ from 'lodash';
import React from 'react';
import { difficulties } from '../../utils/city';
import { getScores } from '../../utils/storage';
import styles from './TopScores.module.scss';

const TopScores = () => {
  const scores = getScores();
  const groupedScores = difficulties.map(difficulty => ({
    difficulty,
    scores: scores
      .filter(score => score.mode === difficulty)
      .sort((a, b) => (a.score > b.score ? -1 : 1)),
  }));

  const getTrophy = id => {
    switch (id) {
      case 0:
        return ' 🏆';
      case 1:
        return ' 🥈';
      case 2:
        return ' 🥉';
      default:
        return '';
    }
  };

  return (
    <div className={styles.scores}>
      <p className={styles.scoresText}>Top scores</p>
      <div className={styles.topScores}>
        {groupedScores.map(({ difficulty, scores }) => (
          <div key={difficulty} className={styles.difficulty}>
            <h3 className={styles.difficultyTitle}>{_.capitalize(difficulty)}</h3>
            {scores.map(({ name, score }, id) => (
              <div
                key={`${name}-${score}`}
                className={cx(styles.scoreItem, { [styles.topDawg]: id === 0 })}
              >
                <span className={styles.name}>
                  {name}
                  {getTrophy(id)}
                </span>
                <span className={styles.score}>{score}</span>
              </div>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
};

export default TopScores;
