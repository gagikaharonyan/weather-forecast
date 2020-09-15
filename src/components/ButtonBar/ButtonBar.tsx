import React  from "react";
import styles from './ButtonBar.module.sass';
import UnitsSwitchBtn from '../UnitSwitcherBtn';
import ThemeSwitchBtn from '../ThemeSwitcherBtn';


const ButtonBar: React.FunctionComponent = () => {
    return (
        <div className={styles.root}>
            <ThemeSwitchBtn/>
            <UnitsSwitchBtn/>
        </div>
    );
}

export default ButtonBar;
