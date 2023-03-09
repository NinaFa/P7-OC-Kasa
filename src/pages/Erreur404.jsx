
import React from "react";
import { Link } from "react-router-dom";
import styles from './erreur404.module.css';

function Erreur404() {
    return (
        <main className={`body ${styles.error_container}`}>
            <h1 className={styles.error_title}>404</h1>
            <p className={styles.error_baseline}>Oups ! La page que vous demandez n'existe pas.</p>
            <Link to="/" className={styles.error_link}>Retourner sur la page d’accueil</Link>
        </main>
    )
}

export default Erreur404;
