import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { auth } from "../../firebase";
import CartDrawer from "../CartDrawer";
import "./Topo.css";

export default function Topo(props) {
  const [userPhoto, setUserPhoto] = useState(null);
  const [userName, setUserName] = useState(null);
  const [cartOpen, setCartOpen] = useState(false);
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

  function toggleCart() {
    setCartOpen((s) => !s);
  }

  return (
    <header>
      <div className="container">
        <a href="#" className="logo">
          <img src="/img/Logo.png" alt="Logo" />
        </a>

        <ul className="navbar-list">
          <li className="navbar-item">
            {userPhoto ? (
              <>
                <Link to="/perfil">
                  <img
                    src={userPhoto}
                    alt="Usuário"
                    className="user-photo"
                  />
                </Link>
                <button onClick={handleLogout} className="btn">
                  Sair
                </button>
              </>
            ) : (
              <>
                <ion-icon
                  name="person-circle-outline"
                  className="icon-user"
                ></ion-icon>
                <Link to="/login" className="btn">
                  Login
                </Link>
              </>
            )}
          </li>
          <li className="navbar-item">
            <a href="#">
              <ion-icon
                name="heart-outline"
                className="icon-hearth"
              ></ion-icon>
            </a>
          </li>
          <li className="navbar-item">
            <div className="topo-actions">
        {/* botão da sacola */}
        <button
          className="bag-button"
          onClick={toggleCart}
          aria-label="Abrir carrinho"
        >
          {/* simples ícone de sacola */}
          <svg width="27" height="27" viewBox="0 0 24 24" fill="none">
            <path
              d="M6 7h12l-1 13H7L6 7z"
              stroke="#222"
              strokeWidth="1.2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M9 7V6a3 3 0 016 0v1"
              stroke="#222"
              strokeWidth="1.2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </button>
      </div>

          </li>
        </ul>
      </div>


      <CartDrawer open={cartOpen} onClose={() => setCartOpen(false)} />
    </header>
  );
}