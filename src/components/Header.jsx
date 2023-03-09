
import React from "react";
import { NavLink, useNavigate } from "react-router-dom";
import logoPrimary from "../assets/LOGO-primary.png";
import styles from "./header.module.css";


function Header() {

    // définition de la fonction onClick pour rediriger l'utilisateur vers la page d'accueil au clic sur le logo
    let navigate = useNavigate(); 
    const HomeRedirect = () => { 
        let path = `/`; 
        navigate(path);
    }

    return (
        <header className={styles.header}>
            <div className={styles.navbar}>

                <div className={styles.header_logo}>
                    <img className={styles.header_logo} src={logoPrimary} alt="logo" onClick={HomeRedirect} />
                </div>

                <nav className={styles.nav_links}>
                    <NavLink to="/" className={styles.nav_link}>
                        Accueil
                    </NavLink>
                    <NavLink to="/a-propos" className={styles.nav_link}>
                        A Propos
                    </NavLink>
                </nav>

            </div>
        </header>
    )
};

export default Header;
