import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Pages/Home";
import Login from "./Pages/Login/Login";
import Cadastro from "./Pages/Cadastro/Cadastro";
import Creatina from "./Pages/Creatina/Creatina";
import Prétreino from "./Pages/Pré-treino/Pré-treino";
import Wheyprotein from "./Pages/Whey-protein/Whey-protein";
import Perfil from "./Pages/Perfil/Perfil";
import Whey900g from "./Pages/Whey-900g/Whey-900g";
import Barras from "./Pages/Barras/Barras";
import Kits from "./Pages/Kits/Kits";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/home" element={<Home />} />
        <Route path="/cadastro" element={<Cadastro />} />
        <Route path="/creatina" element={<Creatina />} />
        <Route path="/pre-treino" element={<Prétreino />} />
        <Route path="/whey-900g" element={<Whey900g />} />
        <Route path="/whey-protein" element={<Wheyprotein />} />
        <Route path="/perfil" element={<Perfil />} />
        <Route path="/barras" element={<Barras />} />
        <Route path="/kits" element={<Kits />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
