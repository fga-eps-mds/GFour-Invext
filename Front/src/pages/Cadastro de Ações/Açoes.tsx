//talvez podemos começar a checar os subtitulos igual no prototipo usando uma nova div e mexendo apenas no p.
//lembrar de alterar o fundo
import './Ações.css';
import { IMaskInput } from "react-imask";
import { useState } from "react";
import { parseISO } from 'date-fns';


const CadastroAcoes = () => {

    const [error, setError] = useState("");
    const [assets,setAssets] = useState(""); //Assets é os ativos
    const [stockPrice, setStockPrice] = useState(""); //preço das ações
    const [date, setDate] = useState("");
    const [quantity,setQuantity] = useState("");

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        setError("");
        // Transforma a data de compra em um objeto Date
        const parsedBirth = parseISO(date); //vamos validar somente os anos de compra e venda ?


        //p fazer as máscaras depois
        {/*const nameMask = function (value: string) {
            var pattern = new RegExp(/^[A-Za-záàâãéèêíïóôõöúçñÁÀÂÃÉÈÍÏÓÔÕÖÚÇÑ ]+$/);
            return pattern.test(value);
        };*/}
    }

    //p formatar data
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
                </div >
                <div className="date-input">
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
                </div>
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