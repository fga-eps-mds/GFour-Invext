import './App.css'
import CadastroUsuario from './pages/CadastroUsuario/Cadastro'
import LoginUsuario from './pages/LoginUsuario/Login'
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import CadastroAcoes from './pages/Cadastro de Ações/Açoes';
import {Route, Routes} from "react-router-dom";
import { AuthProvider} from './services/Provider';
import { RequireAuth } from './services/requireAuth';
import { SideBar } from './pages/Sidebar/Sidebar';
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
              <SideBar />
            </RequireAuth>
          } >
              <Route path="/acoes" element={<CadastroAcoes />} />
              {/* Aqui ficarão as outras rotas do usuário logado */}
          </Route>
          
        </Routes>
      </AuthProvider>
    </div>
  )
}

export default App
