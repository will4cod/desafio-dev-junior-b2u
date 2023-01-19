import React from "react";
import './style.css';

const CardVehicle = () => {

    return(
        <div className="container">
            <div>
                <img src="https://i0.statig.com.br/bancodeimagens/bs/5o/6l/bs5o6lyohfx0eokwulv72vrkz.jpg"></img>
            </div>

            <div className="info">
                <h1>Nome carro</h1>

                <ul>
                    <li>🚗 - Marca</li>
                    <li>📅 - Ano</li>
                </ul>
            </div>
        </div>
    )
}

export default CardVehicle