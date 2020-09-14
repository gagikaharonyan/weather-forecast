import React, {useState, useEffect} from 'react';
import CurrentCondition from './components/CurrentConditions';
import ShowForecastBtn from './components/ShowForecastBtn';
import UnitSwitcherBtn from './components/UnitSwitcherBtn';
import Forecast from './components/Forecast';
import {getCurrentCondition} from './api'

function App() {
    const [isShowForcastClicked, setIsShowForcastClicked] = useState<boolean>(false);
    const [currentCondition, setCurrentCondition] = useState<{isLoaded: boolean, res: Array<any>}>({isLoaded: false, res: []});
    const data = currentCondition.isLoaded? currentCondition.res[0]: {};

    const handleShowForcastClick = () => {
        setIsShowForcastClicked(prevState => !prevState)
    }

    useEffect(() => {
        getCurrentCondition((res) => {
            setCurrentCondition({isLoaded: true, res})
        })
    }, [])
    
    return (
        <>
            <UnitSwitcherBtn/>
            {currentCondition.isLoaded
            ?<CurrentCondition
                location="Armenia, Yerevan"
                dateTime={data.LocalObservationDateTime}
                weatherIcon={data.WeatherIcon}
                temp={{C: data.Temperature.Metric.Value, F: data.Temperature.Imperial.Value}}
                weatherText={data.WeatherText}
            />
            :<span>Loading...</span>}
            <ShowForecastBtn 
                isClicked={isShowForcastClicked}
                onClick={handleShowForcastClick}
             />
            {isShowForcastClicked &&
            <Forecast/>}
        </>
    );
}

export default App;
