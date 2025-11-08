import React, { useEffect, useState } from "react";
import "./Perfil.css";
import logo from "../../assets/logo-footer.png";
import { Link, useNavigate } from "react-router-dom";
import { auth } from "../../firebase";
import Footer from '../../Components/Footer';

function Perfil() {
  const navigate = useNavigate();
  const [user, setUser] = useState({
    name: "",
    photo: "",
    email: "",
  });

  useEffect(() => {
    const storedName = localStorage.getItem("userName");
    const storedPhoto = localStorage.getItem("userPhoto");
    const storedEmail = localStorage.getItem("userEmail");
    setUser({
      name: storedName || "Usuário",
      photo: storedPhoto || "https://via.placeholder.com/150",
      email: storedEmail || "email@exemplo.com",
    });
  }, []);

  const handleLogout = () => {
    auth.signOut();
    localStorage.clear();
    navigate("/login");
  };

  return (
    <div className="perfil-page">
      {/* Banner com a foto do usuário */}
      <div
        className="perfil-banner"
        style={{ backgroundImage: `url(${user.photo})` }}
      ></div>

      <img src={logo} alt="Health Fit" className="perfil-logo" />

      {/* Card de informações */}
      <div className="perfil-card">
        <div className="perfil-info">
          <img src={user.photo} alt="Foto de perfil" className="perfil-foto" />
          <div className="perfil-dados">
            <h2>{user.name}</h2>
            <p>{user.email}</p>
          </div>
        </div>

        <div className="perfil-botoes">
          <button onClick={handleLogout} className="logout-btn">SAIR</button>
          <Link to="/home" className="home-link">VOLTAR</Link>
        </div>
      </div>
      <div className="Max">
        <Footer />
      </div>
    </div>


  );
}

export default Perfil;