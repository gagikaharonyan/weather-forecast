import * as testData from './mock-data';
import _axios from 'axios';
import {isDevelopment} from './utils';

const axios = _axios.create({
    baseURL: 'https://dataservice.accuweather.com/',
    timeout: 1000,
});

const KEY = 'iy69nL79xqwfKRXQvTGiiwgeFP3SCr7l';

export function getCurrentCondition(onsuccess: (data: any) => void): any {
    if(!isDevelopment()) {
        axios.get('currentconditions/v1/16890', {
            params: {
                apikey: KEY,
                language: 'en-us',
                details: 'en-us'
            }
        }).then(res => {
            onsuccess(res.data);
        })
    } else {
        console.log('Setting development data...')
        setTimeout(() => {
            onsuccess(testData.currentConditions);
        }, 500)
    }
}

export function getForecast(unit: 'C' | 'F', onsuccess: (data: any) => void): any {
    if(!isDevelopment()) {
        axios.get('forecasts/v1/daily/5day/16890', {
        params: {
            apikey: KEY,
            language: 'en-us',
            details: 'false',
            metric: unit === 'C'
        }
        }).then(res => {
            onsuccess(res.data);
        })
    } else {
        console.log('Setting development data...')
        setTimeout(() => {
            onsuccess(unit === 'C'? testData.foreCast5DayC: testData.foreCast5DayF);
        }, 500)
    }
}