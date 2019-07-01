import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
import cx from 'classnames';
import _ from 'lodash';
import React from 'react';
import useGlobal from '../../store';
import { getDisplayName } from '../../utils/city';
import styles from './Controls.module.scss';

const Controls = () => {
  const [
    { mode, score, pause, gameOver, distance, splashScreen, currentCity, missedSummary },
    { nextCity },
  ] = useGlobal();

  const hasMissedSummary = !_.isEmpty(missedSummary);
  const getCityToDisplay = () =>
    hasMissedSummary ? `${missedSummary.name}, ${missedSummary.country}` : pause.city;
  const distanceToDisplay = hasMissedSummary ? missedSummary.distance : distance;

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
      {!splashScreen && !pause && currentCity && (
        <Grid item sm={4}>
          <div>
            <p>
              Find: <strong>{getDisplayName(currentCity, mode)}</strong>
            </p>
          </div>
        </Grid>
      )}
      {pause && (
        <React.Fragment>
          <Grid item sm={4}>
            <div>
              <p>
                You missed <strong>{getCityToDisplay()} </strong>
                {distanceToDisplay ? (
                  <span>
                    by<strong> {distanceToDisplay.toFixed(2)} km</strong>
                  </span>
                ) : (
                  'completely!'
                )}
              </p>
            </div>
          </Grid>
          <Grid item sm={4}>
            {!gameOver && (
              <Button variant='contained' color='primary' size='large' onClick={nextCity}>
                Next city
              </Button>
            )}
          </Grid>
        </React.Fragment>
      )}
    </Grid>
  );
};

export default Controls;
