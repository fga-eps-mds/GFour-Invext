import "./rentabilidade.css";
import { VictoryAxis, VictoryChart, VictoryLabel, VictoryLine, VictoryScatter, VictoryTheme, VictoryZoomContainer } from 'victory';
import { useAuth } from "../../services/Provider";
import { useEffect, useState } from "react";
import Axios from "axios";
import { format, parse } from "date-fns";
import ptBR from 'date-fns/locale/pt-BR';

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
      console.log(response.data)
      setData(response.data.rentabilidade.map(
        (item: any) => ({
          x: parse(item.data, 'yyyy-MM', new Date(), { locale: ptBR }),
          y: Number(item.valor)

        }))
      );

    }).catch(function (error) {
      console.log(error);
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
            padding={{ top: 20, bottom: 50, left: 70, right: 40 }}
            scale={{ x: 'time', y: 'linear' }}
          >
            <VictoryScatter
              data={data}
            />

            <VictoryLine
              data={data}
              interpolation='linear'
              style={{
                data: { stroke: "#060b26" },
              }}
            />

            <VictoryAxis crossAxis
              tickValues={data.map((item) => item.x)}
              tickFormat={(x) => {
                return format(x, "MMM/yyyy", { locale: ptBR });
              }}
            />

            <VictoryAxis dependentAxis
              label="Lucro / Total Gasto (%)"
              // Os valores do eixo y são os mesmos de "data" + o valor 0
              tickValues={[0].concat((data.map((item) => item.y)),[0])}
              tickFormat={(y) => {
                return `${y}%`
              }}
              style={{axisLabel: {padding: 50} }}
            />
          </VictoryChart>
        </div>
      </div>
    </div>
  );
}
