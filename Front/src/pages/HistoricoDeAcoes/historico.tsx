import './historico.css';


const HistoricoDeAcoes = () => {

    const strings = ['Ativo', 'Sigla', 'Ordem', 'Quantidade', 'Valor'];
    const listItems = strings.map((strings) =>
      <li>{strings}</li>
    );

return (

    <body>
        <div className="background-img">        
            <h1 className='titulo'>Invext - Histórico de ações  </h1>
            <div className="div-historico">
                <ul>{listItems}</ul>
            </div>
        </div>
    </body>

)

}

export default HistoricoDeAcoes;

