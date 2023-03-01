
import React from "react";
import "../styles/banner.css";

function Banner() {

    return (
        <div className="banner-container">
            <div className="banner-image">
              <div className="banner-overlay"></div>
            </div>
            <h1 className="slogan">Chez vous,<br className="line-break-mobile"/> partout et ailleurs</h1>
        </div>
    )
};

export default Banner;
