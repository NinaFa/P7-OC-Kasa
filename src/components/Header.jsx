
import React from "react";
import { NavLink, useNavigate } from "react-router-dom";
import logoPrimary from "../assets/LOGO-primary.svg";
// import Home from '../pages/Home.jsx';
import "../styles/header.css";


function Header() {

    let navigate = useNavigate(); 
    const HomeRedirect = () =>{ 
        let path = `/`; 
        navigate(path);
    }

    return (
        <div className="header">
            <div className="navbar">
                <div className="logo-header">
                    <img className="logo-header" src={logoPrimary} alt="logo" onClick={HomeRedirect} /> 
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
