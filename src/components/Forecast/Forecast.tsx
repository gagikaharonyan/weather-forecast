import React, {useContext} from "react";
import styles from "./Forecast.module.sass";
import useGetForecastService from "../../hooks/useGetForecastService";
import ForecastCard from "../ForecastCard";
import {SiteSettingsContext} from '../../SiteSettingsContext';

const Forecast: React.FunctionComponent<{}> = () => {
  const settings = useContext(SiteSettingsContext);
  const service = useGetForecastService(settings.unit);

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

export default Forecast;
