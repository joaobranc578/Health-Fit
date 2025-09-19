import './Topo.css'

export default function Topo() {
    return (
        
        <header>
         <div className="container">
        <a href="#" className="logo">
          <img src="/img/Logo.png" alt="Logo" />
        </a>

        <nav className="navbar">
          <input type="text" className="Pesquise" placeholder="Oque está buscando?"/>
        </nav>

        <ul className="navbar-list">
              <li className="navbar-item">
                <ion-icon name="person-circle-outline" className="icon-user"></ion-icon>
                  <a href="#" className="btn">Login</a>
                </li>
                <li className="navbar-item">
                  <ion-icon name="heart-outline" className="icon-hearth"></ion-icon>
                </li>
                <li className="navbar-item">
                    <ion-icon name="bag-handle-outline" className="icon-bag"></ion-icon>
                </li>
                 <li className="navbar-item">
                    
                </li>
            </ul>
        </div>
        </header>
      
    );
}