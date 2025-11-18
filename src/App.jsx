import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useEffect } from "react";
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
import Pesquisa from "./Components/Pesquisa/SearchBar";
import Creatina300g from "./Pages/Creatina-300g/Creatina-300g";
import Hipercaloricos from "./Pages/Hipercaloricos/Hipercaloricos";
import Pretreino300g from "./Pages/Pre-treino-300g/Pre-treino-300g";
import Roupas from "./Pages/Roupas/Roupas";
import Proteinbar90g from "./Pages/Protein-bar-90g/Protein-bar-90g";
import Kitcreatinacoqueteleira from "./Pages/Kit-creatina-coqueteleira/Kit-creatina-coqueteleira";
import logo from "./assets/logo-footer.png";
import { CartProvider } from './context/CartContext';

function App() {
   useEffect(() => {
    const favicon = document.querySelector('link[rel="icon"]');
    favicon.href = logo;
  }, []);
  return (
    <CartProvider>
    <BrowserRouter>
    <Pesquisa /> {/* barra de pesquisa visível em todas as páginas */}
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
        <Route path="/creatina-300g" element={<Creatina300g />} />
        <Route path="/hipercaloricos" element={<Hipercaloricos />} />
        <Route path="/pre-treino-300g" element={<Pretreino300g />} />
        <Route path="/protein-bar-90g" element={<Proteinbar90g />} />
        <Route path="/kit-creatina-coqueteleira" element={<Kitcreatinacoqueteleira />} />
        <Route path="/roupas" element={<Roupas />} />

      </Routes>
    </BrowserRouter>
    </CartProvider>
  );
}

export default App;
