import React, { useState } from "react";

import "./PokemonTypes.css";
import TypesData from "../datas/TypesData.json";

import LanguageContext from "../LanguageContext";

import Header from "./Header";
import ChosenType from "./ChosenType";

function PokemonTypes() {
    const types = TypesData.types;
    const [chosenTypes, setChosenTypes] = useState([]);
    const [lang, setLang] = useState("en");

    const contextValue = {
        lang,
        setLang,
    };

    function addType(typeToPush) {
        if (chosenTypes.length < 5) {
            setChosenTypes([...chosenTypes, typeToPush]);
        } else {
            alert("Already 5 types chosend");
        }
    }

    //console.debug(chosenTypes);

    function toggleLanguage() {
        lang === "fr" ? setLang("en") : console.log("language = fr");
        lang === "en" ? setLang("fr") : console.log("language = en");
    }

    return (
        <LanguageContext.Provider value={contextValue}>
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
                <div className="lang-btn" onClick={toggleLanguage}>
                    Language: {lang}
                </div>
            </div>
        </LanguageContext.Provider>
    );
}

export default PokemonTypes;
