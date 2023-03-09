
import React, { useState } from 'react';
import styles from "./collapse.module.css";
import ArrowUp from "../assets/up-arrow.svg"

function Collapse(props) {
  // Déclaration d'une nouvelle variable d'état, appelée "collapseOpen"
  const [collapseOpen, setCollapseOpen] = useState(false);

  return ( // retourner uniquement le titre ou le titre + description selon l'état de collapseOpen. Basculer l'état au clic sur la div du titre.
    <div className={styles.collapse_module}>
            <div className={styles.collapse_toggle} onClick={() => setCollapseOpen(!collapseOpen)}> 
                <h2 className={styles.collapse_title}>{props.title}</h2>
                <img src={ArrowUp} className={`${collapseOpen ? styles.arrow : styles.arrow_down}`} alt={`Cliquez ici pour ${collapseOpen ? "fermer" : "ouvrir"} ce module.`} title={`Cliquez ici pour ${collapseOpen ? "fermer" : "ouvrir"} ce module.`} />
            </div>
    
        { collapseOpen && (      // si le composant est à l'état "CollapseOpen", retourner également la description
                <div className={styles.collapse_description}>
                    <p className={styles.collapse_description_text}>{props.description}</p>
                </div>
        )}
    </div> 
    )
};

export default Collapse;