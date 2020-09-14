import React, {useContext} from "react";
import styles from "./CurrentConditions.module.sass";
import {
   getImageFromNumber as getImage,
   dateFormatConverter as getDate, } from "../../utils";
import {SiteSettingsContext} from '../../SiteSettingsContext';

type props = {
  location: string;
  dateTime: string;
  weatherIcon: number;
  temp: {C: number, F: number};
  weatherText: string;
};

const CurrentConditons: React.FunctionComponent<props> = (props) => {
  const { location, dateTime, weatherIcon, temp, weatherText } = props;

  const settings = useContext(SiteSettingsContext);

  return (
    <div className={styles.root}>
      <div className={styles.location}>
        <i className="fas fa-map-marker-alt"></i>
        <span>{location}</span>
      </div>
      <span style={{margin: '5px auto'}}>{getDate(dateTime)}</span>
      <div className={styles.weather}>
        <div className={styles.icon}>
          <img src={getImage(weatherIcon)} alt="weather"></img>
        </div>
        <div className={styles.temp}>
          <span>{temp[settings.unit]}</span>
          <span>{settings.unit}</span>
        </div>
      </div>
      <span className={styles.weatherText}>{weatherText}</span>
    </div>
  );
};

export default CurrentConditons;
