
import React, { useState } from "react";
import "../styles/slideshow.css";
import Arrow from "../assets/up-arrow.svg";

function Slideshow(props) {

    const pictures = Array.from(props.pictures);
    console.log("pictures", pictures);

    const [currentIndex, setCurrentIndex] = useState(0);
    const currentPicture = pictures[currentIndex];
    const length = pictures.length;

    function previousPicture(){
        const newIndex = currentIndex - 1;
        setCurrentIndex(newIndex < 0 ? length - 1 : newIndex);
    }

    function nextPicture(){
        const newIndex = currentIndex + 1;
        setCurrentIndex(newIndex >= length ? 0 : newIndex);
    }

    return (
        <div className="slideshow">
            <div className="slideshow-picture">
                <img className="picture" src={currentPicture} alt={`N°${currentIndex + 1} sur ${length}`} title={`N°${currentIndex + 1} sur ${length}`} />
            </div>

            {length > 1 && (
            <>
            <img src={Arrow} onClick={previousPicture} alt="Voir la précédente" title="Voir la précédente" className="slideshow-control slideshow-control-left" />
            <img src={Arrow} onClick={nextPicture} alt="Voir la suivante" title="Voir la suivante" className="slideshow-control slideshow-control-right" />
            <Dots currentIndex={currentIndex} length={length} />
            </>
            )}

        </div>
    )
} 

function Dots(props) {
    const dots = Array.from({ length: props.length }, (_, i) => i);

    return (
      <div className="dots">
        {dots.map((index) => (
          <div
            key={index}
            className={`dot ${props.currentIndex === index ? "dot-active" : ""}`}
          />
        ))}
      </div>
    )
  }

export default Slideshow;