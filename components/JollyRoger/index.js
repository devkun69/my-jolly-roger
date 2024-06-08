"use client"

import styles from "./styles.module.scss"

const JollyRoger = () => {

    return (
        <div className={styles.onePiece}>
            <div className={styles.bones}>
                <div className={styles.bone}/>
                <div className={styles.bone}/>
                <div className={styles.bone}/>
                <div className={styles.bone}/>
            </div>
            <div className={styles.head}>
                <div className={styles.hat}>
                    <div className={styles.lineLeft}/>
                    <div className={styles.lineRight}/>
                </div>
                <div className={styles.eye}/>
                <div className={styles.eye}/>
            </div>
            <div className={styles.mouth}>
                <div className={styles.teeth}/>
            </div>
        </div>
    );
};

export default JollyRoger;