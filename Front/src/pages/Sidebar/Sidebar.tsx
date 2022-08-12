import { Outlet, useNavigate } from "react-router-dom";
import { useAuth } from "../../services/Provider";
import "./Sidebar.css";


export const SideBar = () => {
    let auth = useAuth();
    let navigate = useNavigate();

    return(
    <div className="sidebar">
      <h1>Bem vindo usuario</h1>
      <button onClick={() => {auth.logout(() => {navigate("/");})}}>Sair</button>
      <Outlet/>
    </div>
  )};