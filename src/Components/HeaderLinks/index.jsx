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
                    <a href="#" className="botao">HIPERCALÓRICOS</a>
                </li>
                <li className="navbar-item2">
                    <a href="#" className="botao">TERMOGÊNICOS</a>
                </li>
                <li className="navbar-item2">
                    <a href="#" className="botao">ROUPAS</a>
                </li>

            </ul>
        </div>
      
    );
}