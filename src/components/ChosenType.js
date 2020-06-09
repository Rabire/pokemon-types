import React from 'react'

import './ChosenType.css'

import Card from './Card'

function ChosenType(props) {

    //console.log(props)

    return(
        <div className="chosen-type">
            {
                props.type &&
                <Card type={props.type} />
            }
        </div>
    )
}

export default ChosenType