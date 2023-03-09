
import React from "react";
import styles from "./tags.module.css";

function Tags(props) {
    return (
        <span className={styles.tag}>
            {props.tag}
        </span>
    )
}

export default Tags;