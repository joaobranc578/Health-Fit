import React, { useState } from "react";
import "./Cadastro.css";
import bgImage from "../../assets/Login.png";
import logo from "../../assets/logo-footer.png";
import { Link, useNavigate } from "react-router-dom";
import { auth } from "../../firebase";
import { createUserWithEmailAndPassword, updateProfile } from "firebase/auth";

function Cadastro() {
  const [formData, setFormData] = useState({
    nome: "",
    email: "",
    senha: "",
  });
  const [erro, setErro] = useState("");
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleChange = (e) => {
    if (erro) setErro("");
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const { nome, email, senha } = formData;

    if (!nome || !email || !senha) {
      setErro("Todos os campos são obrigatórios.");
      return;
    }
    if (!email.includes("@")) {
      setErro("O email precisa conter '@'");
      return;
    }
    if (senha.length < 6) {
      setErro("A senha deve ter no mínimo 6 caracteres.");
      return;
    }

    setLoading(true);
    try {
      const userCredential = await createUserWithEmailAndPassword(auth, email, senha);
      await updateProfile(userCredential.user, { displayName: nome });

      console.log("Usuário cadastrado:", userCredential.user);
      alert("Cadastro realizado com sucesso!");
      navigate("/login");
    } catch (error)
      if (error.code === "auth/email-already-in-use") {
        setErro("Este email já está em uso.");
      } else {
        setErro("Erro ao cadastrar. Tente novamente.");
        console.error("Erro no cadastro:", error);
      }
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="login-page" style={{ backgroundImage: `url(${bgImage})` }}>
      <div className="overlay"></div>

      <img src={logo} alt="Health Fit" className="login-logo" />
      <div className="login-container">
        <form className="login-form" onSubmit={handleSubmit}>
          <h2>CADASTRAR</h2>

          <input
            type="text"
            name="nome"
            placeholder="NOME DE USUÁRIO"
            value={formData.nome}
            onChange={handleChange}
            disabled={loading}
          />
          <input
            type="email"
            name="email"
            placeholder="EMAIL"
            value={formData.email}
            onChange={handleChange}
            disabled={loading}
          />
          <input
            type="password"
            name="senha"
            placeholder="CRIAR SENHA"
            value={formData.senha}
            onChange={handleChange}
            disabled={loading}
          />

          {erro && <p className="error-message">{erro}</p>}

          <button type="submit" className="submit-btn" disabled={loading}>
            {loading ? <div className="spinner"></div> : "CADASTRAR"}
          </button>

          <p className="switch-auth-link">
            JÁ POSSUI UMA CONTA?
            <Link to="/login">FAZER LOGIN</Link>
          </p>
        </form>
      </div>
    </div>
  );
}

export default Cadastro;