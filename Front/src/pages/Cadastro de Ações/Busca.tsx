import axios from 'axios';
import AsyncSelect from 'react-select';
import './Busca.css';  

interface Assets{
    nome: string,
    sigla: string
}

interface Props{
    setValue: Function
}

// Fazer o props para pergar o assets para pesquisa
export const BuscaAtivo = (props:Props) => {
    
    const Options  = () => {
        const ativos:Assets[] = [];
        axios.get("/ativo/buscaativos")
        .then(function(response){
           ativos.push.apply(ativos, response.data.lista);
    
        }).catch(function(error){
            console.log(error);
        });
        return ativos.map((ativos) => ({value: ativos, label: ativos.nome.concat(' - ', ativos.sigla)}))
    }

    return(
        <AsyncSelect
        loadOptions={Options()}
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


