import Button from '@material-ui/core/Button';
import _ from 'lodash';
import React from 'react';
import styles from './Splash.module.scss';
import { difficulties } from '../Game/Game';
import TopScores from '../TopScores/TopScores';
import SaveScore from '../SaveScore/SaveScore';
import RoundsResult from '../RoundsResult/RoundsResult';

class Splash extends React.Component {
  constructor(props) {
    super(props);
    this.toggleRoundsResult = this.toggleRoundsResult.bind(this);
  }

  state = {
    showRoundsResult: false,
  };

  toggleRoundsResult() {
    this.setState({
      showRoundsResult: !this.state.showRoundsResult,
    });
  }

  render() {
    const {
      gameOver,
      startGame,
      playAgain,
      isScoreSaved,
      saveScore,
      playedCities,
    } = this.props;

    const { showRoundsResult } = this.state;

    return (
      <React.Fragment>
        {gameOver && (
          <Button
            variant='contained'
            color='secondary'
            size='small'
            onClick={this.toggleRoundsResult}
            className={styles.showOverviewButton}
          >
            `{showRoundsResult ? 'Hide' : 'Show'} Overview`
          </Button>
        )}

        {gameOver && showRoundsResult && <RoundsResult playedCities={playedCities} />}

        {!showRoundsResult && (
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
            {gameOver && !isScoreSaved && (
              <SaveScore isScoreSaved={isScoreSaved} saveScore={saveScore} />
            )}
            {gameOver && isScoreSaved && <TopScores />}
          </div>
        )}
      </React.Fragment>
    );
  }
}

export default Splash;
