
import React from "react";
import { Link } from "react-router-dom";
import '../styles/erreur404.css';

function Erreur404() {
    return (
        <div className="body error-container">
            <h1 className="error-title">404</h1>
            <p className="error-baseline">Oups ! La page que vous demandez n'existe pas.</p>
            <Link to="/" className="error-link">Retourner sur la page d’accueil</Link>
        </div>
    )
}

export default Erreur404;
