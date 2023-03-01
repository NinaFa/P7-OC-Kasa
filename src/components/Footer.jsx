
import React from "react";
import logoFooter from "../assets/LOGO-footer.svg";
import "../styles/footer.css";

function Footer() {
    return (
        <div className="footer">
            <img className="logofooter" src={logoFooter} alt= "logo de Kasa" />
            <div className="copyright">© 2020 Kasa. All rights reserved</div>
        </div>
    )
}

export default Footer;
