import React from 'react';
import styles from './Map.module.scss';
import Splash from '../Splash/Splash';
import RoundResult from '../RoundResult/RoundResult';

class Map extends React.Component {
  constructor(props) {
    super(props);
    this.mapDiv = React.createRef();
    this.getMouseCoordinates = this.getMouseCoordinates.bind(this);
  }

  state = {
    width: 0,
    height: 0,
    top: 0,
    left: 0,
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

    return (
      <div ref={this.mapDiv} onClick={this.getMouseCoordinates} className={styles.map}>
        {pause && <RoundResult real={pause.real} clicked={pause.clicked} />}
        {(splashScreen || gameOver) && (
          <Splash
            gameOver={gameOver}
            startGame={startGame}
            playAgain={playAgain}
            isScoreSaved={isScoreSaved}
            playedCities={playedCities}
            saveScore={this.props.saveScore}
          />
        )}
      </div>
    );
  }
}

export default Map;
