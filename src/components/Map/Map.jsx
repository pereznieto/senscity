import React from 'react';
import styles from './Map.module.scss';
import Button from "@material-ui/core/Button";

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
  }

  componentDidMount() {
    const width = this.mapDiv.current.offsetWidth;
    const height = this.mapDiv.current.offsetHeight;
    const { top, left } = this.mapDiv.current.getBoundingClientRect();

    this.props.updateMapSize({ width, height });
    this.setState({ width, height, top: top.toFixed(0), left: left.toFixed(0) });
  }

  getMouseCoordinates({ clientX, clientY }) {
    const { top, left } = this.state;
    const coordinates = {
      x: clientX - left,
      y: clientY - top,
    };
    this.props.updateClickCoordinates(coordinates);
  }

  render() {
    const { pause, gameOver, playAgain } = this.props;
    return (
      <div
        ref={this.mapDiv}
        onClick={(!gameOver && !pause) ? this.getMouseCoordinates : undefined}
        className={styles.map}
      >
        {pause && <div className={styles.pause}></div>}
        {gameOver &&
          <div className={styles.gameOver}>
            <div className={styles.gameOverText}>Game over</div>
            <Button
              variant="contained"
              color="primary"
              size="large"
              onClick={playAgain}
            >
              Play again
            </Button>
          </div>
        }
      </div>
    );
  }
}

export default Map;
