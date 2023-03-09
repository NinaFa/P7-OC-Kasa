
import React from "react";
import styles from "./cards.module.css";
import { Link } from "react-router-dom";
import Data from "../data/HouseList";

function Cards() {
// retourner la liste des logements sous forme de cards
    return(
        <section className={styles.houses_container}>

            { Data.map((house) => // création d'une card pour chaque logement de la liste
            <Link to = {`logement/${house.id}`} key={house.id} className={styles.house_card}>
                    <div className={styles.img_container}>
                        <img className={styles.house_img} src={house.cover} alt={house.title} />
                        <div className={styles.overlay}></div>
                    </div>
                    <h2 className={styles.house_name}>{house.title}</h2>            
            </Link>
            )}
            
        </section>
    )
}

export default Cards;