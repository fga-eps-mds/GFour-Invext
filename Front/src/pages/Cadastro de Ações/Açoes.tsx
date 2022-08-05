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

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        setError("");

    }

    return (
        <body>
            <div className="background-img">
                <div className="div-cadastro">
                    <h1 className="titulo">Comprar/Vender</h1>

                </div>
            </div >
        </body>

    )
}


export default CadastroAcoes;