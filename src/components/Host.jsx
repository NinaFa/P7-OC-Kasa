
import React from "react";
import styles from "./host.module.css";

function Host(props) {
    return (
        <div className={styles.host}>
            <p className={styles.host_name}>{props.host.name}</p>
            <img src={props.host.picture} alt={props.host.name} className={styles.host_picture} />
        </div>
    )
}

export default Host;