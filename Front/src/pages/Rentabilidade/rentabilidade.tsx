import "./rentabilidade.css";
import { DataGrid, GridColDef, GridValueGetterParams } from '@mui/x-data-grid';
import { VictoryChart, VictoryLine, VictoryTheme } from 'victory';
import { useAuth } from "../../services/Provider";
import { useEffect, useState } from "react";
import Axios from "axios";
import {format, parse} from "date-fns";
import ptBR from 'date-fns/locale/pt-BR';

const columns: GridColDef[] = [
  { field: 'ativo', headerName: 'Ativo', width: 120 },
  { field: 'sigla', headerName: 'Sigla', width: 120 },
];

const rows = [
  { id: 1, ativo: 'Americanas', sigla: 'AMER3' },
  { id: 2, ativo: 'OI', sigla: 'OIBR4' },
  { id: 3, ativo: 'Petrobras', sigla: 'PETR4' },
  { id: 4, ativo: 'Vale', sigla: 'VALE3' },
];

interface Rentabilidade {
  x: Date,
  y: number
}

export const Rentabilidade = () => {

  const token = useAuth().getToken();
  const [data, setData] = useState<Rentabilidade[]>([]);

  console.log(data);
  const getData = () => {

    Axios.post('/ativo/rentabilidade', {
      token: token
    }).then(function (response) {
      setData(response.data.rentabilidade.map(
        (item: any) => ({
          x: format(parse(item.data, 'yyyy-MM', new Date()),"MMM/yyyy", {locale: ptBR}),
          y: item.valor
        }))
      );

    }).catch(function (error) {
      console.log(error.message);
    })
  }

  useEffect(() => {
    getData();

  }, []);

  return (
    <div className="background-img-rentabilidade">
      <h1 className="titulo-rentabilidade">Rentabilidade</h1>
      <div className="div-rentabilidade">
        <div className="div-chart-rentabilidade">
          <div style={{ height: 420, width: '100%' }}>
            <VictoryChart
              theme={VictoryTheme.material}
            >
              <VictoryLine
                interpolation={'linear'}
                data={data}
                style={{
                  data: { stroke: "#060b26" },
                }}
                

              />
            </VictoryChart>
          </div>
        </div>
        <div className="div-grid-rentabilidade">
          <div style={{ height: 390, width: '100%' }}>
            <DataGrid
              rows={rows}
              columns={columns}
              pageSize={5}
              rowsPerPageOptions={[5]}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
