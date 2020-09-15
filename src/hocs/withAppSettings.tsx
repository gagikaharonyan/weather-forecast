import React, {useContext}  from 'react';
import {AppSettingsContext} from '../AppSettingsContext';

const withAppSettings = <T extends object>(Component: React.FC<T>):React.FC<T> => {
    return (props) => {
        const settings = useContext(AppSettingsContext);

        return <Component appSettings={settings} {...props}/>
    }
}

export default withAppSettings;