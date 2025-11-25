import './HeaderLinks.css'
import { Link } from "react-router-dom";

export default function HeaderLinks() {
    return (
        
        <div className="container">
            <ul className="navbar-list2">
                <li className="navbar-item2">
                    <Link to="/home" className="botao">MENU</Link>
                </li>
                <li className="navbar-item2">
                    <Link to="/creatina" className="botao">CREATINA</Link>
                </li>
                <li className="navbar-item2">
                    <Link to="/whey-protein" className="botao">WHEY PROTEIN</Link>
                </li>
                <li className="navbar-item2">
                    <Link to="/pre-treino" className="botao">PRÉ-TREINO</Link>
                </li>
                <li className="navbar-item2">
                    <Link to="/barras" className="botao">BARRAS PROTEICAS</Link>
                </li>
                 <li className="navbar-item2">
                    <Link to="/kits" className="botao">KITS PROMOCIONAIS</Link>
                </li>
                 <li className="navbar-item2">
                    <Link to="/hipercaloricos" className="botao">HIPERCALÓRICOS</Link>
                </li>
                <li className="navbar-item2">
                    <Link to="/" className="botao">TERMOGÊNICOS</Link>
                </li>
                <li className="navbar-item2">
                    <Link to="/roupas" className="botao">ROUPAS</Link>
                </li>

            </ul>
        </div>
      
    );
}