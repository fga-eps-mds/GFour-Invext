import { IMaskInput } from "react-imask";
import { IoMdArrowBack } from 'react-icons/io';
import './Login.css';
import { useEffect, useState } from "react";

const LoginUsuario = () => {

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [error,setError] = useState("");
    const[user,setUser] = useState([]);


    const handleSubmit = async (e : React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        setError("");

        const user = {
            email,
            password,
        }

        if (!user || !password) {
            setError("Usuário ou senha inválido");
        } else if(error) {
            setError("Erro, tente novamente");
        
        }else{
            setError("");
        }
    }
           
        return (
            <body>
                <div className="background-img">
                    <div className="div-cadastro">
                        <IoMdArrowBack
                            title="Voltar ao menu principal"
                            className="icone-voltar"
                        />
                        <h1 className="titulo">Entrar</h1>

                        <form onSubmit={handleSubmit} className="form-cadastro">
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
                                placeholder="Senha "
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                            />                        
                            <button className='submit-button'>Entrar</button>
                            <button className='sign-up-button'>Inscreva-se</button>
                            {error && <p className="error"> {error}</p>}
                        </form>
                    </div>
                </div >
            </body>

        

    
    )
}
export default LoginUsuario