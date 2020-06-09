import React, { useState } from "react";

import "./PokemonTypes.css";
import TypesData from "../datas/TypesData.json";

import Header from "./Header";
import ChosenType from "./ChosenType";
import TypeStatistics from "./TypeStatistics";

function PokemonTypes() {
    const types = TypesData.types;
    const [chosenTypes, setChosenTypes] = useState([]);

    function addType(typeToPush) {
        if (chosenTypes.length < 2) {
            setChosenTypes([...chosenTypes, typeToPush]);
        } else {
            alert("Already 2 types chosen");
        }
    }

    //console.debug(chosenTypes);

    return (
        <div className="pokemon-types">
            <Header types={types} addType={addType} />
        </div>
    );
}

export default PokemonTypes;
