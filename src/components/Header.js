import React from "react";

import Card from "./Card";

import "./Header.css";

function Header(props) {
    //console.log(props.types);

    return (
        <div className="header">
            {props.types.map((type, index) => (
                <div
                    key={index}
                    onClick={() => props.addType(type)}
                    className="cell"
                >
                    <Card type={type} />
                </div>
            ))}
            <br />
        </div>
    );
}

export default Header;
