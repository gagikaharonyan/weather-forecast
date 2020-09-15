import React  from "react";
import styles from './ThemeSwitcherBtn.module.sass';
import {ContextType} from '../../AppSettingsContext';
import withAppSettings from '../../hocs/withAppSettings';


const ThemeSwitcherBtn: React.FunctionComponent<{appSettings?: ContextType}> = ({appSettings}) => {

    const handleBtnClick = () => {
        appSettings!.setTheme(prev => prev === 'LIGHT' ? 'DARK' : 'LIGHT')
    }

    return (
        <button className={styles.root} onClick={handleBtnClick}>
            {appSettings!.theme  === 'DARK' 
            ? <i className="fas fa-sun"></i> 
            : <i className="fas fa-moon"></i>}
        </button>  
    );
}

export default withAppSettings(ThemeSwitcherBtn);
