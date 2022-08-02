import { IMaskInput } from "react-imask";
import { IoMdArrowBack } from 'react-icons/io';
import './Cadastro.css';
import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";

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

    const handleSubmit = async (e : React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        setError("");

        const user = {
            displayName,
            email,
            password,
            phone,
            birth,
        }

        if (password != confirmPassword) {
            setError("As senhas precisam ser iguais");
    
        } else if (password.length < 8) {
            setError("A senha precisa ter pelo menos 8 caracteres");
    
        } else {
            // Caso caia nesse else, o usuario deve ser gravado no banco
            setError("");
            // Usuario eh redirecionado para a página de login
            navigate("/");
        };
    }




    return (
        <body>
            <div className="background-img">
                <div className="div-cadastro">
                    <Link to="/">
                        <IoMdArrowBack
                            title="Voltar ao menu principal"
                            className="icone-voltar"
                        />
                    </Link>
                    <h1 className="titulo">Cadastrar</h1>

                    <form onSubmit={handleSubmit} className="form-cadastro">

                        <input
                            type="text"
                            name="displayName"
                            required placeholder="Nome Completo"
                            value={displayName}
                            onChange={(e) => setDisplayName(e.target.value)}
                        />

                        <IMaskInput
                            type="text"
                            name="birth"
                            required
                            mask="00/00/0000"
                            placeholder="Data de Nascimento"
                            value={birth}
                            onChange={(e) => setBirth(e.currentTarget.value)}
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
                            onChange={(e) => setEmail(e.target.value)} 
                        />

                        <input
                            type="password"
                            name="password"
                            required
                            placeholder="Senha"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                        />

                        <input
                            type="password"
                            name="confirmaPassword"
                            required
                            placeholder="Confirme a senha"
                            value={confirmPassword}
                            onChange={(e) => setConfirmPassword(e.target.value)}
                        />
                        
                        <button className='submit-button'>Cadastrar</button>
                        {error && <p className="error"> {error}</p>}
                    </form>
                </div>
            </div >
        </body>

    )
}
export default CadastroUsuario