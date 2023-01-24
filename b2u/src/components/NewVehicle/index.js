import React, { useState } from "react";
import { newVehicle } from "../../api";
import './style.css';

const NewVehicle = ({vehicles , setVehicles}) => {

    const [isOpen, setOpen] = useState(false);

    const [carro, setCarro] = useState('');
    
    const [marca, setMarca] = useState('');
    
    const [ano, setAno] = useState('');

    const [imagem, setImagem] = useState('');
    
    const [descricao, setdescricao] = useState('');
    
    const [nome, setNome] = useState('');
    
    const [email, setEmail] = useState('');

    const [telefone, setTelefone] = useState('');


    function openNewCar () {

        isOpen == true? setOpen(false): setOpen(true); 
    }

    async function handleSave() {

        // if(emailAlredyExists()){
        //     return alert('EMAIL já cadastrado');
        // }  

        const newVehicleObject = {
            id: 0,
            Nome: carro,
            Marca: marca,
            Ano: ano,
            Descrição: descricao,
            Imagem: imagem,
            Dono:{
               Nome: nome,
               Email: email,
               Telefon: telefone
            }
        }

        try{
            const result = await newVehicle(newVehicleObject);
            setVehicles(result)
          }
      
          catch(error){
            console.log('fetchVehicles error: ', error);
          }
        console.log(newVehicleObject)

        setCarro('');
        setMarca('');
        setAno('');
        setdescricao('');
        setImagem('');
        setNome('');
        setEmail('');
        setTelefone('');
    }
    

    return(

        <div className="new-vehicle">

            <button onClick={openNewCar}>Adicionar Veiculo</button>

            <div className={isOpen? 'form open' : 'form'}>

            <form>
                <label>Carro </label>
                <input type='text' onChange={(e) => setCarro(e.target.value)} />

                <label>Marca</label>
                <input type='text' onChange={(e) => setMarca(e.target.value)}/>

                <label>Ano</label>
                <input type='text' onChange={(e) => setAno(e.target.value)}/>

                <br />

                <label>Link da imagem</label>
                <input type='url' onChange={(e) => setImagem(e.target.value)}></input>

                <label>Descrição</label>
                <textarea onChange={(e) => setdescricao(e.target.value)}/>

                <br />

                <label>Nome</label>
                <input type='text' onChange={(e) => setNome(e.target.value)}/>

                <label>Email</label>
                <input type='email' onChange={(e) => setEmail(e.target.value)}/>

                <label>Telefone</label>
                <input type='tel' onChange={(e) => setTelefone(e.target.value)}/>

                <br />

                <button type="reset">Limpar</button>
                <button onClick={handleSave}>Salvar</button>
            </form>

            </div>
        </div>
    )
}

export default NewVehicle