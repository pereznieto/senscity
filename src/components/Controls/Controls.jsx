import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
import cx from 'classnames';
import _ from 'lodash';
import React from 'react';
import useGlobal from '../../store';
import { citiesPerGame, getDisplayName } from '../../utils/city';
import styles from './Controls.module.scss';

const Controls = () => {
  const [
    {
      mode,
      score,
      pause,
      gameOver,
      distance,
      splashScreen,
      currentCity,
      missedSummary,
      round,
    },
    { nextCity },
  ] = useGlobal();

  const hasMissedSummary = !_.isEmpty(missedSummary);
  const getCityToDisplay = () =>
    hasMissedSummary
      ? `${missedSummary.name}, ${missedSummary.country}`
      : pause.city.name;
  const distanceToDisplay = hasMissedSummary ? missedSummary.distance : distance;
  const roundToDisplay = hasMissedSummary ? missedSummary.round : round;
  const statsToDisplay = hasMissedSummary && (
    <div>
      <p>
        Time left: <strong>{(missedSummary.timeLeft / 1000).toFixed(2)}</strong>s | Score:
        <strong> {missedSummary.score}</strong>
      </p>
    </div>
  );

  return (
    <Grid container spacing={2} className={styles.controls}>
      {!splashScreen && (
        <Grid item sm={4}>
          <div
            className={cx(styles.score, {
              [styles.finalScore]: gameOver,
            })}
          >
            <p>
              {gameOver ? 'Final score: ' : 'Score: '}
              <strong>{score.toFixed(0)}</strong>
            </p>
          </div>
        </Grid>
      )}
      <Grid item sm={4}>
        {!splashScreen && (
          <p className={styles.round}>
            Round <strong>{roundToDisplay}</strong> of <strong>{citiesPerGame}</strong>
          </p>
        )}
        {!splashScreen && !pause && currentCity && (
          <p>
            Find <strong>{getDisplayName(currentCity, mode)}</strong>
          </p>
        )}
        {pause && (
          <div>
            <p>
              You missed <strong>{getCityToDisplay()}</strong>
            </p>
            <p>
              {distanceToDisplay ? (
                <span>
                  by<strong> {distanceToDisplay.toFixed(2)}</strong> km
                </span>
              ) : (
                <span>completely!</span>
              )}
            </p>
            {statsToDisplay}
          </div>
        )}
      </Grid>
      {pause && !gameOver && (
        <Grid item sm={4}>
          <Button variant='contained' color='primary' size='large' onClick={nextCity}>
            Next city
          </Button>
        </Grid>
      )}
    </Grid>
  );
};

export default Controls;
