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
    const [isActive, setIsActive] = useState(false);

    const [lang, setLang] = useState("en");
    const [alertMessage, setAlertMessage] = useState("TO MANY TYPES SELECTED");

    const contextValue = {
        lang,
        setLang,
    };

    const toggleIsActive = () => setIsActive(!isActive);

    function addType(typeToPush) {
        if (chosenTypes.length < 5) {
            setChosenTypes([...chosenTypes, typeToPush]);
        } else {
            toggleIsActive();
        }
    }

    //console.debug(chosenTypes);

    function toggleLanguage() {
        if (lang === "fr") {
            setLang("en");
            setAlertMessage("TO MANY TYPES SELECTED");
        } else if (lang === "en") {
            setLang("fr");
            setAlertMessage("TROP DE TYPES SÉLECTIONNÉS");
        }
    }

    return (
        <LanguageContext.Provider value={contextValue}>
            <div className="pokemon-types">
                {isActive && (
                    <AlertPopup
                        message={alertMessage}
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
                            setIsActive={setIsActive}
                        />
                    ))}
                </div>
            </div>
        </LanguageContext.Provider>
    );
}

export default PokemonTypes;
