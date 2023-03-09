
import React from "react";
import styles from "./banner.module.css";

function Banner(props) { // composant <Banner /> s'adaptant aux pages Home et A Propos (styles, image, titres et attributs alt)

    if (props.origin === "home") {
        return(
            <section className={styles.banner_container_home}>
                <img src={props.img} alt="Kasa - Chez vous, partout et ailleurs." />
                <div className={styles.banner_overlay}></div>
                <h1 className={styles.slogan}>Chez vous,<br className={styles.br} /> partout et ailleurs</h1>
            </section> 
        )
    }

    else if (props.origin === "about") {
        return(
            <section className={styles.banner_container_about}>
                <img src={props.img} alt="Kasa - À propos" />
                <div className={styles.banner_overlay}></div>
            </section> 
        )
    }
};

export default Banner;
