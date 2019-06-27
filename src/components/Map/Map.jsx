import React from 'react';
import RoundResult from '../RoundResult/RoundResult';
import Splash from '../Splash/Splash';
import styles from './Map.module.scss';

class Map extends React.Component {
  constructor(props) {
    super(props);
    this.mapDiv = React.createRef();
    this.getMouseCoordinates = this.getMouseCoordinates.bind(this);
    this.toggleRoundsResult = this.toggleRoundsResult.bind(this);
  }

  state = {
    width: 0,
    height: 0,
    top: 0,
    left: 0,
    showRoundsResult: false,
  };

  componentDidMount() {
    const width = this.mapDiv.current.offsetWidth;
    const height = this.mapDiv.current.offsetHeight;
    const { top, left } = this.mapDiv.current.getBoundingClientRect();

    this.props.updateMapSize({ width, height });
    this.setState({
      width,
      height,
      top: top.toFixed(0),
      left: left.toFixed(0),
    });
  }

  getMouseCoordinates({ clientX, clientY }) {
    const { gameOver, pause, splashScreen } = this.props;

    if (!gameOver && !pause && !splashScreen) {
      const { top, left } = this.state;
      const coordinates = {
        x: clientX - left,
        y: clientY - top,
      };
      this.props.updateClickCoordinates(coordinates);
    }
  }

  toggleRoundsResult() {
    this.setState({
      showRoundsResult: !this.state.showRoundsResult,
    });
  }

  render() {
    const {
      splashScreen,
      startGame,
      pause,
      gameOver,
      playAgain,
      isScoreSaved,
      playedCities,
    } = this.props;

    const { showRoundsResult } = this.state;

    return (
      <div ref={this.mapDiv} onClick={this.getMouseCoordinates} className={styles.map}>
        {pause && !showRoundsResult && (
          <RoundResult real={pause.real} clicked={pause.clicked} />
        )}
        {(splashScreen || gameOver) && (
          <Splash
            gameOver={gameOver}
            startGame={startGame}
            playAgain={playAgain}
            isScoreSaved={isScoreSaved}
            playedCities={playedCities}
            showRoundsResult={showRoundsResult}
            toggleRoundsResult={this.toggleRoundsResult}
            saveScore={this.props.saveScore}
          />
        )}
      </div>
    );
  }
}

export default Map;
