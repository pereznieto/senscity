import React from 'react';
import styles from './App.module.scss';
import Game from "../Game/Game";

const App = () => (
  <div className={styles.app}>
    <Game debug={true}/>
  </div>
);

export default App;
