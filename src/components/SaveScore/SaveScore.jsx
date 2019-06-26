import { Button, TextField } from '@material-ui/core';
import _ from 'lodash';
import React, { useState } from 'react';
import styles from './SaveScore.module.scss';

const SaveScore = ({ saveScore, isScoreSaved }) => {
  const [name, setName] = useState('');
  const saveScoreToLocalStorage = event => {
    event.preventDefault();
    saveScore(name);
  };

  return (
    <div className={styles.saveScore}>
      <div className={styles.nameWrapper}>
        <p className={styles.saveText}>Enter your name to save your score:</p>
        <TextField
          fullWidth
          id='name'
          variant='outlined'
          onChange={event => {
            setName(_.startCase(event.target.value));
          }}
          label='Name'
          disabled={isScoreSaved}
        />
        <Button
          variant='contained'
          color='secondary'
          size='large'
          onClick={saveScoreToLocalStorage}
          className={styles.saveButton}
          disabled={isScoreSaved}
        >
          {isScoreSaved ? 'Score saved!' : 'Save score'}
        </Button>
      </div>
    </div>
  );
};

export default SaveScore;
