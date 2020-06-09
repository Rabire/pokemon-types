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

    console.log(chosenTypes);

    return (
        <div className="pokemon-types">
            <Header types={types} addType={addType} />

            <div className="chosen-types">
                <ChosenType type={chosenTypes[0]} />
                <ChosenType type={chosenTypes[1]} />
            </div>

            <div className="statistics-tab">
                <TypeStatistics type={chosenTypes[0]} />
                <TypeStatistics type={chosenTypes[1]} />
            </div>
        </div>
    );
}

export default PokemonTypes;
