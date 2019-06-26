import React from 'react';
import { getLineBetweenTwoPoints } from '../../utils/distance';
import styles from './Map.module.scss';
import Splash from '../Splash/Splash';

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
    } = this.props;

    return (
      <div ref={this.mapDiv} onClick={this.getMouseCoordinates} className={styles.map}>
        {pause && (
          <div className={styles.pause}>
            <div
              className={styles.realCoordinates}
              style={{
                top: `${pause.real.y - 4}px`,
                left: `${pause.real.x - 4}px`,
              }}
            />
            {pause.clicked && (
              <React.Fragment>
                <div
                  className={styles.clickedCoordinates}
                  style={{
                    top: `${pause.clicked.y - 4}px`,
                    left: `${pause.clicked.x - 4}px`,
                  }}
                />
                <div
                  className={styles.line}
                  style={getLineBetweenTwoPoints(pause.real, pause.clicked)}
                />
              </React.Fragment>
            )}
          </div>
        )}
        {(splashScreen || gameOver) && (
          <Splash
            gameOver={gameOver}
            startGame={startGame}
            playAgain={playAgain}
            isScoreSaved={isScoreSaved}
            saveScore={this.props.saveScore}
          />
        )}
      </div>
    );
  }
}

export default Map;
