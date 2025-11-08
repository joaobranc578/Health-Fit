import React from "react";
import "./Cadastro.css";
import bgImage from "../../assets/Login.png";
import logo from "../../assets/logo-footer.png";
import { Link } from "react-router-dom";
import { useState } from "react";


    function Cadastro() {
  const [email, setEmail] = useState("");
  const [erro, setErro] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    // verifica se o email tem o caractere "@"
    if (!email.includes("@")) {
      setErro("O email precisa conter '@'");
      return;
    }

    setErro("");
    alert("Cadastro realizado com sucesso!");
  };

  return (
    <div
      className="login-page"
      style={{ backgroundImage: `url(${bgImage})` }}
    >
      <div className="overlay"></div>

        <img src={logo} alt="Health Fit" className="login-logo" />
      <div className="login-container">

        <form className="login-form">
          <h2>CADASTRAR</h2>

          <input type="text" placeholder="NOME DE USUÁRIO" />
          <form onSubmit={handleSubmit}>
      

      <input
        type="email"
        placeholder="EMAIL"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />

      {erro && <p style={{ color: "red" }}>{erro}</p>}

          <input type="password" placeholder="CRIAR SENHA" />

          <div className="social-login">
            <button type="button" className="microsoft"><ion-icon name="logo-google"></ion-icon></button>
            <button type="button" className="microsoft"><ion-icon name="logo-facebook"></ion-icon></button>
            <button type="button" className="x">X</button>
            <button type="button" className="microsoft"><ion-icon name="logo-apple"></ion-icon></button>
            <button type="button" className="microsoft"><ion-icon name="logo-microsoft"></ion-icon></button>
          </div>

          
    </form>

          <div className="login-btn-container">
  
  <Link to="/login">
      <button type="submit" className="login-btn">→</button>
</Link>
    </div>

           
        </form>
      </div>
    </div>
  );
}

export default Cadastro;