import React from "react";

import "./Card.css";

function Card(props) {
    //console.log(props)
    const iconsPath = require.context("../img/type-icons/", true);
    let typeIcon = iconsPath("./Dragon.png");

    return (
        <div className="card">
            <img src={typeIcon} alt="icon" />
            <h3>
                {props.type.name.toUpperCase()}
                <em> {props.power}</em>
            </h3>
        </div>
    );
}

export default Card;
