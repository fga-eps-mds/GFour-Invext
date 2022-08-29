import { IMaskInput } from "react-imask";
import { IoMdArrowBack } from 'react-icons/io';
import './Cadastro.css';
import { useState } from "react";
import { parseISO, isAfter, sub, add } from "date-fns";
import { Link, useNavigate } from "react-router-dom";
import Axios from "axios";

const CadastroUsuario = () => {

    // Vai redirecionar a pagina para o login
    let navigate = useNavigate();

    const [displayName, setDisplayName] = useState("");
    const [birth, setBirth] = useState("");
    const [phone, setPhone] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    const [error, setError] = useState("");

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        setError("");

        // Transforma a data de nascimento em um objeto Date
        const parsedBirth = parseISO(birth);

        // Verifica se a pessoa tem menos de 18 anos
        if (isAfter(parsedBirth, sub(new Date(), { years: 18 }))) {
            setError("É necessário ter mais de 18 anos!");

            // Verifica se a pessoa colocou uma data de nasc. aceitável (tem menos de 120 anos)
        } else if (isAfter(parsedBirth, add(new Date(), { years: 120 }))) {
            setError("Insira uma data de nascimento válida!");

        } else if (password.length < 8) {
            setError("A senha precisa ter pelo menos 8 caracteres");

        } else if (password != confirmPassword) {
            setError("As senhas precisam ser iguais");

        } else {
            Axios.post("/usuario/cadastrar", {
                nomeCompleto: displayName,
                dataNascimento: birth,
                telefone: phone,
                email: email,
                senha: password
            }).then(function (response) {
                // Usuario eh cadastrado no banco e redirecionado para a pagina de login
                navigate("/");
            })
                .catch(function (response) {
                    // Caso caia nesse catch, o usuario nao eh gravado no banco e retorna um erro
                    const message = response.response.data.message;
                    setError(message);
                })
        };
    }


    // Função para validar se o input do nome se encaixa na regex(somente letras)
    const nameMask = function (value: string) {
        var pattern = new RegExp(/^[A-Za-záàâãéèêíïóôõöúçñÁÀÂÃÉÈÍÏÓÔÕÖÚÇÑ ]+$/);
        return pattern.test(value);
    };

    /* State para alterar o tipo do input Data */
    const [inputType, setInputType] = useState("text");

    return (
        <body>
            <div className="background-img"> 
                <div className="div-cadastro">
                     <Link to="/">
                            <IoMdArrowBack
                             className="icone-voltar"
                             title="Voltar ao menu principal"
                            />
                    </Link>

                    <form onSubmit={handleSubmit} className="form-cadastro">
                    <h1 className="titulo">Cadastrar</h1>

                        <IMaskInput
                            mask={nameMask}
                            name="displayName"
                            required
                            placeholder="Nome Completo"
                            value={displayName}
                            onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                                setDisplayName(e.currentTarget.value)}
                        />

                        <input
                            placeholder="Data de Nascimento"
                            type={inputType}
                            name="birth"
                            required
                            value={birth}
                            onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                                setBirth(e.currentTarget.value)}
                            onFocus={() => setInputType("date")}
                            onBlur={() => setInputType("text")}
                        />

                        <IMaskInput
                            type="text"
                            name="phone"
                            mask="(00) 00000-0000"
                            placeholder="Telefone (opcional)"
                            value={phone}
                            onChange={(e) => setPhone(e.currentTarget.value)}
                        />

                        <input
                            type="email"
                            name="email"
                            required
                            placeholder="E-mail"
                            value={email}
                            onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                                setEmail(e.target.value)}
                        />

                        <input
                            type="password"
                            name="password"
                            required
                            placeholder="Senha"
                            value={password}
                            onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                                setPassword(e.target.value)}
                        />

                        <input
                            type="password"
                            name="confirmaPassword"
                            required
                            placeholder="Confirme a senha"
                            value={confirmPassword}
                            onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                                setConfirmPassword(e.target.value)}
                        />

                        {error && <p className="error"> {error}</p>}
                        <button className='submit-button'>Cadastrar</button>
                    </form>
                </div>
            </div >
        </body>

    )
}
export default CadastroUsuario