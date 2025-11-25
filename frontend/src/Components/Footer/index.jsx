import React from "react";
import './Footer.css'
import LogoFooter from "../../assets/logo-footer.png";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-content">

        {/* Logo */}
        <div className="footer-logo">
          <img src={LogoFooter} alt="" />
          <p>© 2025 Health Fit, Inc. Todos os direitos reservados.</p>
        </div>

        {/* Links úteis */}
        <div className="footer-links">
          <h4>Links Úteis</h4>
          <ul>
            <li><a href="#">Política de Privacidade</a></li>
            <li><a href="#">Termos de Uso</a></li>
            <li><a href="#">Contato</a></li>
          </ul>
        </div>

        {/* Contato */}
        <div className="footer-contact">
          <h4>Fale Conosco</h4>
          <p>Telefone: (12) 9999-3456</p>
        </div>

        {/* Localização */}
        <div className="footer-location">
          <h4>Localização</h4>
          <p>Caraguatatuba - Centro</p>
          <p>Avenida Anchieta</p>
        </div>

        {/* Voltar ao topo */}
        <div className="footer-top">
          <a href="#">VOLTAR AO TOPO ▲</a>
        </div>
      </div>
    </footer>
  );
}