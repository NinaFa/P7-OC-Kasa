
import React, { useState } from 'react';
import "../styles/collapse.css";
import ArrowUp from "../assets/up-arrow.svg"
import ArrowDown from "../assets/down-arrow.svg"

function Collapse(props) {
  // Déclaration d'une nouvelle variable d'état, appelée "collapseState"
  const [collapseOpen, setCollapseOpen] = useState(false);

  return (
    <div className="collapse-module">

        { collapseOpen? 
        
        (<>
            <div className="collapse-toggle" onClick={() => setCollapseOpen(!collapseOpen)}>
                <h2 className="collapse-title">{props.title}</h2>
                <img src={ArrowUp} alt="Cliquez pour fermer ce module." title="Cliquez pour fermer ce module." />
            </div>
            <div className="collapse-description">
                    <p>{props.description}</p>
            </div>
        </> ) 
    
    : 
    
        (<>
            <div className="collapse-toggle" onClick={() => setCollapseOpen(!collapseOpen)}>
                <h2 className="collapse-title">{props.title}</h2>
                <img src={ArrowDown} alt="Cliquez pour ouvrir ce module." title="Cliquez pour ouvrir ce module." />
            </div>
        </> )} 

    </div> )};

export default Collapse;