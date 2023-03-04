
import React from 'react';
import "../styles/ratings.css";
import StarUnselect from "../assets/star-unselect.svg";
import StarSelect from "../assets/star-select.svg";

function Ratings(props) {

    const maxRating = 5;
    const productRating = props.rating;
    console.log("rating", productRating);

    const starsSelect = Array.from({ length: productRating }, (_, i) => i + 1);
    console.log("StarsSelect", starsSelect);

    const starsUnselect = Array.from({ length: (maxRating - productRating) }, (_, i) => i + 1);
    console.log("StarsUnselect", starsUnselect);

    return (
        <div className="ratings">
            {starsSelect.map((star, index) => {
                index += 1;
                return (
                <img key={`starSelect + ${index}`} src={StarSelect} alt="étoile" className="star" />);
            })}

            {starsUnselect.map((star, index) => {
                index += 1;
                return (
                <img key={`starUnselect + ${index}`} src={StarUnselect} alt="étoile" className="star" />);
            })}
  </div>
);
};

export default Ratings;