import './Login.css';
import { useState } from "react";
import { Link } from 'react-router-dom';
import Axios from "axios";

const LoginUsuario = () => {

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");
    const [user, setUser] = useState([]);


    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        setError("");

        const user = {
            email,
            password,
        }

        Axios.post("http://localhost:3000/usuario/login", {
            email: email,
            senha: password
        }).then(function (response) {
            const message = response.data.message;
            const token = response.data.token;
            alert(message);
        }).catch(function (response) {
            // Caso caia nesse catch, o usuario nao eh gravado no banco e retorna um erro
            const message = response.response.data.message;
            setError(message);
        })
    }
    
        return (

            <div className="background-img">
                <div className="div-login">

                    <h1 className="titulo">Entrar</h1>

                    <form onSubmit={handleSubmit} className="form-login">
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
                        <button type="submit" className='submit-button'>Entrar</button>
                        <Link to="/cadastro">
                            <button type="button" className='sign-up-button'>Inscreva-se</button>
                        </Link>
                        {error && <p className="error"> {error}</p>}
                    </form>
                </div>
            </div >




        )
    }
    export default LoginUsuario