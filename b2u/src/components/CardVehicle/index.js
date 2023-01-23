import React from "react";
import './style.css';

const CardVehicle = (props) => {

    return(
        <div className="container">
            <div>
                <img src={props.img}></img>
            </div>

            <div className="info">
                <h1>{props.nome}</h1>

                <ul>
                    <li>🚗 - {props.marca}</li>
                    <li>📅 - {props.ano}</li>
                </ul>
            </div>
        </div>
    )
}

export default CardVehicle