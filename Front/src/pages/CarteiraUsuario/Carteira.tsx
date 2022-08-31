//Amanda disse que vai implementar o esquema de tabela p dentro da div ver com ela dps.
//O CSS vai ter que ser um pouco refatorado pois estamos usando muito em e isso pode dar ruim dependendo da tela.
import './Carteira.css';
import { useState } from "react"; 
import {FaMoneyBillWave} from 'react-icons/fa';
import {BsEye, BsEyeSlash} from 'react-icons/bs';
import {AiOutlineRise} from 'react-icons/ai'

const Carteira = () => {
    
   
return (
    <div className='background-img-carteira'>
        <h1 className="titulo-carteira">Invext - Minha Carteira</h1>
        <div className='div-patrimonio'>
            <div className='div-titulo-patrimonio'> 
                
                <FaMoneyBillWave className='icon'></FaMoneyBillWave>
                <h2>Patrimônio</h2>
                <BsEye className='eye'></BsEye>

            </div>
            <div className='div-ativos-patrimonio'>
                <span className='barra-patrimonio'></span>
                
                
            </div>
            
        </div>

        <div className='div-rentabilidade'>
            <div className='div-titulo-rentabilidade'> 
                
                <AiOutlineRise className='icon'></AiOutlineRise>
                <h2>Rentabilidade</h2>
                <BsEye className='eye'></BsEye>

            </div>
            <div className='div-ativos-rentabilidade'>
            
                
                
            </div>
        </div>
    </div>
)

}

export default Carteira