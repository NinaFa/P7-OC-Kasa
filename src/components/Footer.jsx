
import React from "react";
import logoFooter from "../assets/LOGO-footer.png";
import styles from "./footer.module.css";

function Footer() {
    return (
        <footer className={styles.footer}>
            <img className={styles.footer_logo} src={logoFooter} alt= "logo de Kasa" />
            <p className={styles.copyright}>© 2020 Kasa. All rights reserved</p>
        </footer>
    )
}

export default Footer;
