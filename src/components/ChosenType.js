import React, { useEffect, useState } from "react";
import axios from "axios";

import TypesData from "../datas/TypesData.json";
import "./ChosenType.css";

import Card from "./Card";

function ChosenType(props) {
    console.log(props);

    const [doubleDamageFrom, setDoubleDamageFrom] = useState([]); //double_damage_from
    const [halfDamageFrom, setHalfDamageFrom] = useState([]); //half_damage_from
    const [noDamageFrom, setNoDamageFrom] = useState([]); //no_damage_from

    useEffect(() => {
        if (props.typeChoosed) {
            axios
                .get(props.typeChoosed.url)
                .then((res) => {
                    //console.log(res.data.damage_relations);
                    setDoubleDamageFrom(
                        res.data.damage_relations.double_damage_from
                    );
                    setHalfDamageFrom(
                        res.data.damage_relations.half_damage_from
                    );
                    setNoDamageFrom(res.data.damage_relations.no_damage_from);
                })
                .catch((err) => {
                    console.log(err);
                });
        }
    }, [props.typeChoosed]);

    function removeType() {
        props.setIsActive(false);
        props.setChosenTypes(
            props.chosenTypes.filter((e) => e !== props.typeChoosed)
        );
    }

    function getMatchingType(damageTypeArray, power) {
        return damageTypeArray.map((apiObject, index) => {
            const monFilter = TypesData.types.find(
                (truc) => truc.name === apiObject.name
            );
            return <Card key={index} type={monFilter} power={power} />;
        });
    }

    return (
        <div className="chosen-type">
            <div className="choosed-type" onClick={removeType}>
                <Card type={props.typeChoosed} />
            </div>
            <br />
            {getMatchingType(doubleDamageFrom, 2)}
            <hr />
            {getMatchingType(halfDamageFrom, 0.5)}
            <hr />
            {getMatchingType(noDamageFrom, 0)}
        </div>
    );
}

export default ChosenType;
