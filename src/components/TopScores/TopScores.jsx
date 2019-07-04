import CircularProgress from '@material-ui/core/CircularProgress';
import cx from 'classnames';
import _ from 'lodash';
import React from 'react';
import useGlobal from '../../store';
import { difficulties } from '../../utils/city';
import styles from './TopScores.module.scss';

const TopScores = () => {
  const [{ scores }, { getScores }] = useGlobal();

  if (_.isEmpty(scores)) {
    getScores();
    return <CircularProgress className={styles.loading} />;
  }

  const groupedTopScores = difficulties.map(difficulty => ({
    difficulty,
    scores: scores
      .filter(score => score.mode === difficulty)
      .sort((a, b) => (a.score > b.score ? -1 : 1))
      .slice(0, 10),
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
      <p className={styles.scoresText}>Top scores globally</p>
      <div className={styles.topScores}>
        {groupedTopScores.map(({ difficulty, scores }) => (
          <div key={difficulty} className={styles.difficulty}>
            <h3 className={styles.difficultyTitle}>{_.capitalize(difficulty)}</h3>
            {scores.map(({ name, score }, id) => (
              <div
                key={`${name}-${score}-${id}`}
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
