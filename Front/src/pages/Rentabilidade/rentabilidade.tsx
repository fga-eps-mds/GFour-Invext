import "./rentabilidade.css";
import { DataGrid, GridColDef, GridValueGetterParams } from '@mui/x-data-grid';
import { VictoryChart, VictoryLine, VictoryTheme } from 'victory';

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


export const Rentabilidade = () => {
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
                interpolation={'natural'}
                style={{
                  data: { stroke: "#fafafa" },
                }}
                data={[
                  { x: 0, y: 0 },
                  { x: 5, y: 10 },
                  { x: 6, y: 20 },
                  { x: 10, y: 30 },
                  { x: 1, y: 40 }
                ]}
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
