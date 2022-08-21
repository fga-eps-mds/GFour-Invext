import { useNavigate } from "react-router-dom";
import { useAuth } from "../../services/Provider";


export const AvisoSair = () =>{

  const auth = useAuth();
  const navigate = useNavigate();
  
  const logout = () =>{
      auth.logout(() => {
        navigate("/");
      })
    }

  return(
    <>
      {logout()} 
    </>
  )
  
}
    