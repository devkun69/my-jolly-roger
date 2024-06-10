"use client"

import styles from "./styles.module.scss"

const JollyRoger = () => {

    return (
        <div className={styles.onePiece}>
            <div className={styles.bones}>
                {
                    Array.from({length: 4}).map((_, index) => {
                        return (<div key={index} className={styles.bone}/>)
                    })
                }
            </div>
            <div className={styles.head}>
                <div className={styles.hat}>
                    <div className={styles.lineLeft}/>
                    <div className={styles.lineRight}/>
                </div>
                {
                    Array.from({length: 2}).map((_, index) => {
                        return (<div key={index} className={styles.eye}/>);
                    })
                }
            </div>
            <div className={styles.mouth}>
                <div className={styles.teeth}/>
            </div>
        </div>
    );
};

export default JollyRoger;