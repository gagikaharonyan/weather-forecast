import React, {useContext} from "react";
import styles from './UnitSwitcherBtn.module.sass';
import {SiteSettingsContext} from '../../SiteSettingsContext';


const UnitSwitcherBtn: React.FunctionComponent<{}> = () => {
    const settings = useContext(SiteSettingsContext);

    const handleBtnClick = () => {
        settings.setUnit(prev => prev === 'C' ? 'F' : 'C')
    }

    return (
        <button className={styles.root} onClick={handleBtnClick}>
            {settings.unit}
        </button>  
    );
}

export default UnitSwitcherBtn;
