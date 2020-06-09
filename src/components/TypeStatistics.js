import React, { useState, useEffect } from "react";
import axios from "axios";

import Card from "./Card";

function TypeStatistics(props) {
    const [doubleDmgFrmTypes, setDoubleDmgFrmTypes] = useState([]);
    const [halfDmgFrmTypes, setHalfDmgFrmTypes] = useState([]);
    const [noDmgFrmTypes, setNoDmgFrmTypes] = useState([]);

    useEffect(() => {
        if (props.type) {
            axios
                .get(props.type.url)
                .then((res) => {
                    //console.log(res)
                    setDoubleDmgFrmTypes(
                        res.data.damage_relations.double_damage_from
                    );
                    setHalfDmgFrmTypes(
                        res.data.damage_relations.half_damage_from
                    );
                    setNoDmgFrmTypes(res.data.damage_relations.no_damage_from);
                })
                .catch((err) => {
                    console.log(err);
                });
        }
    }, [props.type]);

    //console.log(doubleDmgFrmTypes);

    return (
        <div className="type-statistics">
            {doubleDmgFrmTypes.map((type, index) => (
                <Card key={index} type={type} power={"double"} />
            ))}
            {halfDmgFrmTypes.map((type, index) => (
                <Card key={index} type={type} power={"half"} />
            ))}
            {noDmgFrmTypes.map((type, index) => (
                <Card key={index} type={type} power={"any"} />
            ))}
        </div>
    );
}

export default TypeStatistics;
