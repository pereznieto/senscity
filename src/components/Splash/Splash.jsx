import Button from '@material-ui/core/Button';
import _ from 'lodash';
import React from 'react';
import styles from './Splash.module.scss';
import { difficulties } from '../Game/Game';
import TopScores from '../TopScores/TopScores';
import SaveScore from '../SaveScore/SaveScore';
import RoundsResult from '../RoundsResult/RoundsResult';

const Splash = ({
  gameOver,
  startGame,
  playAgain,
  isScoreSaved,
  saveScore,
  playedCities,
}) => (
  <div className={styles.splash}>
    <div className={styles.title}>Senscity</div>
    <div className={styles.difficultyText}>
      Select difficulty to {gameOver ? 'play again' : 'start'}:
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
            gameOver ? playAgain(difficulty) : startGame(difficulty);
          }}
        >
          {_.capitalize(difficulty)}
        </Button>
      ))}
    </div>
    {gameOver && <RoundsResult playedCities={playedCities} />}
    {gameOver && !isScoreSaved && (
      <SaveScore isScoreSaved={isScoreSaved} saveScore={saveScore} />
    )}
    {gameOver && isScoreSaved && <TopScores />}
  </div>
);

export default Splash;
