import './App.css'
import CadastroUsuario from './pages/CadastroUsuario/Cadastro'
import LoginUsuario from './pages/LoginUsuario/Login'
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import CadastroAcoes from './pages/Cadastro de Ações/Açoes';
/*import Sidebar from "./Componentes./Sidebar";*/


function App() {

  return (
    <div className='App'>
      <h1>Sidebar</h1>
      <Router>
        <Routes>
          <Route path="/" element={<LoginUsuario />} />
          <Route path="/cadastro" element={<CadastroUsuario />} />
          <Route path="/acoes" element={<CadastroAcoes />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App
