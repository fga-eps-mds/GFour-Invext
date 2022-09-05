import { Dialog, DialogContent, Button, Select, MenuItem } from "@mui/material"
import axios from "axios";
import { useState } from "react";
import { IMaskInput } from "react-imask";
import { Register } from "../../pages/HistoricoDeAcoes/historico";
import { returnToken } from "../../services/authToken";
import { BuscaAtivo } from "../BuscaAtivos/Busca"
import './editarAtivo.css'
interface Assets {
    nome: string,
    sigla: string
}

interface Props {
    isOpen: boolean,
    setIsOpen: (isOpen: boolean) => void
    initialValues: Register
    callback: () => void
}
export const EditarAtivo = (p: Props) => {

    const token = returnToken();
    const [error, setError] = useState("");

    const initialAssets: Assets = { nome: p.initialValues.nomeAtivo, sigla: p.initialValues.sigla };
    const [assets, setAssets] = useState<Assets>(initialAssets); // É o ativo
    const [stockPrice, setStockPrice] = useState(p.initialValues.preco.toString()); //preço das ações
    const [date, setDate] = useState(p.initialValues.data);
    const [quantity, setQuantity] = useState(p.initialValues.quantidade.toString());
    const [type, setType] = useState(p.initialValues.execucao); // compra ou venda
    //para a formatar a data
    const [inputType, setInputType] = useState("text");

    const closeModal = () => {
        p.setIsOpen(false);
    }


    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        setError("");
        if (!assets) {
            setError("Selecione um ativo");

        } else if (parseInt(quantity) <= 0) {
            setError("É necessário inserir uma quantidade válida");

        } else if (parseInt(stockPrice) <= 0) {
            setError("É necessário inserir um valor válido");

        } else{
            axios.post("/ativo/editar",
                {
                    token: token,
                    id: p.initialValues.id,
                    sigla: assets.sigla,
                    preco: stockPrice,
                    quantidade: quantity
        
                }).then(function (response) {
                    alert(response.data.message);
                    p.callback();
                    closeModal();   

                }).catch(function (error) {
                    const message = error.response.data.message;
                    setError(message);
                })
        }
    }

    return (
        <Dialog open={p.isOpen} onClose={closeModal} maxWidth="md">
            <DialogContent>
                <form onSubmit={handleSubmit} className='modalEdit'>
                    <h2>Editar Ativo</h2>
                    <div className="busca-ativo">
                        <BuscaAtivo
                            value={assets!}
                            setValue={setAssets}
                        />
                    </div>
                    <div className="modalEdit-linebox">
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
                    <div className="modalEdit-linebox">
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
                        <Select
                            required
                            value={type}
                            onChange={(e) => setType(e.target.value)}
                            placeholder="Ordem"
                        >
                            <MenuItem value='compra'>Compra</MenuItem>
                            <MenuItem value='venda'>Venda</MenuItem>
                        </Select>
                    </div>
                    <div className="buttonBox">
                        <Button type="button" onClick={closeModal}>Cancelar</Button>
                        <Button type="submit">Alterar</Button>
                    </div>
                    {error && <p className="error"> {error}</p>}
                </form>
            </DialogContent>

        </Dialog>
    )
}

