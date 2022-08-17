//talvez podemos começar a checar os subtitulos igual no prototipo usando uma nova div e mexendo apenas no p.
//lembrar de alterar o fundo
import './Ações.css';
import { IMaskInput } from "react-imask";
import { useState } from "react";
import Axios from "axios";


export const CadastroAcoes = () => {

    const [error, setError] = useState("");
    const [assets,setAssets] = useState(""); //Assets é o ativo
    const [stockPrice, setStockPrice] = useState(""); //preço das ações
    const [date, setDate] = useState("");
    const [quantity,setQuantity] = useState("");

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    
        e.preventDefault();
        setError("");
    
        if (quantity.length < 0 ){
            setError("É necessário inserir uma quantidade válida");
        
        }else if (stockPrice.length < 0 ) {
            setError("É necessário inserir um valor válido");
            
        } else {
            // Funciona somente quando não está sendo usado o auth no back
            Axios.post("http://localhost:3000/ativo/cadastrar", {
                nomeAtivo: assets,
                preco: stockPrice,
                quantidade: quantity,
                data: date
            }).then(function (response) {
                console.log(response);
                alert(response.data.message);
                // Colocar posteriormente o redirecionamento para o historico de acoes

            }).catch(function (error) {
                const message = error.response.data.message;
                setError(message);
            })
        }
    }

    // mascara para quantidade
    const quantityMask = function (value: string) {
        var pattern = new RegExp(/^[0-9]+$/);
        return pattern.test(value);
    };

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

                    <IMaskInput
                        mask={Number}
                        scale= {2}
                        max= {999.99}
                        padFractionalZeros= {true}
                        name="preco"
                        required
                        placeholder="Preço da Ação"
                        value={stockPrice}
                        onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                            setStockPrice(e.target.value)}
                    />
                    <IMaskInput
                        type="text"
                        name="quantidade"
                        required
                        mask={quantityMask}
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
                        <button className='buy-button'>Comprou</button>

                        <button className='sell-button'>Vendeu</button>
                       
                    </div>
                    {error && <p className="error"> {error}</p>}
                </form>
            </div>
        </div>
    );
}

