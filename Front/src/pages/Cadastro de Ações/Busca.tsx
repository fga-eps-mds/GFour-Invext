import Select from 'react-select';

const AtivosExample = [
    "AMERICANAS - AMER3",
    "ELETROBRAS - ELET3",
    "EMBRAER - EMBRAER",
    "ITAUUNIBANCO - ITUB4",
    "PETROBRAS - PETR4",
    "RAIADROGASIL - RADL3",
    "VIAVAREJO - VVAR3",
    "CIELO - CIEL3",
    "BRADESCO - BBDC4",
    "BBSEGURIDADE - BBSE3"
]
interface Opcao{
    value: string,
    label: string
}
interface Props{
    assets: string
}
// Fazer o props para pergar o assets para pesquisa
export const BuscaAtivo = ({assets}:Props) => {
    var result : Opcao;
    const buscaAtivos = (search:string) => {
        return AtivosExample.map((ativos) => {result.value = ativos; result.label = ativos})
    }
    console.log(buscaAtivos(assets));

    return(
        <Select options={buscaAtivos(assets)} />
        // <>
        //     {assets && S
        //     <ul>
        //         {buscaAtivos(assets).map((item) => (
        //             <li key={item.indexOf(item)}>{item}</li>
        //             ))}
        //     </ul>
        //     }
        // </>
    );
}