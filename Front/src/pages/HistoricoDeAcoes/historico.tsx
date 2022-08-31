import { Link } from 'react-router-dom';
import './historico.css';
import * as FaIcons from 'react-icons/fa';
import * as AiIcons from 'react-icons/ai';
import * as React from 'react';
import { DataGrid, GridColDef, GridValueGetterParams } from '@mui/x-data-grid';

const columns: GridColDef[] = [
  { field: 'id', headerName: 'ID', width: 70 },
  { field: 'ativo', headerName: 'Ativo', width: 130 },
  { field: 'sigla', headerName: 'Sigla', width: 130 },
  { field: 'ordem', headerName: 'Ordem', width: 130 },
  { field: 'quantidade', headerName: 'Quantidade', width: 130 },
  { field: 'negociação', headerName: 'Negociação', width: 130 },
  { field: 'valor', headerName: 'Valor', width: 130 },
  
];

const rows = [
  { id: 1, ativo: 'Americanas', sigla: 'AMER3', ordem: 'Compra', quantidade:'1', negociação:'06/05/2021', valor:'R$16,82'},
  { id: 2, ativo: 'Magazine Luiza', sigla: 'MGLU3', ordem: 'Venda' , quantidade:'2', negociação:'06/05/2021', valor:'R$8,96'},
  { id: 3, ativo: 'Itaú', sigla: 'ITUB4', ordem: 'Compra' , quantidade:'5', negociação:'07/05/2021', valor:'R$131,55'},
  { id: 4, ativo: 'Oi', sigla: 'OIBR3', ordem: 'Compra' , quantidade:'6', negociação:'09/09/2021', valor:'R$3,18'},
  { id: 5, ativo: 'Petrobras', sigla: 'PETR4', ordem: 'Venda' , quantidade:'7', negociação:'09/10/2021', valor:'R$223,37'},
  { id: 6, ativo: 'Vale', sigla: 'VALE3', ordem: 'Compra' , quantidade:'5', negociação:'15/11/2021', valor:'R$326,20'},
  { id: 7, ativo: 'Ambev', sigla: 'ABEV3', ordem: 'Venda' , quantidade:'4', negociação:'06/12/2021', valor:'R$61,56'},
  { id: 8, ativo: 'Vale', sigla: 'VALE3', ordem: 'Venda', quantidade:'3', negociação:'07/05/2021', valor:'R$195,72'},
  { id: 9, ativo: 'Americanas', sigla: 'AMER3', ordem: 'Compra' , quantidade:'1', negociação:'06/01/2022', valor:'R$16,82'},
  { id: 10, ativo: 'Vale', sigla: 'VALE3', ordem: 'Venda', quantidade:'3', negociação:'07/05/2021', valor:'R$195,72'}, 
  { id: 11, ativo: 'Petrobras', sigla: 'PETR4', ordem: 'Venda', quantidade:'3', negociação:'07/05/2021', valor:'R$95,73'},
];

const HistoricoDeAcoes = () => {
    
return (

        <div className="background-img">        
            <h1 className='titulo-historico'>Histórico de Ativos</h1>
            <div className="div-historico">
                 <div style={{ height: 400, width: '100%' }}>
                    <DataGrid
                        rows={rows}
                        columns={columns}
                        pageSize={10}
                        rowsPerPageOptions={[10]}
                        checkboxSelection
                          />
                </div>
            </div>
        </div>
)

}

export default HistoricoDeAcoes;

