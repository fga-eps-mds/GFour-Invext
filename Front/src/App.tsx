import './App.css'
import CadastroUsuario from './pages/CadastroUsuario/Cadastro';
import LoginUsuario from './pages/LoginUsuario/Login';
import { HistoricoDeAcoes } from './pages/HistoricoDeAcoes/historico';
import { Route, Routes } from "react-router-dom";
import { CadastroAcoes } from './pages/Cadastro de Ações/Açoes';
import { AuthProvider } from './services/Provider';
import { RequireAuth } from './services/requireAuth';
import { Sidebar } from './pages/Sidebar/Sidebar';
import { PublicRoute } from './services/publicRoute';
import { Rentabilidade } from './pages/Rentabilidade/rentabilidade';
import { Patrimonio } from './pages/Patrimonio/Patrimonio';
import { PageNotFound } from './components/PageNotFound/PageNotFound';

function App() {

  return (
    <div className="App">
      <AuthProvider>
        <Routes>

          <Route element={<PublicRoute />}>
            <Route path="/" element={<LoginUsuario />} />
            <Route path="/cadastro" element={<CadastroUsuario />} />
          </Route>

          <Route element={
            <RequireAuth>
              <Sidebar />
            </RequireAuth>
          }>
            <Route path="/acoes" element={<CadastroAcoes />} />
            <Route path="/historico" element={<HistoricoDeAcoes />} />
            <Route path="/rentabilidade" element={<Rentabilidade />} />
            <Route path="/patrimonio" element={<Patrimonio />} />
          </Route>

            <Route path='/*' element={<PageNotFound />} />
        </Routes>
      </AuthProvider>
    </div>
  );
}

export default App;
