import React, { useEffect, useState } from "react";
import "./Perfil.css";
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
  const [banner, setBanner] = useState("");

  useEffect(() => {
    const storedName = localStorage.getItem("userName");
    const storedPhoto = localStorage.getItem("userPhoto");
    const storedEmail = localStorage.getItem("userEmail");
    const storedBanner = localStorage.getItem("userBanner");
    setUser({
      name: storedName || "Usuário",
      photo: storedPhoto || "https://via.placeholder.com/150",
      email: storedEmail || "email@exemplo.com",
    });
    setBanner(storedBanner || "");
  }, []);

  const handleBannerUpload = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setBanner(reader.result);
        localStorage.setItem("userBanner", reader.result);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleLogout = () => {
    auth.signOut();
    localStorage.clear();
    navigate("/login");
  };

  return (
    <>
      <div className="perfil-page">
        {/* Banner com upload */}
        <div
          className="perfil-banner"
          style={{ backgroundImage: banner ? `url(${banner})` : "linear-gradient(135deg, #667eea 0%, #764ba2 100%)" }}
        >
         
        </div>

        {/* Card de informações flutuando */}
        <div className="perfil-card">
          <div className="perfil-info">
            <img src={user.photo} alt="Foto de perfil" className="perfil-foto" />
            <div className="perfil-dados">
              <h2>{user.name}</h2>
              <p>{user.email}</p>
            </div>
          </div>

          <label className="banner-upload-btn">
            <input
              type="file"
              accept="image/*"
              onChange={handleBannerUpload}
              style={{ display: "none" }}
            />
            🖊️ Trocar Banner
          </label>

          <div className="perfil-botoes">
            <button onClick={handleLogout} className="logout-btn">SAIR</button>
            <Link to="/home" className="home-link">VOLTAR</Link>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default Perfil;