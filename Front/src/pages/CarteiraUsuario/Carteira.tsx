import './Carteira.css';
import { useState,useEffect } from "react"; 
import {FaMoneyBillWave} from 'react-icons/fa';
import {BsEye, BsEyeSlash} from 'react-icons/bs';
import {AiOutlineRise} from 'react-icons/ai'
import Axios from 'axios';
//preciso verificar todas as importaçoes restantes e corrigir essa importação
import { DataGrid, GridColDef} from '@mui/x-data-grid';
import { useAuth } from '../../services/Provider';

//base da tabela...estou usando tudo que tava no prototipo
const columns: GridColDef[] = [
    { field: 'id', headerName: 'ID', width: 35 },
    { field: 'acoes', headerName: 'Ações', width: 65 },
    { field: 'sigla', headerName: 'Sigla', width: 65 },
    { field: 'porc', headerName: 'Porc.', width: 65 },
    { field: 'quantidade', headerName: 'Quantidade', width: 65 },
    { field: 'precoAtual', headerName: 'Preço atual', width: 65 },
    { field: 'precoMedio', headerName: 'Preço médio', width: 65 },
    { field: 'diferenca', headerName: 'Diferença', width: 65 },
    { field: 'valorTotal', headerName: 'Valor total', width: 65 },
  
  ];
  
  // São os registros que vem do banco de dados
  interface DBHistoric { //trouxe da tela de historico
    id: number,
    nomeAtivo: string,
    sigla: string,
    execucao: string,
    quantidade: number,
    data: string,
    preco: number
  }

  //passo tudo que esta em field para essa interface...verificar se esta ok os nomes e os tipos.
  interface Carteir {
  id: number,
  ativo: string, 
  sigla: string,
  porc:number,
  quantidade: number, 
  precoAtual: number,
  precoMedio: number, 
  diferenca: number, 
  valorTotal:number,
  }



export const Carteira = () => {

    const auth = useAuth();
    const token = auth.getToken();
    const [carteir, setCarteir] = useState<Carteir[]>();

    //vamos ter que mexer na forma como esses dados vem do banco...estou um pouco incerto dessa parte

    const getCarteir = () => {
        //estou puxando os mesmos dados do historico
        Axios.post("/ativo/historico",{ 
         token: token
        }
         ).then(function(response){
           setCarteir(response.data.historico);
         }).catch(function (error) {
           console.log(error);
       })
     }

     useEffect(() => {
        getCarteir();
      }, [ ])

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
            <DataGrid
            rows={carteir}
            columns={columns}
            pageSize={10}
            rowsPerPageOptions={[10]}
            checkboxSelection
          />
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