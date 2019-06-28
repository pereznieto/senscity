import _ from 'lodash';
import React from 'react';
import { getScores } from '../../utils/storage';
import styles from './TopScores.module.scss';
import { difficulties } from '../../utils/city';

const TopScores = () => {
  const scores = getScores();
  const groupedScores = difficulties.map(difficulty => ({
    difficulty,
    scores: scores
      .filter(score => score.mode === difficulty)
      .sort((a, b) => (a.score > b.score ? -1 : 1)),
  }));

  console.log('groupedScores: ', groupedScores);

  return (
    <div className={styles.scores}>
      <p className={styles.scoresText}>Top scores</p>
      <div className={styles.topScores}>
        {groupedScores.map(({ difficulty, scores }) => (
          <div key={difficulty} className={styles.difficulty}>
            <h3 className={styles.difficultyTitle}>{_.capitalize(difficulty)}</h3>
            {scores.map(({ name, score }) => (
              <div key={`${name}-${score}`} className={styles.scoreItem}>
                <span className={styles.name}>{name}:</span>
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
