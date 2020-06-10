import React from "react";

import "./AlertPopup.css";

function AlertPopup(props) {
    return (
        <div className="alert-popup">
            <div className="exit-btn" onClick={props.toggleIsActive}>
                <h2>X</h2>
            </div>
            <h2 className="message">{props.message}</h2>
        </div>
    );
}

export default AlertPopup;
