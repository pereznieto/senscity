import { TextField, Button } from '@material-ui/core';
import _ from 'lodash';
import React from 'react';
import styles from './SaveScore.module.scss';

class SaveScore extends React.Component {
  constructor(props) {
    super(props);
    this.saveScore = this.saveScore.bind(this);
  }

  saveScore(event) {
    event.preventDefault();
    this.props.saveScore(this.state.name);
  }

  render() {
    const { isScoreSaved } = this.props;
    return (
      <div className={styles.saveScore}>
        <div className={styles.nameWrapper}>
          <p className={styles.saveText}>Enter your name to save your score:</p>
          <TextField
            fullWidth
            id='name'
            variant='outlined'
            onChange={event => {
              this.setState({ name: _.startCase(event.target.value) });
            }}
            label='Name'
            disabled={isScoreSaved}
          />
          <Button
            variant='contained'
            color='secondary'
            size='large'
            onClick={this.saveScore}
            className={styles.saveButton}
            disabled={isScoreSaved}
          >
            {isScoreSaved ? 'Score saved!' : 'Save score'}
          </Button>
        </div>
      </div>
    );
  }
}

export default SaveScore;
