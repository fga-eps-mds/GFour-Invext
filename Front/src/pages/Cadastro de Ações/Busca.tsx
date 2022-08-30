import axios from 'axios';
import { useState } from 'react';
import { useEffect } from 'react';
import Select from 'react-select';
import './Busca.css';  

interface Assets{
    nome: string,
    sigla: string
}
interface Option{
    value: Assets,
    label: string
}
interface Props{
    setValue: Function
}

// Fazer o props para pergar o assets para pesquisa
export const  BuscaAtivo = (props:Props) => {
    const [options, setOptions] = useState<Option[]>();
    
    useEffect(() => {
        axios.get("/ativo/buscaativos")
        .then(async function(response){
            const ativos:Assets[] = await response.data.lista;
            var array = ativos.map((ativos) => ({value: ativos, label: ativos.nome.concat(' - ', ativos.sigla)}));
            setOptions(array);
    
        }).catch(function(error){
            console.log(error);
        });
       
    }, []);
       
    
    
    return(
        <Select
        options={options}
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


