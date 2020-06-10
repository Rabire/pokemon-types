import React, { useContext } from "react";

import LanguageContext from "../LanguageContext";

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

    const { lang } = useContext(LanguageContext);

    //console.log(props.type.colorDark);

    const iconsPath = require.context("../img/type-icons/", true);
    let typeIcon = iconsPath("./" + props.type.img);

    return (
        <div className="card" style={style}>
            <img src={typeIcon} alt="icon" />
            <h3>
                {lang === "en" && props.type.name.toUpperCase()}
                {lang === "fr" && props.type.fr_name.toUpperCase()}
            </h3>
            {props.power && <h5>x {props.power}</h5>}
        </div>
    );
}

export default Card;
