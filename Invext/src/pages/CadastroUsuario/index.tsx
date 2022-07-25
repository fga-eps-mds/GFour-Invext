import { IMaskInput } from "react-imask";
import { IoMdArrowBack } from 'react-icons/io';
import './styles.css';

const CadastroUsuario = () => {
    return (
        <body>
            <div className="background-img">
                <div className="div-cadastro">
                    <IoMdArrowBack
                        title="Voltar ao menu principal"
                        className="icone-voltar"
                    />
                    <h1 className="titulo">Cadastrar</h1>

                    <form className="form-cadastro">
                        <input type="text" name="displayName" required placeholder="Nome Completo " />

                        <IMaskInput
                            type="text"
                            name="birth"
                            required
                            mask="00/00/0000"
                            placeholder="Data de Nascimento " />

                        <IMaskInput
                            type="text"
                            name="phone"
                            mask="(00) 0.0000-0000"
                            placeholder="Telefone (opcional)"
                        />

                        <input type="email" name="email" required placeholder="E-mail " />

                        <input type="password" name="password" required placeholder="Senha " />

                        <input type="password"
                            name="confirmaPassword"
                            required
                            placeholder="Confirme a senha "
                        />

                        <button className='submit_button'>Cadastrar</button>
                    </form>
                </div>
            </div >
        </body>

    )
}
export default CadastroUsuario