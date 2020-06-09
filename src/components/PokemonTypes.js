import React, { useState } from "react";

import "./PokemonTypes.css";
import TypesData from "../datas/TypesData.json";

import Header from "./Header";
import ChosenType from "./ChosenType";

function PokemonTypes() {
    const types = TypesData.types;
    const [chosenTypes, setChosenTypes] = useState([]);

    function addType(typeToPush) {
        if (chosenTypes.length < 5) {
            setChosenTypes([...chosenTypes, typeToPush]);
        } else {
            alert("Already 5 types chosend");
        }
    }

    //console.debug(chosenTypes);

    return (
        <div className="pokemon-types">
            <Header types={types} addType={addType} />
            <div className="chosen-types">
                {chosenTypes.map((typeChoosed, index) => (
                    <ChosenType
                        key={index}
                        typeChoosed={typeChoosed}
                        chosenTypes={chosenTypes}
                        setChosenTypes={setChosenTypes}
                    />
                ))}
            </div>
        </div>
    );
}

export default PokemonTypes;
