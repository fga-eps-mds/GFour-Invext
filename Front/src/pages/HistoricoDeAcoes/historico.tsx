import { Link } from 'react-router-dom';
import './historico.css';
var novaTabela = document.createElement("table");



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
                <div id="test">
                <Link to='/historico'/>  
                    <table>
                    <thead>
                    <tr>
                    <th>Ativo</th>
                    <th>Sigla</th>
                    <th>Ordem</th>
                    <th>Quantidade</th>
                    <th>Valor</th>
                    </tr>
                    </thead>
                    <tbody>
                    <tr>    
                    <td>--</td>
                    <td>--</td>
                    <td>--</td>
                    <td>--</td>
                    <td>--</td>
                    </tr>
                    <tr>
                    <td>--</td>
                    <td>--</td>
                    <td>--</td>
                    <td>--</td>
                    <td>--</td>
                    </tr>
                    <tr>
                    <td>--</td>
                    <td>--</td>
                    <td>--</td>
                    <td>--</td>
                    <td>--</td>
                    </tr>
                    </tbody>
                    </table>
                </div>
            </div>
        </div>
    </body>

)

}

export default HistoricoDeAcoes;

