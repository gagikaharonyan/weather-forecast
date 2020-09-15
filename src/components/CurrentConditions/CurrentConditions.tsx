import React from "react";
import styles from "./CurrentConditions.module.sass";
import {
   getImageFromNumber as getImage,
   dateFormatConverter as getDate, } from "../../utils";
import {ContextType as appSettings} from '../../AppSettingsContext';
import withAppSettings from '../../hocs/withAppSettings'

type props = {
  location: string;
  dateTime: string;
  weatherIcon: number;
  temp: {C: number, F: number};
  weatherText: string;
  appSettings?: appSettings | undefined;
};

const CurrentConditons: React.FunctionComponent<props> = (props) => {
  const { appSettings, location, dateTime, weatherIcon, temp, weatherText } = props;

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
          <span>{temp[appSettings!.unit]}</span>
          <span>{appSettings!.unit}</span>
        </div>
      </div>
      <span className={styles.weatherText}>{weatherText}</span>
    </div>
  );
};

export default withAppSettings<props>(CurrentConditons);
