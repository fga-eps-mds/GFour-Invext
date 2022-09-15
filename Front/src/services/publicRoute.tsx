import { useLocation , Navigate, Outlet} from "react-router-dom";
import { useAuth } from "./Provider";

export const PublicRoute = ( ) => {
    let auth = useAuth();
    let location = useLocation();


    // Se o usuario não estiver logado, ele tem acesso a parte publica das rotas
    if (!auth.getToken()) {
      return <Outlet />;
    }
    // Caso ele esteja logado, ele é redirecionado para o ultimo local 
    // que ele estava antes de tentar deslogar
    return <Navigate to="/patrimonio" state={{ from: location }} replace />;
  }