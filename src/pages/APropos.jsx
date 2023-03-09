
import React from "react";
import styles from './a-propos.module.css';
import Banner from '../components/Banner.jsx';
import Collapse from '../components/Collapse.jsx';
import Data from "../data/APropos"; // Création et importation d'un fichier JSON : tableau comportant chaque paire titre / description
import Image from "../assets/kalen-emsley-Bkci_8qcdvQ-unsplash 2.webp"

function APropos() {
    // retourner la version adaptée du composant <Banner />, ainsi qu'un composant <Collapse /> pour chaque item du fichier de données JSON
    return (
        <main className="body">            
            <Banner img={Image} origin="about" />

            <section className={styles.collapse_container}>
                { Data.map((item) =>
                    <Collapse key={item.title} title={item.title} description={item.description} />
                )}   
            </section>

        </main>
    )
}

export default APropos;