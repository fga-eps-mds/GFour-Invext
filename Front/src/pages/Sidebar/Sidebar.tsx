import { useNavigate } from "react-router-dom";
import { useAuth } from "../../services/Provider";


export const SideBar = () => {
    let auth = useAuth();
    let navigate = useNavigate();

    return(
    <div>
      <h1>Bem vindo usuario</h1>
      <button onClick={() => {auth.logout(() => {navigate("/");})}}>Sair</button>
  
    </div>
  )};