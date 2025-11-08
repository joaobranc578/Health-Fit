import React from "react";
import "./Login.css";
import bgImage from "../../assets/Login.png";
import logo from "../../assets/logo-footer.png";
import { Link, useNavigate } from "react-router-dom";
import { auth, provider, signInWithPopup } from "../../firebase"
import { GoogleAuthProvider } from "firebase/auth";

function Login() {
  const navigate = useNavigate();

  const handleGoogleLogin = async () => {
  try {
    const result = await signInWithPopup(auth, provider);
    const user = result.user;
    console.log("Usuário logado:", user);

    // Salva a foto e o nome no localStorage
    localStorage.setItem("userPhoto", user.photoURL);
    localStorage.setItem("userName", user.displayName);
    localStorage.setItem("userEmail", user.email);

    navigate("/home");
  } catch (error) {
    console.error("Erro ao logar com Google:", error);
  }
};

  return (
    <div className="login-page" style={{ backgroundImage: `url(${bgImage})` }}>
      <div className="overlay"></div>
      <img src={logo} alt="Health Fit" className="login-logo" />
      <div className="login-container">
        <form className="login-form">
          <h2>FAZER LOGIN</h2>

          <input type="text" placeholder="NOME DE USUÁRIO" />
          <input type="password" placeholder="SENHA" />

          <div className="social-login">
            <button type="button" onClick={handleGoogleLogin}>
              <ion-icon name="logo-google"></ion-icon>
            </button>
            <button type="button"><ion-icon name="logo-facebook"></ion-icon></button>
            <button type="button">X</button>
            <button type="button"><ion-icon name="logo-apple"></ion-icon></button>
            <button type="button"><ion-icon name="logo-microsoft"></ion-icon></button>
          </div>

          <div className="options">
            <label>Manter Login <input type="checkbox" /></label>
          </div>

          <div className="login-btn-container">
            <Link to="/home">
              <button type="button" className="login-btn">→</button>
            </Link>
          </div>

          <p className="create-account">
            NÃO CONSEGUE FAZER LOGIN?<br />
            <div className="account">
              <Link to="/cadastro">CRIAR CONTA</Link>
            </div>
          </p>
        </form>
      </div>
    </div>
  );
}

export default Login;