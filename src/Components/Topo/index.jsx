import './Topo.css'
import { Link, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { auth } from "../../firebase";

export default function Topo() {
  const [userPhoto, setUserPhoto] = useState(null);
  const [userName, setUserName] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const photo = localStorage.getItem("userPhoto");
    const name = localStorage.getItem("userName");

    if (photo) setUserPhoto(photo);
    if (name) setUserName(name);
  }, []);

  const handleLogout = () => {
    auth.signOut().then(() => {
      localStorage.clear();
      setUserPhoto(null);
      setUserName(null);
      navigate("/login");
    });
  };

  return (
    <header>
      <div className="container">
        <a href="#" className="logo">
          <img src="/img/Logo.png" alt="Logo" />
        </a>

        <nav className="navbar">
          <input type="text" className="Pesquise" placeholder="O que está buscando?" />
        </nav>

        <ul className="navbar-list">
          <li className="navbar-item">
            {userPhoto ? (
              <>
                <Link to="/perfil"><img src={userPhoto} alt="Usuário" className="user-photo" /></Link>
                <button onClick={handleLogout} className="btn">Sair</button>
              </>
            ) : (
              <>
                <ion-icon name="person-circle-outline" className="icon-user"></ion-icon>
                <Link to="/login" className="btn">Login</Link>
              </>
            )}
          </li>
          <li className="navbar-item">
            <a href="#"><ion-icon name="heart-outline" className="icon-hearth"></ion-icon></a>
          </li>
          <li className="navbar-item">
            <a href="#"><ion-icon name="bag-handle-outline" className="icon-bag"></ion-icon></a>
          </li>
        </ul>
      </div>
    </header>
  );
}