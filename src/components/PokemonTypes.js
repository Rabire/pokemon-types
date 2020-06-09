import React, { useState } from "react";

import "./PokemonTypes.css";
import TypesData from "../datas/TypesData.json";

import Header from "./Header";
import ChosenType from "./ChosenType";

function PokemonTypes() {
    const types = TypesData.types;
    const [chosenTypes, setChosenTypes] = useState([TypesData.types[10]]);

    function addType(typeToPush) {
        if (chosenTypes.length < 5) {
            setChosenTypes([...chosenTypes, typeToPush]);
        } else {
            alert("Already 2 types chosen");
        }
    }

    //console.debug(chosenTypes);

    return (
        <div className="pokemon-types">
            <Header types={types} addType={addType} />
            <div className="chosen-types">
                {chosenTypes.map((typeChoosed, index) => (
                    <ChosenType key={index} typeChoosed={typeChoosed} />
                ))}
            </div>
        </div>
    );
}

export default PokemonTypes;
