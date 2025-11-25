// SearchBar.jsx (versão atualizada com sugestões)
import './pesquisa.css';
import { useState, useRef, useEffect } from "react";
import { useNavigate } from "react-router-dom";

export default function Pesquisa() {
  const [query, setQuery] = useState("");
  const [suggestions, setSuggestions] = useState([]);
  const [showSuggestions, setShowSuggestions] = useState(false);
  const searchRef = useRef(null);
  const navigate = useNavigate();

  // Base de dados dos produtos - usando as mesmas rotas que você já tem
  const products = [
    {
      id: "whey900g",
      name: "100% Whey Refil 900G",
      price: "R$ 129,90",
      image: "/img/whey900g.png",
      route: "/whey-900g"
    },
    {
      id: "wheyPro1kg", 
      name: "Whey Pro 1Kg",
      price: "R$ 85,14",
      originalPrice: "R$ 94,60",
      image: "/img/whey1kg.png",
      route: "/whey-protein"
    },
    {
      id: "wheyPeanut",
      name: "Whey Protein Dr. Peanut 100% Whey 900g",
      price: "R$ 157,70", 
      image: "/img/100%-Whey-Dr.peanut.png",
      route: "/whey-protein"
    },
    {
      id: "creatina300g",
      name: "Creatina 300g",
      price: "R$ 75,10",
      image: "/img/creatina300g.png",
      route: "/creatina-300g"
    },
    {
      id: "preTreino300g",
      name: "Pré Treino 300g",
      price: "R$ 310,00",
      image: "/img/Pré-treino300g-ama.png", 
      route: "/pre-treino-300g"
    },
    {
      id: "proteinBar90g",
      name: "Power Protein Bar 90G",
      price: "R$ 117,24",
      image: "/img/Barra-90g.png",
      route: "/protein-bar-90g"
    },
    {
      id: "kitCreatina",
      name: "Kit Creatina + Coqueteleira",
      price: "R$ 74,62",
      image: "/img/Kits.png",
      route: "/kit-creatina-coqueteleira"
    }
  ];

  // Filtra produtos baseado na pesquisa
  useEffect(() => {
    if (query.trim() === "") {
      setSuggestions([]);
      setShowSuggestions(false);
      return;
    }

    const filtered = products.filter(product =>
      product.name.toLowerCase().includes(query.toLowerCase()) ||
      product.id.toLowerCase().includes(query.toLowerCase())
    );

    setSuggestions(filtered);
    setShowSuggestions(filtered.length > 0);
  }, [query]);

  // Fecha sugestões quando clica fora
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (searchRef.current && !searchRef.current.contains(event.target)) {
        setShowSuggestions(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const handleSearch = (e) => {
    e.preventDefault();
    if (query.trim() === "") return;

    // Se tiver sugestões, vai para o primeiro produto
    if (suggestions.length > 0) {
      navigate(suggestions[0].route);
      setShowSuggestions(false);
      setQuery("");
      return;
    }

    // Fallback para a busca antiga (caso não encontre produto específico)
    const termo = query.toLowerCase().trim();
    if (termo.includes("whey")) {
      navigate("/whey-protein");
    } else if (termo.includes("creatina")) {
      navigate("/creatina");
    } else if (termo.includes("pre") || termo.includes("pré") || termo.includes("treino")) {
      navigate("/pre-treino");
    } else if (termo.includes("barra")) {
      navigate("/barras");
    } else if (termo.includes("kit")) {
      navigate("/kits");
    } else if (termo.includes("roupa")) {
      navigate("/roupas");
    } else if (termo.includes("hipercalorico")) {
      navigate("/hipercaloricos");
    } else {
      alert("Nenhum produto encontrado.");
    }
    
    setShowSuggestions(false);
    setQuery("");
  };

  const handleSuggestionClick = (product) => {
    navigate(product.route);
    setShowSuggestions(false);
    setQuery("");
  };

  return (
    <div className="search-container" ref={searchRef}>
      <form onSubmit={handleSearch} className="Pesquise">
        <input
          type="text"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          onFocus={() => query.trim() !== "" && setShowSuggestions(true)}
          placeholder="Pesquisar produto..."
          className="search-input"
        />

      </form>

      {showSuggestions && suggestions.length > 0 && (
        <div className="suggestions-dropdown">
          {suggestions.map(product => (
            <div
              key={product.id}
              className="suggestion-item"
              onClick={() => handleSuggestionClick(product)}
            >
              <img src={product.image} alt={product.name} className="suggestion-image" />
              <div className="suggestion-info">
                <div className="suggestion-name">{product.name}</div>
                <div className="suggestion-price">
                  <span className="current-price">{product.price}</span>
                  {product.originalPrice && (
                    <span className="original-price">{product.originalPrice}</span>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}