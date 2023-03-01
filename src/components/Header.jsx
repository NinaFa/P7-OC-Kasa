
import React from "react";
import { NavLink } from "react-router-dom";
import logoPrimary from "../assets/LOGO-primary.svg";
import "../styles/header.css";

function Header() {
    return (
        <div className="header">
            <div className="navbar">
                <div className="logo-header">
                    <img className="logo-header" src={logoPrimary} alt="logo" /> 
                </div>
                <div className="nav-links">
                    <NavLink to="/">
                        Accueil
                    </NavLink>
                    <NavLink to="/a-propos">
                        A Propos
                    </NavLink>
                </div>
            </div>
        </div>
    )
};

export default Header;
