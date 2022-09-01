import './historico.css';
import * as FaIcons from 'react-icons/fa';
import * as AiIcons from 'react-icons/ai';
import { DataGrid, GridColDef} from '@mui/x-data-grid';
import { useAuth } from '../../services/Provider';
import { useEffect, useState} from 'react';
import Axios from 'axios';
import { capitalize } from '@mui/material';
import { format } from 'date-fns';

const columns: GridColDef[] = [
  { field: 'id', headerName: 'ID', width: 70 },
  { field: 'ativo', headerName: 'Ativo', width: 130 },
  { field: 'sigla', headerName: 'Sigla', width: 130 },
  { field: 'ordem', headerName: 'Ordem', width: 130 },
  { field: 'quantidade', headerName: 'Quantidade', width: 130 },
  { field: 'negociação', headerName: 'Negociação', width: 130 },
  { field: 'valor', headerName: 'Valor', width: 130 },

];

// São os registros que vem do banco de dados
interface DBHistoric {
  id: number,
  nomeAtivo: string,
  sigla: string,
  execucao: string,
  quantidade: number,
  data: string,
  preco: number
}

// Registro que sera mostrado para o usuario
interface Historic {
  id: number,
  ativo: string, // == nomeAtivo
  sigla: string,
  ordem: string, // == execucao
  quantidade: number,
  negociação: string, // == data
  valor: string // == preco
}

export const HistoricoDeAcoes = () => {
  
  const auth = useAuth();
  const token = auth.getToken();
  const [historic, setHistoric] = useState<Historic[]>(); 

  // Altera a forma de visualização dos dados que vem do banco
  const refactorHistoric = (dbHistoric: DBHistoric[]) => {
    if(dbHistoric){
      return dbHistoric.map((ativo:DBHistoric) => ({
        id: ativo.id,
        ativo: ativo.nomeAtivo,
        sigla: ativo.sigla,
        ordem: capitalize(ativo.execucao),
        quantidade: ativo.quantidade,
        negociação: format(new Date(ativo.data), 'dd/MM/yyyy'),
        valor: `R$ ${ativo.preco.toFixed(2)}` 
      }))
     
    } else{
      return [];
    }
  }

  const getHistoric = () => {
     Axios.post("/ativo/historico",{
      token: token
     }
      ).then(function(response){
        setHistoric(refactorHistoric(response.data.historico));
      }).catch(function (error) {
        console.log(error);
    })
  }

  useEffect(() => {
    getHistoric();
  }, [ ])

  return (
    <div className="background-img">
      <h1 className='titulo-historico'>Histórico de Ativos</h1>
      <div className="div-historico">
        <div style={{ height: 400, width: '100%' }}> 
          {historic ? 
          <DataGrid
          rows={historic}
          columns={columns}
          pageSize={10}
          rowsPerPageOptions={[10]}
          checkboxSelection
          />
          :null}
        </div>
      </div>
    </div>
  )
}
