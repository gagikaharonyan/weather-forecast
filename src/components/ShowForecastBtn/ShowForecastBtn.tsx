import React from "react";
import styles from './ShowForecastBtn.module.sass';

type Props = {
    onClick: (event: React.MouseEvent<HTMLDivElement>) => void,
    isClicked: boolean
}

const ShowForecastBtn: React.FunctionComponent<Props> = (props) =>  (
        <div className={styles.root} onClick={props.onClick}>
            {props.isClicked
            ?<>
                <span>Show less</span>
                <i className="fas fa-angle-up"></i>
            </>
            :<>
                <span>Show more</span>
                <i className="fas fa-angle-down"></i>
            </>}
        </div>
    );

export default ShowForecastBtn;
