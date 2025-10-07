import './HeaderLinks.css'
import { Link } from "react-router-dom";

export default function HeaderLinks() {
    return (
        
        <div className="container">
            <ul className="navbar-list2">
                <li className="navbar-item2">
                    <a href="#" className="botao">MENU</a>
                </li>
                <li className="navbar-item2">
                    <Link to="/creatina" className="botao">CREATINA </Link>
                </li>
                <li className="navbar-item2">
                    <Link to="/whey-protein" className="botao">
                    <a href="#" className="botao">WHEY PROTEIN</a>
                    </Link>
                </li>
                <li className="navbar-item2">
                    <Link to="/pre-treino" className="botao">
                    <a href="#" className="botao">PRÉ-TREINO</a>
                    </Link>
                </li>
                <li className="navbar-item2">
                    <a href="#" className="botao">BARRAS PROTEICAS</a>
                </li>
                 <li className="navbar-item2">
                    <a href="#" className="botao">KITS PROMOCIONAIS</a>
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