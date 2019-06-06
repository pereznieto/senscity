import React from 'react';
import styles from './Map.module.scss';

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
        return (
            <div
                ref={this.mapDiv}
                onClick={this.getMouseCoordinates}
                className={styles.map}
            />
        );
    }
}

export default Map;
