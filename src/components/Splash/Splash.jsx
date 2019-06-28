import Button from '@material-ui/core/Button';
import cx from 'classnames';
import _ from 'lodash';
import React from 'react';
import useGlobal from '../../store';
import { difficulties } from '../../utils/city';
import RoundsResult from '../RoundsResult/RoundsResult';
import SaveScore from '../SaveScore/SaveScore';
import TopScores from '../TopScores/TopScores';
import styles from './Splash.module.scss';

const Splash = () => {
  const [
    { gameOver, isScoreSaved, playedCities, showRoundsResult },
    { startGame, restartGame, toggleRoundsResult },
  ] = useGlobal();

  return (
    <React.Fragment>
      {gameOver && (
        <Button
          variant='contained'
          color='secondary'
          size='small'
          onClick={toggleRoundsResult}
          className={styles.showOverviewButton}
        >
          {showRoundsResult ? 'Hide' : 'Show'} Results
        </Button>
      )}
      {gameOver && <RoundsResult playedCities={playedCities} />}
      <div
        className={cx(styles.splash, {
          [styles.hide]: showRoundsResult,
        })}
      >
        <div className={styles.title}>Senscity</div>
        <div className={styles.difficultyText}>
          Select difficulty to {gameOver ? 'play again' : 'start'}
        </div>
        <div className={styles.buttonWrapper}>
          {difficulties.map(difficulty => (
            <Button
              key={difficulty}
              variant='contained'
              color='primary'
              size='large'
              className={styles.startButton}
              onClick={() => {
                gameOver ? restartGame(difficulty) : startGame(difficulty);
              }}
            >
              {_.capitalize(difficulty)}
            </Button>
          ))}
        </div>
        {gameOver && !isScoreSaved && <SaveScore />}
        {gameOver && isScoreSaved && <TopScores />}
      </div>
    </React.Fragment>
  );
};

export default Splash;
