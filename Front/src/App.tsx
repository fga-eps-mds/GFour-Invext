import './App.css'
import CadastroUsuario from './pages/CadastroUsuario/Cadastro'
import LoginUsuario from './pages/LoginUsuario/Login'
import {Route, Routes } from "react-router-dom";
import { AuthProvider } from './services/Provider';
import { RequireAuth } from './services/requireAuth';

// Remover e colocar a side bar que realmente será implementada
function SideBar() {
  return <div>SideBar</div>
}

function App() {

  return (
    <div className="App">
      <AuthProvider>
        <Routes>
          <Route path="/" element={<LoginUsuario />} />
          <Route path="/cadastro" element={<CadastroUsuario />} />

          <Route path="/index" element={
            <RequireAuth>
              <SideBar />
            </RequireAuth>
          } >
            {/* Aqui ficarão as outras rotas do usuário logado */}
          </Route>
        </Routes>
      </AuthProvider>
    </div>
  )
}

export default App
