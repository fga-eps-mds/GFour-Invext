import './Ações.css';
import { IMaskInput } from "react-imask";
import { useState } from "react";


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

    //Formatar data
    const [inputType, setInputType] = useState("text");

    return (
        <div className="background-img">
            <h1 className="titulo">Compra/Venda de Ativos</h1>
            <div className="div-cadastro">
                <form onSubmit={handleSubmit} className="form-login">
                    <input
                        type="text"
                        name="ativo"
                        className="busca-input"
                        required
                        placeholder="Busque seu ativo"
                        value={assets}
                        onChange={(e) => setAssets(e.target.value)}
                    />
                {/*A ideia é alinhar eles na mesma linha */}
                <div className="columnBox"> 
                    <input
                        type="number"
                        name="preco"
                        required
                        placeholder="Preço da Ação"
                        value={stockPrice}
                        onChange={(e) => setStockPrice(e.target.value)}
                    />
                    <input
                        type="number"
                        name="quantidade"
                        required
                        placeholder="Quantidade"
                        value={quantity}
                        onChange={(e) => setQuantity(e.target.value)}
                        />
                </div>
                    <input
                        type="date"
                        name="date"
                        className='date-input'
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
        </div>
    )
}


export default CadastroAcoes;