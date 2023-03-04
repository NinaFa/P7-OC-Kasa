
import React, { useEffect } from "react";
import { useNavigate, useParams} from "react-router-dom";
import Collapse from "../components/Collapse.jsx";
import Slideshow from "../components/Slideshow.jsx";
import Tags from "../components/Tags.jsx";
import Host from "../components/Host.jsx";
import Rating from "../components/Rating.jsx";
import Data from "../data/HouseList.json";
import "../styles/logement.css";

function Logement() {

    const { id } = useParams();
    console.log(id);
    const house = Data.find ((house) => house.id === id);
    console.log(house);
    const navigate = useNavigate ();

    useEffect (() => {
        if (house.length === 0) {
            navigate ("../pages/Erreur404")
        }
    },);

    return (
        <div className="body product-container">
            <Slideshow pictures={house.pictures} alt={house.title} />

            <div className="main-info">

                <div className="practical-info">
                    <h1 className="house-title">{house.title}</h1>
                    <p className="house-location">{house.location}</p>
                    <div className="tags">
                        {house.tags.map((tag, index) => (
                        <Tags key={`${house.id}`+tag} tag={tag} />))}
                    </div>
                </div>

                <div className="social-info">
                    <Host
                        host={house.host}
                    />
                    <Rating 
                        rating={house.rating}
                    />
                </div>

            </div>

            <div className="details">
                <div className="product-collapse" >
                    <Collapse 
                        title="Description" 
                        description={house.description}
                    />
                </div>
                <div className="product-collapse" >
                    <Collapse
                        title="Équipements"
                        description={house.equipments.map((equipment, index) => (
                            <p key={`${house.id}`+index}>{equipment}</p>))}
                    />
                </div>
            </div>
        </div>
    )
};

export default Logement;