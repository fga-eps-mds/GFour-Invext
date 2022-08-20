import { useState } from 'react';
import Select from 'react-select';
import './Busca.css';


const AtivosExample = [
    "AMERICANAS - AMER3",
    "ELETROBRAS - ELET3",
    "EMBRAER - EMBRAER",
    "ITAUUNIBANCO - ITUB4",
    "PETROBRAS - PETR4",
    "RAIADROGASIL - RADL3",
    "VIAVAREJO - VVAR3",
    "CIELO - CIEL3",
    "BRADESCO - BBDC4",
    "BBSEGURIDADE - BBSE3"
]
interface Props{
    setValue: Function
}
// Fazer o props para pergar o assets para pesquisa
export const BuscaAtivo = (props:Props) => {

    const Options  = () => {
        return AtivosExample.map((ativos) => ({value: ativos, label: ativos}))
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