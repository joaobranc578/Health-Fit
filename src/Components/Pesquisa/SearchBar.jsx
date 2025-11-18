import './pesquisa.css';
import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Pesquisa() {
  const [query, setQuery] = useState("");
  const navigate = useNavigate();

  const handleSearch = (e) => {
    e.preventDefault();
    const termo = query.toLowerCase().trim();

    if (termo.includes("whey")) {
      navigate("/whey-protein");
    } else if (termo.includes("creatina")) {
      navigate("/creatina");
    } else if (termo.includes("pre") || termo.includes("pre") || termo.includes("treino")) {
      navigate("/pre-treino");
      } else if (termo.includes("barra")) {
      navigate("/Barras");
      } else if (termo.includes("kit")) {
      navigate("/Kits");
      } else if (termo.includes("roupas")) {
      navigate("/Roupas");
      } else if (termo.includes("hipercaloricos")) {
      navigate("/Hipercaloricos");
    } else {
      alert("Nenhum resultado encontrado.");
    }
  };

  return (
    <form onSubmit={handleSearch} className="Pesquise">
      <input
        type="text"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        placeholder="Pesquisar produto..."
      />
    </form>
  );
}
