//talvez podemos começar a checar os subtitulos igual no prototipo usando uma nova div e mexendo apenas no p.
//lembrar de alterar o fundo
import './Ações.css';
import { IMaskInput } from "react-imask";
import { useState } from "react";
import Axios from "axios";
import { useAuth } from '../../services/Provider';
import { useNavigate } from 'react-router-dom';
import {BuscaAtivo} from './Busca';

interface Assets{
    name: string,
    initials: string
}
export const CadastroAcoes = () => {

    const [error, setError] = useState("");
    const [assets,setAssets] = useState<Assets>(); //Assets é os ativos
    const [stockPrice, setStockPrice] = useState(""); //preço das ações
    const [date, setDate] = useState("");
    const [quantity, setQuantity] = useState("");

    // Define qual tipo de operação será efetuada no request (compra/venda)
    const [requestType, setRequestType] = useState("");

    const navigate = useNavigate();
    const auth = useAuth();
    const token = auth.getToken();

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {

        e.preventDefault();

        setError("");
        if (!assets){
            setError("Selecione um ativo")

        }else if (parseInt(quantity) <= 0 ){
            setError("É necessário inserir uma quantidade válida")

        } else if (parseInt(stockPrice) <= 0) {
            setError("É necessário inserir um valor válido")

        } else {
<<<<<<< HEAD
            const token = auth.getToken();
            Axios.post("http://localhost:3000/ativo/cadastrar", 
            {
                token: token,
                nomeAtivo: assets.name,
                sigla: assets.initials,
                preco: stockPrice,
                quantidade: quantity,
                data: date
            }).then(function (response) {
                console.log(response);
                alert(response.data.message);
                // descomentar a linha abaixo para o usuario ser redirecionado para o historico
                // de acoes
                // navigate("/historico");
=======
            Axios.post("/ativo/"+requestType,
                {
                    token: token,
                    nomeAtivo: assets,
                    preco: stockPrice,
                    quantidade: quantity,
                    data: date
                }).then(function (response) {
                    alert(response.data.message);
                    navigate("../historico");
>>>>>>> Develop

                }).catch(function (error) {
                    const message = error.response.data.message;
                    setError(message);
                })
        }
    }

    //para a formatar a data
    const [inputType, setInputType] = useState("text");

    return (
        <div className="background-img">
<<<<<<< HEAD
            <h1 className="titulo">Compra/Venda de Ativos</h1>
            <div className="div-cadastro">
                <form onSubmit={handleSubmit} className="form-cadastro">
                   
                   <BuscaAtivo 
                    setValue={setAssets}
=======
            <h1 className="titulo-acoes">Compra/Venda de Ativos</h1>
            <div className="div-acoes">
                <form onSubmit={handleSubmit} className="form-acoes">
                    <input
                        type="text"
                        name="ativo"
                        className="busca-input"
                        required
                        placeholder="Busque seu ativo"
                        value={assets}
                        onChange={(e) => setAssets(e.target.value)}
>>>>>>> Develop
                    />

                    <div className="linebox">
                        <IMaskInput
                            mask={Number}
                            scale={2}
                            name="preco"
                            max={999.99}
                            radix="."
                            mapToRadix={[',']}
                            padFractionalZeros={true}
                            required
                            placeholder="Preço da Ação"
                            value={stockPrice}
                            onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                                setStockPrice(e.target.value)}
                        />
                        <IMaskInput
                            mask={Number}
                            scale={0}
                            thousandsSeparator=' '
                            name="quantidade"
                            required
                            placeholder="Quantidade"
                            value={quantity}
                            onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                                setQuantity(e.target.value)}
                        />
                    </div >
                    <div className="date-input">
                        <input
                            type={inputType}
                            name="date"
                            required
                            placeholder="Data"
                            value={date}
                            onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                                setDate(e.currentTarget.value)}
                            onFocus={() => setInputType("date")}
                            onBlur={() => setInputType("text")}
                        />
                    </div>
                    <div className="buttonBox">
                        <button
                            className='buy-button'
                            onClick={() => setRequestType("cadastrar")}>
                            Comprou
                        </button>
                        <button
                            className='sell-button'
                            onClick={() => setRequestType("venda")}>
                            Vendeu
                        </button>
                    </div>
                    {error && <p className="error"> {error}</p>}
                </form>
            </div>
        </div>
    );
}

