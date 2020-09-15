import React from "react";
import styles from "./Forecast.module.sass";
import useGetForecastService from "../../hooks/useGetForecastService";
import ForecastCard from "../ForecastCard";
import {ContextType} from '../../AppSettingsContext';
import withAppSettings from '../../hocs/withAppSettings';

const Forecast: React.FunctionComponent<{appSettings?: ContextType}> = (props) => {
  const service = useGetForecastService(props.appSettings!.unit);

  return (
    <div className={styles.root}>
      {service.status === "loaded" ? (
        <>
          <span>{service.payload.Headline.Text}</span>
          <div className={styles.forecastList}>
            {service.payload.DailyForecasts.map((forecast: any, i: number) => (
              <ForecastCard
                key={i}
                date={forecast.Date}
                minTemp={forecast.Temperature.Minimum.Value}
                maxTemp={forecast.Temperature.Maximum.Value}
                unit={forecast.Temperature.Minimum.Unit}
                nightIcon={forecast.Night.Icon}
                dayIcon={forecast.Day.Icon}
              />
            ))}
          </div>
        </>
      ) : (
        <span>Loading...</span>
      )}
    </div>
  );
};

export default withAppSettings(Forecast);
