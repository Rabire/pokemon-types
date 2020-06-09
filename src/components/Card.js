import React from "react";

import "./Card.css";

function Card(props) {
    const style = {
        background:
            "linear-gradient(to bottom right, " +
            props.type.colorLight +
            ", " +
            props.type.colorDark +
            ")",
    };

    //console.log(props.type.colorDark);

    const iconsPath = require.context("../img/type-icons/", true);
    let typeIcon = iconsPath("./" + props.type.img);

    return (
        <div className="card" style={style}>
            <img src={typeIcon} alt="icon" />
            <h3>{props.type.name.toUpperCase()}</h3>
            {props.power && <h5>x {props.power}</h5>}
        </div>
    );
}

export default Card;
