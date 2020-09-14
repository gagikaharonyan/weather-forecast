import React from 'react';
import styles from './ForecastCard.module.sass';
import {
  getImageFromNumber as getImage,
  dateFormatConverter as getDate,
} from '../../utils';

type props = {
  date: string;
  minTemp: number;
  maxTemp: number;
  unit: 'C' | 'F';
  nightIcon: number;
  dayIcon: number;
};

const ForecastCard: React.FunctionComponent<props> = (props) => {
  const { date, minTemp, maxTemp, unit, dayIcon, nightIcon } = props;

  return (
    <div className={styles.root}>
      <span className={styles.date}>{getDate(date).slice(0, 10)}</span>
      <div className={styles.cols}>
        <div className={styles.col}>
          <span>Night</span>
          <div className={styles.weatherIcon}>
            <img src={getImage(nightIcon)}  alt="weather"/>
          </div>
          <span className={styles.temp}>{`${minTemp} ${unit}`}</span>
        </div>
        <div className={styles.col}>
          <span>Day</span>
          <div className={styles.weatherIcon}>
            <img src={getImage(dayIcon)} alt="weather" />
          </div>
          <span className={styles.temp}>{`${maxTemp} ${unit}`}</span>
        </div>
      </div>
    </div>
  );
};

export default ForecastCard;
