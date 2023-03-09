
import React, { useState } from "react";
import styles from "./slideshow.module.css";
import Arrow from "../assets/up-arrow.svg";

function Slideshow(props) {

  // création d'un tableau des URL des photos associées au logement
  const pictures = Array.from(props.pictures);
  console.log("pictures", pictures);

  // définition d'une variable d'état pour l'index de la photo affichée
  const [currentIndex, setCurrentIndex] = useState(0); 
  const currentPicture = pictures[currentIndex]; // photo correspondant à la variable currentIndex dans le tableau des photos
  const length = pictures.length; // nombre total de photos associées au logement

  // basculer l'affichage sur la photo correspondant à l'index précédent
  function previousPicture() { 
    const newIndex = currentIndex - 1;

    /* S'il s'agissait de l'index correspondant à la première photo, le newIndex sera négatif. 
    On renverra alors l'index de la dernière photo du tableau (index length -1).
    S'il ne s'agissait pas de la première photo, alors on renverra la précédente du tableau à l'index newIndex. */
    setCurrentIndex(newIndex < 0 ? length - 1 : newIndex);
  };

  // basculer l'affichage sur la photo correspondant à l'index suivant
  function nextPicture() { 
    const newIndex = currentIndex + 1;

    /* S'il s'agissait de l'index correspondant à la dernière photo du tableau, on renverra la première photo à l'index 0. 
    S'il ne s'agissait pas de la dernière photo, alors on renverra la suivante du tableau à l'index newIndex. */
    setCurrentIndex(newIndex >= length ? 0 : newIndex);
  };

  // afficher la photo correspondant à l'index actuel ; basculement vers la photo précédente ou suivante possible au clic sur les flèches
  return ( 
    <section className={styles.slideshow}>
        <div className={styles.slideshow_picture}>
            <img className={styles.picture} 
              src={currentPicture} 
              alt={`N°${currentIndex + 1} sur ${length}`} 
              title={`N°${currentIndex + 1} sur ${length}`} />
        </div>

        {length > 1 && ( // s'il y a plusieurs photos, ajouter les flèches permettant le défilement et le détail du nombre de photos ou bullet points
        <>
          <img src={Arrow} onClick={previousPicture} 
            alt="Voir la précédente" title="Voir la précédente" 
            className={`${styles.slideshow_control} ${styles.slideshow_control_left}`}
          />
          <img src={Arrow} onClick={nextPicture} 
            alt="Voir la suivante" title="Voir la suivante" 
            className={`${styles.slideshow_control} ${styles.slideshow_control_right}`} 
          />
          <p className={styles.picture_number}>{`${currentIndex + 1}/${length}`}</p>
          <Dots currentIndex={currentIndex} length={length} />
        </>
        )}

    </section>
  )
} 

// fonction permettant l'affichage alternatif des bullet points sur la version mobile
function Dots(props) {

  // création d'un tabeau avec un nombre de valeurs correspondant au nombre de photos du logement
  const dots = Array.from({ length: props.length }, (_, i) => i); 

  // retourner un bullet point pour chaque photo, avec un style différent pour celui correspondant à l'index de la photo actuelle
  return (
    <aside className={styles.dots}>
      {dots.map((index) => (
        <div
          key={index}
          className={`${styles.dot} ${props.currentIndex === index ? styles['dot_active'] : ''}`}
        />
      ))}
    </aside>
  )
  }

export default Slideshow;