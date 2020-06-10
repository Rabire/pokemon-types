import React, { useState } from "react";

import "./PokemonTypes.css";
import TypesData from "../datas/TypesData.json";

import LanguageContext from "../LanguageContext";

import Header from "./Header";
import ChosenType from "./ChosenType";
import AlertPopup from "./AlertPopup";

function PokemonTypes() {
    const types = TypesData.types;
    const [chosenTypes, setChosenTypes] = useState([]);
    const [lang, setLang] = useState("en");
    const [isActive, setIsActive] = useState(false);

    const contextValue = {
        lang,
        setLang,
    };

    function toggleIsActive() {
        setIsActive(!isActive);
    }

    function addType(typeToPush) {
        if (chosenTypes.length < 5) {
            setChosenTypes([...chosenTypes, typeToPush]);
        } else {
            toggleIsActive();
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
                {isActive && (
                    <AlertPopup
                        message={"TROP DE TYPES !"}
                        toggleIsActive={toggleIsActive}
                    />
                )}
                <div className="lang-btn" onClick={toggleLanguage}>
                    Language: {lang}
                </div>
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
        </LanguageContext.Provider>
    );
}

export default PokemonTypes;
