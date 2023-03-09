
import React from 'react';
import styles from "./rating.module.css";
import StarUnselect from "../assets/star-unselect.svg";
import StarSelect from "../assets/star-select.svg";

function Ratings(props) {

    const maxRating = 5; // Note maximale pouvant être atteinte
    const productRating = props.rating; // Note reçue par le produit
    console.log("rating", productRating);

    const starsSelect = Array.from({ length: productRating }, (_, i) => i + 1); // création des étoiles acquises (de 1 jusqu'à la note du produit)
    console.log("StarsSelect", starsSelect);

    const starsUnselect = Array.from({ length: (maxRating - productRating) }, (_, i) => i + 1); // création d'un tableau des étoiles non acquises
    console.log("StarsUnselect", starsUnselect);

    return ( // retourner les étoiles aux formats correspondants (fond coloré si acquises, et fond grisé si non acquises)
        <div className="ratings"> 
            {starsSelect.map((star, index) => {
                index += 1;
                return (
                <img key={`starSelect + ${index}`} src={StarSelect} alt="étoile" className={styles.star} />);
            })}

            {starsUnselect.map((star, index) => {
                index += 1;
                return (
                <img key={`starUnselect + ${index}`} src={StarUnselect} alt="étoile" className={styles.star} />);
            })}
  </div>
);
};

export default Ratings;