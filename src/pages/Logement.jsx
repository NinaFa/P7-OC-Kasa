
import React from "react";
import { Navigate, useParams } from "react-router-dom";
import Collapse from "../components/Collapse.jsx";
import Slideshow from "../components/Slideshow.jsx";
import Tags from "../components/Tags.jsx";
import Host from "../components/Host.jsx";
import Rating from "../components/Rating.jsx";
import Data from "../data/HouseList.json";
import "./logement.css";

function Logement() {
    // trouver l'id depuis les paramètres de l'URL, puis retrouver le logement associé à l'id dans le fichier JSON
    const { id } = useParams();
    console.log(id);
    const house = Data.find((house) => house.id === id);
    console.log(house);

    if (!house) {
        // si l'id ne correspond à aucun logement enregistré, redirection vers la page d'Erreur 404
        return <Navigate to="404" />;
    }

    // si un logement est associé à l'id, retourner la page Logement avec les informations détaillées
    return (
            <main className="body product_container">
                <Slideshow pictures={house.pictures} alt={house.title} />

                <section className="main_info">

                    <div className="practical_info">
                        <h1 className="house_title">{house.title}</h1>
                        <p className="house_location">{house.location}</p>
                        <div className="tags">
                            {house.tags.map((tag, index) => (
                            <Tags key={`${house.id}`+tag} tag={tag} />))}
                        </div>
                    </div>

                    <aside className="social_info">
                        <Host
                            host={house.host}
                        />
                        <Rating 
                            rating={house.rating}
                        />
                    </aside>

                </section>

                <section className="details">
                    <div className="product_collapse" >
                        <Collapse 
                            title="Description" 
                            description={house.description}
                        />
                    </div>
                    <div className="product_collapse" >
                        <Collapse
                            title="Équipements"
                            description={house.equipments.map((equipment, index) => (
                                <span className="equipment_item" key={`${house.id}`+index}>{equipment}</span>))}
                        />
                    </div>
                </section>
            </main> )
};

export default Logement;