
import React from "react";
import "../styles/cards.css";
import { Link } from "react-router-dom";
import Data from "../data/LogementsList";

function Cards() {
    const ImgContainerStyle = {
        width: '100%',
        height: '100%',
    }

    // REVOIR LE INLINE STYLE : BUG DU NAVIGATEUR ?
    return(
        <div className="houses-container">
            { Data.map((house) =>
            <Link to = {`logement/${house.id}`} key= {house.id} className="house-card">
                    <div style={ImgContainerStyle} className="img-container">
                        <img className="house-img" src={house.cover} alt={house.title} />
                        <div className="overlay"></div>
                    </div>
                    <h2 className="house-name">{house.title}</h2>            
            </Link>
            )
            }
        </div>
    )
}

export default Cards;