import React from "react";
import "./Login.css";
import bgImage from "../../assets/Login.png";
import logo from "../../assets/logo-footer.png";
import { Link } from "react-router-dom";

function Login() {
  return (
    <div
      className="login-page"
      style={{ backgroundImage: `url(${bgImage})` }}
    >
      <div className="overlay"></div>

        <img src={logo} alt="Health Fit" className="login-logo" />
      <div className="login-container">

        <form className="login-form">
          <h2>FAZER LOGIN</h2>

          <input type="text" placeholder="NOME DE USUÁRIO" />
          <input type="password" placeholder="SENHA" />

          <div className="social-login">
            <button type="button" className="google">G</button>
            <button type="button" className="facebook">f</button>
            <button type="button" className="x">X</button>
            <button type="button" className="apple"></button>
            <button type="button" className="microsoft">🪟</button>
          </div>

          <div className="options">
            <label>
             Manter Login <input type="checkbox" /> 
            </label>
          </div>

          <div className="login-btn-container">
  
  <Link to="/home">
  <button type="button" className="login-btn">→</button>
</Link>
    </div>

          <p className="create-account">
            NÃO CONSEGUE FAZER LOGIN?<br />
            <a href="#">CRIAR CONTA</a>
          </p>
        </form>
      </div>
    </div>
  );
}

export default Login;