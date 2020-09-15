import React, {useState, createContext, useEffect} from 'react';

export type ContextType = {
    unit: 'C' | 'F'
    theme: 'DARK' | 'LIGHT'
    setUnit: React.Dispatch<React.SetStateAction<string>>
    setTheme: React.Dispatch<React.SetStateAction<string>>
}
    
export const AppSettingsContext = createContext<ContextType>({
    unit: 'C', setUnit: () => {},
    theme: 'LIGHT', setTheme: () => {}
});

export const AppSettingsProvider: React.FC = (props) => {
    const [_unit, _setUnit] = useState<string>('C');
    const [_theme, _setTheme] = useState<string>(window.localStorage.getItem('Theme')?? 'LIGHT');
    const values = {
        unit: _unit as ContextType['unit'],
        theme: _theme as ContextType['theme'],
        setUnit: _setUnit,
        setTheme: _setTheme
    }

    useEffect(()=> {
        window.localStorage.setItem('Theme', _theme);
    }, [_theme])

    return (
        <AppSettingsContext.Provider value={values}>
            {props.children}
        </AppSettingsContext.Provider>
    );
}