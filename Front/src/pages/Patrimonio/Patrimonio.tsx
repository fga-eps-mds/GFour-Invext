import "./Patrimonio.css";
import { useState, useEffect } from "react";
import Axios from "axios";
import { DataGrid, GridColDef } from "@mui/x-data-grid";
import { useAuth } from "../../services/Provider";

//base da tabela...estou usando tudo que tava no prototipo
const columns: GridColDef[] = [
  //{ field: "id", headerName: "ID", width: 35 },
  { field: "nomeAtivo", headerName: "Ações", width: 120 },
  { field: "sigla", headerName: "Sigla", width: 80},
  { field: "porcentagem", headerName: "Porc.", width: 80 },
  { field: "quantidade", headerName: "Quant.", width: 80 },
  { field: "precoAtual", headerName: "Preço atual", width: 100, type: 'number',valueFormatter: (params) => `R$ ${params.value.toFixed(2)}`, align: 'center'},
  { field: "precoMedio", headerName: "Preço médio", width: 100, type: 'number', valueFormatter: (params) => `R$ ${params.value.toFixed(2)}`, align: 'left'},
  { field: "diferenca", headerName: "Diferença", width: 80 },
  { field: "valorTotal", headerName: "Valor total", width: 100, type: 'number', valueFormatter: (params) => `R$ ${params.value.toFixed(2)}`, align:'left' },
];

//passo tudo que esta em field para essa interface...verificar se esta ok os nomes e os tipos.
interface Ativo {
  id: number;
  nomeAtivo: string;
  sigla: string;
  porcentagem: number;
  quantidade: number;
  precoAtual: number;
  precoMedio: number;
  diferenca: number;
  valorTotal: number;
}

export const Patrimonio = () =>   {
  const auth = useAuth();
  const token = auth.getToken();
  const [patrimonio, setPatrimonio] = useState<Ativo[]>();

  //vamos ter que mexer na forma como esses dados vem do banco...estou um pouco incerto dessa parte

  

  const getPatrimonio = () => {
    //estou puxando os mesmos dados do historico
    Axios.post("/ativo/patrimonio", {
      token: token,
    })
      .then(function (response) {
        setPatrimonio(response.data.ativos.map((ativo:Ativo, index:number) => ({
          id: index,
          nomeAtivo: ativo.nomeAtivo,
          sigla: ativo.sigla,
          porcentagem: ativo.porcentagem,
          quantidade: ativo.quantidade,
          precoAtual: ativo.precoAtual,
          precoMedio: ativo.precoMedio,
          diferenca: ativo.diferenca,
          valorTotal: ativo.valorTotal,
        })));
        console.log(response.data.ativos)
      })
      .catch(function (error) {
        console.log(error);
      });
     
  };

  useEffect(() => {
    getPatrimonio();
  }, []);

  return (
    <div className="background-img-patrimonio">
      
      <h1 className="titulo-patrimonio">Patrimônio</h1>
      <div className="div-patrimonio">
        <div className="div-ativos-patrimonio">
          <div className="div-grid-patrimonio">
            {patrimonio ? (
              <DataGrid
              rows={patrimonio}
              columns={columns}
              pageSize={5}
              rowsPerPageOptions={[5]}
              />
              ) : null}
            
            </div>
        </div>
      </div>
    </div>
  );
};
