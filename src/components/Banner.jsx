
import React from "react";
import "../styles/banner.css";

function Banner(props) {
    if (props.origin === "home") {
        return(
            <div className="banner-container-home">
                <img src={props.img} alt="Kasa - Chez vous, partout et ailleurs." />
                <div className="banner-overlay"></div>
                <h1 className="slogan">Chez vous,<br className="line-break-mobile"/> partout et ailleurs</h1>
            </div> 
        )}

    else if (props.origin === "about") {
        return(
            <div className="banner-container-about">
                <img src={props.img} alt="Kasa - À propos" />
                <div className="banner-overlay"></div>
            </div> 
        )}

    else if (props.origin === "logement") {
        return(
            <div className="banner-container-logement">
                <img src={props.img} alt="Kasa - Détails sur le logement" />
                <div className="banner-overlay"></div>
            </div> 
        )}
};

export default Banner;
