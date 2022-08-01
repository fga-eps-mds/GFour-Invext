import './App.css'
import CadastroUsuario from './pages/CadastroUsuario'
import LoginUsuario from './pages/LoginUsuario/Login'
import { BrowserRouter as Router, Route, Routes} from "react-router-dom";

function App() {

  return (
    <div className="App">
          <Router>
            <Routes>
              <Route path = "/" element = {<LoginUsuario/>}/>
              <Route path = "/cadastro" element = {<CadastroUsuario/>}/>
            </Routes>
          </Router>
    </div>
  )
}

export default App
