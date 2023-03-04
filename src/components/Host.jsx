
import React from "react";
import "../styles/host.css";

function Host(props) {
    return (
        <div className="host">
            <p className="host-name">{props.host.name}</p>
            <img src={props.host.picture} alt={props.host.name} className="host-picture" />
        </div>
    )
}

export default Host;