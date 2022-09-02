import "./Carteira.css";
import { useState, useEffect } from "react";
import { FaMoneyBillWave } from "react-icons/fa";
import { BsEye, BsEyeSlash } from "react-icons/bs";
import { AiOutlineRise } from "react-icons/ai";
import Axios from "axios";
import { DataGrid, GridColDef } from "@mui/x-data-grid";
import { useAuth } from "../../services/Provider";

//base da tabela...estou usando tudo que tava no prototipo
const columns: GridColDef[] = [
  //{ field: "id", headerName: "ID", width: 35 },
  { field: "nomeAtivo", headerName: "Ações", width: 80 },
  { field: "sigla", headerName: "Sigla", width: 80 },
  { field: "porcentagem", headerName: "Porc.", width: 80 },
  { field: "quantidade", headerName: "Quant.", width: 80 },
  { field: "precoAtual", headerName: "Preço atual", width: 100 },
  { field: "precoMedio", headerName: "Preço médio", width: 100 },
  { field: "diferenca", headerName: "Diferença", width: 80 },
  { field: "valorTotal", headerName: "Valor total", width: 80 },
];

// São os registros que vem do banco de dados
interface DBHistoric {
  //trouxe da tela de historico
  id: number;
  nomeAtivo: string;
  sigla: string;
  execucao: string;
  quantidade: number;
  data: string;
  preco: number;
}

//passo tudo que esta em field para essa interface...verificar se esta ok os nomes e os tipos.
interface Carteir {
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

export const Carteira = () => {
  const auth = useAuth();
  const token = auth.getToken();
  const [carteir, setCarteir] = useState<Carteir[]>();

  //vamos ter que mexer na forma como esses dados vem do banco...estou um pouco incerto dessa parte

  

  const getCarteir = () => {
    //estou puxando os mesmos dados do historico
    Axios.post("/ativo/patrimonio", {
      token: token,
    })
      .then(function (response) {
        setCarteir(response.data.ativos.map((ativo:Carteir, index:number) => ({
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
    getCarteir();
  }, []);

  return (
    <div className="background-img-carteira">
      <h1 className="titulo-carteira">Invext - Minha Carteira</h1>
      <div className="div-patrimonio">
        <div className="div-titulo-patrimonio">
          <FaMoneyBillWave className="icon"></FaMoneyBillWave>
          <h2>Patrimônio</h2>
          <BsEye className="eye"></BsEye>
        </div>
        <div className="div-ativos-patrimonio">
        <span className="barra-patrimonio"></span>
        
        <div className="div-grid-patrimonio">
          {carteir ? (
            <DataGrid
            rows={carteir}
            columns={columns}
            pageSize={5}
            rowsPerPageOptions={[5]}
            />
            ) : null}
          
            </div>
        </div>
      </div>

      <div className="div-rentabilidade">
        <div className="div-titulo-rentabilidade">
          <AiOutlineRise className="icon"></AiOutlineRise>
          <h2>Rentabilidade</h2>
          <BsEye className="eye"></BsEye>
        </div>
        <div className="div-ativos-rentabilidade"></div>
      </div>
    </div>
  );
};

export default Carteira;
