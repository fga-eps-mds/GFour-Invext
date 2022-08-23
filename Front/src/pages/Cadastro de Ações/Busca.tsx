import { useState } from 'react';
import Select from 'react-select';
import './Busca.css';
//caso a conexão seja via post
import Axios from "axios";


interface Assets{
    name: string,
    initials: string
}
const AtivosExample = [
    {name: "AMERICANAS", sigla: "AMER3"},
    {name: "ELETROBRAS", sigla: "ELET3"},
    {name: "EMBRAER", sigla: "EMBRAER"},
    {name: "ITAUUNIBANCO", sigla: "ITUB4"},
    {name: "PETROBRAS", sigla: "ITUB4"},
    {name: "RAIADROGASIL", sigla: "RADL3"}
]

interface Props{
    setValue: Function
}
// Fazer o props para pergar o assets para pesquisa
export const BuscaAtivo = (props:Props) => {

    const Options  = () => {
        return AtivosExample.map((ativos) => ({value: ativos, label: ativos.name.concat(' - ',ativos.sigla)}))
    }

    return(
        <Select
        options={Options()}
        placeholder="Busque seu ativo"
        classNamePrefix='react-select'
        className='select'
        noOptionsMessage={()=>"Ativo não encontrado"}
        isClearable
        components={{ DropdownIndicator:() => null, IndicatorSeparator: () => null}}
        // Se o valor for diferente de null, colocamos o valor dele, caso contrário colocamos ''
        onChange={e => e ? props.setValue(e.value) : props.setValue('')}
        />
    );
}