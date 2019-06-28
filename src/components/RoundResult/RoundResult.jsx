import React from 'react';
import useGlobal from '../../store';
import { getLineBetweenTwoPoints } from '../../utils/distance';
import styles from './RoundResult.module.scss';
import Tooltip from '@material-ui/core/Tooltip';

const getStyle = coordinates => ({
  top: `${coordinates.y - 4}px`,
  left: `${coordinates.x - 4}px`,
});

const RoundResult = ({ city, city: { real, clicked } }) => {
  const { updateMissedSummary } = useGlobal()[1];

  const updateResultSummary = () => {
    city.country && updateMissedSummary(city);
  };

  return (
    <div className={styles.roundResult} onClick={updateResultSummary}>
      <Tooltip title={city.name} placement='left'>
        <div className={styles.real} style={getStyle(real)} />
      </Tooltip>
      {clicked && (
        <React.Fragment>
          <div className={styles.clicked} style={getStyle(clicked)} />
          <div className={styles.line} style={getLineBetweenTwoPoints(real, clicked)} />
        </React.Fragment>
      )}
    </div>
  );
};

export default RoundResult;
