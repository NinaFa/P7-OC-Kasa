
import React from "react";
import "../styles/tag.css";

function Tags(props) {
    return (
        <span className="tag">
            {props.tag}
        </span>
    )
}

export default Tags;