import React from 'react';
import styles from './Game.module.scss';
import Map from "../Map/Map";

class Game extends React.Component {
  constructor(props) {
    super(props);
    this.updateClickCoordinates = this.updateClickCoordinates.bind(this);
    this.updateMapSize = this.updateMapSize.bind(this);
  }

  state = {
    mapSize: {
      width: 0,
      height: 0,
    },
    clickedCoordinate: {
      x: null,
      y: null,
    },
  }

  updateClickCoordinates(clickedCoordinate) {
    this.setState({ clickedCoordinate });
  }

  updateMapSize(mapSize) {
    this.setState({ mapSize });
  }

  render() {
    return (
      <div>
        <Map
          updateMapSize={this.updateMapSize}
          updateClickCoordinates={this.updateClickCoordinates}
        />
        {this.state.clickedCoordinate.x !== null &&
          <div className={styles.clickedCoordinates}>
            <p><strong>You clicked on:</strong></p>
            <p>(x: <strong>{this.state.clickedCoordinate.x}</strong>, y: <strong>{this.state.clickedCoordinate.y}</strong>)</p>
          </div>
        }
      </div>
    );
  }
}

export default Game;
