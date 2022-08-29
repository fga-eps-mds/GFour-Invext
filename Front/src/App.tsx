import './App.css'
import CadastroUsuario from './pages/CadastroUsuario/Cadastro';
import LoginUsuario from './pages/LoginUsuario/Login';
import HistoricoDeAcoes from './pages/HistoricoDeAcoes/historico';
import { Route, Routes } from "react-router-dom";
import { CadastroAcoes } from './pages/Cadastro de Ações/Açoes';
import { AuthProvider} from './services/Provider';
import { RequireAuth } from './services/requireAuth';
import { Sidebar } from './pages/Sidebar/Sidebar';
import { PublicRoute } from './services/publicRoute';

function App() {

  return (
    <div className="App">
      <AuthProvider>
        <Routes>
        
          <Route element={<PublicRoute />}>
            <Route path="/" element={<LoginUsuario />} />
            <Route path="/cadastro" element={<CadastroUsuario />} /> 
          </Route>

          <Route path="/index" element={
            <RequireAuth>
              <Sidebar />
            </RequireAuth>
          }>
            <Route path="/index/acoes" element={<CadastroAcoes />} />
            <Route path="/index/historico" element={<HistoricoDeAcoes />} />
          </Route> 
        </Routes>
      </AuthProvider>
    </div>
  );
}

export default App;
