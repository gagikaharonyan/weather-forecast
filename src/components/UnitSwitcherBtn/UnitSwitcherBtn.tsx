import React  from "react";
import styles from './UnitSwitcherBtn.module.sass';
import {ContextType} from '../../AppSettingsContext';
import withAppSettings from '../../hocs/withAppSettings';


const UnitSwitcherBtn: React.FunctionComponent<{appSettings?: ContextType}> = ({appSettings}) => {

    const handleBtnClick = () => {
        appSettings!.setUnit(prev => prev === 'C' ? 'F' : 'C')
    }

    return (
        <button className={styles.root} onClick={handleBtnClick}>
            {appSettings!.unit  === 'C' ? 'F' : 'C'}
        </button>  
    );
}

export default withAppSettings(UnitSwitcherBtn);
