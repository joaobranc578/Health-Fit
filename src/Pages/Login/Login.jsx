import React, { useState } from "react";
import "./Login.css";
import bgImage from "../../assets/Login.png";
import logo from "../../assets/logo-footer.png";
import { Link, useNavigate } from "react-router-dom";
import {
  auth,
  provider,
  signInWithPopup,
  signInWithEmailAndPassword,
  setPersistence,
  browserSessionPersistence,
  browserLocalPersistence,
} from "../../firebase";

function Login() {
  const [formData, setFormData] = useState({ email: "", senha: "" });
  const [erro, setErro] = useState("");
  const [loading, setLoading] = useState(false);
  const [keepLoggedIn, setKeepLoggedIn] = useState(false);
  const navigate = useNavigate();

  const handleChange = (e) => {
    if (erro) setErro("");
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleLoginSuccess = (user) => {
    console.log("Usuário logado:", user);
    navigate("/home");
  };

  const handleGoogleLogin = async () => {
    setLoading(true);
    try {
      const result = await signInWithPopup(auth, provider);
      handleLoginSuccess(result.user);
    } catch (error) {
      console.error("Erro ao logar com Google:", error);
      setErro("Falha ao fazer login com o Google.");
    } finally {
      setLoading(false);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const { email, senha } = formData;

    if (!email || !senha) {
      setErro("Email e senha são obrigatórios.");
      return;
    }

    setLoading(true);
    try {
      const persistence = keepLoggedIn
        ? browserLocalPersistence
        : browserSessionPersistence;
      await setPersistence(auth, persistence);

      const userCredential = await signInWithEmailAndPassword(auth, email, senha);
      handleLoginSuccess(userCredential.user);
    } catch (error) {
      console.error("Erro ao fazer login:", error);
      if (
        error.code === "auth/user-not-found" ||
        error.code === "auth/wrong-password" ||
        error.code === "auth/invalid-credential"
      ) {
        setErro("Email ou senha inválidos.");
      } else {
        setErro("Erro ao fazer login. Tente novamente.");
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
          <h2>FAZER LOGIN</h2>

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
            placeholder="SENHA"
            value={formData.senha}
            onChange={handleChange}
            disabled={loading}
          />

          {erro && <p className="error-message">{erro}</p>}

          <div className="social-login">
            <button type="button" onClick={handleGoogleLogin} disabled={loading} title="Login com Google">
              <ion-icon name="logo-google"></ion-icon>
            </button>
          </div>

          <div className="options">
            <label>
              Manter Login
              <input
                type="checkbox"
                checked={keepLoggedIn}
                onChange={(e) => setKeepLoggedIn(e.target.checked)}
                disabled={loading}
              />
            </label>
          </div>

          <button type="submit" className="submit-btn" disabled={loading}>
            {loading ? <div className="spinner"></div> : "ENTRAR"}
          </button>

          <p className="switch-auth-link">
            NÃO POSSUI UMA CONTA?
            <Link to="/cadastro">CRIAR CONTA</Link>
          </p>
        </form>
      </div>
    </div>
  );
}

export default Login;