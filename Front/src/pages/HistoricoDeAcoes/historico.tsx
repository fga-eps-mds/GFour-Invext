import './historico.css';
import { BiEdit } from 'react-icons/bi';
import { RiDeleteBinLine } from 'react-icons/ri'
import { DataGrid, GridActionsCellItem, GridColDef } from '@mui/x-data-grid';
import { useAuth } from '../../services/Provider';
import { useEffect, useState } from 'react';
import Axios from 'axios';
import { format } from 'date-fns';
import { excluirAtivo } from './excluirAtivo';
import { parse } from 'date-fns/esm';



// Registro que sera mostrado para o usuario
interface Register {
  id: number,
  nomeAtivo: string,
  sigla: string,
  execucao: string, 
  quantidade: number,
  data: string,
  preco: string 
}

export const HistoricoDeAcoes = () => {

  const auth = useAuth();
  const token = auth.getToken();
  // Todo o historico de compra e venda de ativos
  const [historic, setHistoric] = useState<Register[]>();
  // Dita quando o historico deve ser puxado do backend
  const [renderData, setRenderData] = useState(true);


  // Pega o historico do usuario do backend
  useEffect(() => {
    if (renderData) {
      setRenderData(false);
      Axios.post("/ativo/historico", {
        token: token
      }
      ).then(function (response) {
        setHistoric(response.data.historico);
      }).catch(function (error) {
        console.log(error);
      })
    }
  },[renderData])


  const columns: GridColDef[] = [
    { field: 'id', headerName: 'ID', width: 70 },
    { field: 'nomeAtivo', headerName: 'Ativo', width: 130 },
    { field: 'sigla', headerName: 'Sigla', width: 130 },
    { field: 'execucao', headerName: 'Ordem', width: 130 },
    { field: 'quantidade', headerName: 'Quantidade', width: 130 },
    {
      field: 'data',
      headerName: 'Negociação',
      width: 130,
      valueFormatter: (params) => format(parse(params.value,'yyyy-MM-dd',new Date),"dd/MM/yyyy")
    },
    { 
      field: 'preco', 
      type: 'number',
      headerName: 'Valor', 
      width: 130,
      valueFormatter: (params) => `R$ ${params.value.toFixed(2)}`
    },
    {
      field: 'edit-column',
      headerName: ' ',
      sortable: false,
      disableColumnMenu: true,
      width: 80,
      renderCell: (params) => [
        <div key={params.id}>
          <GridActionsCellItem
            icon={<BiEdit />}
            label='Editar'
            onClick={() => null}
          />
          <GridActionsCellItem
            icon={<RiDeleteBinLine />}
            label='Deletar'
            onClick={() => {
              excluirAtivo(params.id.toString());
              setRenderData(true);
            }}
          />
        </div>
      ],
    },
  ];

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
              isRowSelectable={() => false}
            />
            : null}
        </div>
      </div>
    </div>
  )
}
