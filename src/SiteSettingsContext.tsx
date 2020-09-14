import React, {useState,createContext} from 'react';

type ContextType = {
    unit: 'C' | 'F',
    setUnit: React.Dispatch<React.SetStateAction<string>>
}
    
export const SiteSettingsContext = createContext<ContextType>({unit: 'C', setUnit: () => {}});

export const SiteSettingsProvider: React.FC = (props) => {
    const [_unit, _setUnit] = useState<string>('C');

    return (
        <SiteSettingsContext.Provider value={{unit: _unit as ContextType["unit"], setUnit: _setUnit}}>
            {props.children}
        </SiteSettingsContext.Provider>
    );
}