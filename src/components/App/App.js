import React from 'react';
import styles from './App.module.scss';
import Map from "../Map/Map";

const App = () => (
  <div className={styles.app}>
    <h1 className={styles.title}>Senscity</h1>
    <Map/>
  </div>
);

export default App;
