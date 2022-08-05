import { IMaskInput } from "react-imask";
import { IoMdArrowBack } from 'react-icons/io';
import './Ações.css';
import { useState } from "react";
import { parseISO, isAfter, sub, add } from "date-fns";
import { Link, useNavigate } from "react-router-dom";
import Axios from "axios";

const CadastroAcoes = () => {

    const [error, setError] = useState("");
    const [assets,setAssets] = useState(""); //Assets é os ativos
    const [stockPrice, setStockPrice] = useState(""); //preço das ações
    const [date, setDate] = useState("");
    const [quantity,setQuantity] = useState("");

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        setError("");
    }

    //p formatar data
    const [inputType, setInputType] = useState("text");

    return (
        <body>
            <div className="background-img">
                <div className="div-cadastro">
                    <h1 className="titulo">Invext-Comprar/Vender</h1>
                    <form onSubmit={handleSubmit} className="form-login">

                        <h1>Ativo</h1>
                        <input
                            type="assets"
                            name="assets"
                            required
                            placeholder="cadastre a companhia que se deseja comprar ou vender ações"
                            value={assets}
                            onChange={(e) => setAssets(e.target.value)}
                        />
                    {/*A ideia é alinhar eles na mesma linha */}
                    <div className="columnBox"> 
                    <h1>Preço da Ação</h1>
                    <input
                            type="price"
                            name="stockPrice"
                            required
                            placeholder="Preço da Ação."
                            value={stockPrice}
                            onChange={(e) => setStockPrice(e.target.value)}
                        />
                        <h1>Quantidade</h1>
                         <input
                            type="quantity"
                            name="quantity"
                            required
                            placeholder="Quantidade"
                            value={quantity}
                            onChange={(e) => setQuantity(e.target.value)}
                        />
                    </div>
                    <h1>Data</h1>
                         <input
                            type="date"
                            name="date"
                            required
                            placeholder="Data"
                            value={date}
                            onChange={(e) => setDate(e.target.value)}
                            onFocus={() => setInputType("date")}
                            onBlur={() => setInputType("text")}
                        />
                        <div className="buttonBox">
                        <button className='buy-button'>Comprou</button>
                        {error && <p className="error"> {error}</p>}
                        <button className='sell-button'>Vendeu</button>
                        {error && <p className="error"> {error}</p>}
                        </div>
                    </form>
                </div>
            </div >
        </body>

    )
}


export default CadastroAcoes;