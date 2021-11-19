import React from 'react'
import "./Card.css"

function Card(props) {


    return (
        <div className="card">

            <div className="recommen">{props.recommen}</div>
            <div className="name">{props.name}
                <div className="img"></div>
            </div>

        </div>
    )
}
export default Card
