import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Pages/Home";
import Login from "./Pages/Login/Login";
import Cadastro from "./Pages/Cadastro/Cadastro";
import Creatina from "./Pages/Creatina/Creatina";
import Prétreino from "./Pages/Pré-treino/Pré-treino";
import Wheyprotein from "./Pages/Whey-protein/Whey-protein";

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
        <Route path="/whey-protein" element={<Wheyprotein />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
