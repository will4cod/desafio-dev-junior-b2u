import React, { useState } from "react";
import './style.css';
import edit from '../../botao-editar.png';
import excluir from '../../excluir.png';

const CardVehicle = (props) => {

    const [isOpen, setOpen] = useState(false);


    function openEditCar () {

        isOpen == true? setOpen(false): setOpen(true); 
    }

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

            <div className="options">
                <img src={excluir} placeholder='Excluir'/>
                <img src={edit} placeholder='Editar' onClick={openEditCar}/>
            </div>

            <div className={isOpen? 'form open' : 'form'}>

                <form action="#">
                    <label>Carro </label>
                    <input type='text' value={props.nome}></input>

                    <label>Marca</label>
                    <input type='text' value={props.marca}></input>

                    <label>Ano</label>
                    <input type='text' value={props.ano}></input>

                    <br />

                    <label>Nome</label>
                    <input type='text' value={props.dono.Nome}></input>

                    <label>Email</label>
                    <input type='email' value={props.dono.Email}></input>

                    <label>Telefone</label>
                    <input type='tel' value={props.dono.Telefon}></input>

                    <br />

                    <button>Salvar</button>
                </form>
                
            </div>
        </div>
    )
}

export default CardVehicle