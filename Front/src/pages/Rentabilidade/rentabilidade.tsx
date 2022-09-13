import "./rentabilidade.css";
import { DataGrid, GridColDef, GridValueGetterParams } from '@mui/x-data-grid';
import { VictoryChart, VictoryLabel, VictoryLine, VictoryTheme, VictoryZoomContainer } from 'victory';
import { useAuth } from "../../services/Provider";
import { useEffect, useState } from "react";
import Axios from "axios";
import { format, parse } from "date-fns";
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
          x: parse(item.data, 'yyyy-MM', new Date(), { locale: ptBR }),
          y: Number(item.valor)
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
          <VictoryChart
            theme={VictoryTheme.material}
            width={900}
            height={420}
            padding={{top: 20, bottom: 50, left: 70, right: 40}}
            scale={{x:'time'}}
            containerComponent={
              <VictoryZoomContainer responsive={false}
              />}
          >
            <VictoryLine
              interpolation='linear'
              data={data}
              style={{
                data: { stroke: "#060b26" },
              }}
            />
          </VictoryChart>
        </div>
      </div>
    </div>
  );
}
