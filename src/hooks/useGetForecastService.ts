import {useState, useEffect} from 'react';
import {getForecast} from '../api';


const useGetForecastService = (unit: 'C' | 'F') => {
    type Result = {
        status: 'loaded' | 'loading' | 'error',
        payload: any
    }

    const [result, setResult] = useState<Result>({status: 'loading', payload: {}})

    useEffect(()=>{
        getForecast(unit, (res) => {
            setResult({status: "loaded", payload: res});
        })
    },[unit])

    return result;
}

export default useGetForecastService;