import React from "react";
import "./Creatina.css";
import logo from "../../assets/logo-footer.png";
import { Link } from "react-router-dom";

function Creatina() {
  return (
       <>
        

       <header>
         <div className="container">
        <Link to="/home" className="logo">
          <img src="/img/Logo.png" alt="Logo" />
        </Link>

        <nav className="navbar">
          <input type="text" className="Pesquise" placeholder="Oque está buscando?"/>
        </nav>

        <ul className="navbar-list">
              <li className="navbar-item">
                <ion-icon name="person-circle-outline" className="icon-user"></ion-icon>
                   <Link to="/login" className="btn">Login </Link>
                </li>
                <li className="navbar-item">
                  <a href=""><ion-icon name="heart-outline" className="icon-hearth"></ion-icon></a>
                </li>
                <li className="navbar-item">
                    <a href=""><ion-icon name="bag-handle-outline" className="icon-bag"></ion-icon></a>
                </li>
                 <li className="navbar-item">
                    
                </li>
            </ul>
        </div>
        </header>


        <h2 className="name">CREATINA</h2>

         <div className='text-case'>
          <Link to="/Whey-protein" >
                <a href="#">WHEY PROTEIN</a>
          </Link>
                <a href="#" className="back">CREATINA</a>
                <Link to="/pre-treino">
                <a href="#">PRÉ-TREINO</a>
                </Link>
            </div>
        

         <div className='produtos'></div>
            <ul className='produtos'>

                <li className='creatine500g'>
                    <img src="/img/creatina-300g2.png"  className='img-creatina' alt="" />
                    <h4>Creatina 300g</h4>
                    <div className='ajustar'>
                    <ion-icon name="star-outline" className="star"></ion-icon>
                    <ion-icon name="star-outline" className="star"></ion-icon>
                    <ion-icon name="star-outline" className="star"></ion-icon>
                    <ion-icon name="star-outline" className="star"></ion-icon>
                    <ion-icon name="star-outline" className="star"></ion-icon>
                    </div>
                    <p>R$ 120,90</p>
                    <p>Até 4x de R$ 30,00</p>
                    <h3 className='corzinha'>R$ 110,00</h3>
                    <p>à vista no PIX</p>
                    <a href=""><div className='Ver'>
                    <h4>COMPRAR</h4>
                    </div></a>
                </li>

                <li className='creatine500g'>
                    <img src="/img/creatina-200g.png"  className='img-creatina' alt="" />
                    <h4>Creatina 200g</h4>
                    <div className='ajustar'>
                    <ion-icon name="star-outline" className="star"></ion-icon>
                    <ion-icon name="star-outline" className="star"></ion-icon>
                    <ion-icon name="star-outline" className="star"></ion-icon>
                    <ion-icon name="star-outline" className="star"></ion-icon>
                    <ion-icon name="star-outline" className="star"></ion-icon>
                    </div>
                    <p>R$ 320,90</p>
                    <p>Até 4x de R$ 80,00</p>
                    <h3 className='corzinha'>R$ 310,00</h3>
                    <p>à vista no PIX</p>
                    <div className='espacamento'></div>
                    <a href=""><div className='ver'>
                    <h4>COMPRAR</h4>
                    </div></a>
                </li>

                <li className='creatine500g'>
                    <img src="/img/creatina-300g-ver.png"  className='img-creatina' alt="" />
                    <h4>Creatina 300g</h4>
                    <div className='ajustar'>
                    <ion-icon name="star-outline" className="star"></ion-icon>
                    <ion-icon name="star-outline" className="star"></ion-icon>
                    <ion-icon name="star-outline" className="star"></ion-icon>
                    <ion-icon name="star-outline" className="star"></ion-icon>
                    <ion-icon name="star-outline" className="star"></ion-icon>
                    </div>
                    <p>R$ 175,90</p>
                    <p>Até 4x de R$ 43,97</p>
                    <h3 className='corzinha'>R$ 160,00</h3>
                    <p>à vista no PIX</p>
                    <div className='espacamento'></div>
                    <a href=""><div className='ver'>
                    <h4>COMPRAR</h4>
                    </div></a>
                 </li>

                 <li className='creatine500g'>
                    <img src="/img/creatina-300g-cin.png"  className='img-creatina' alt="" />
                    <h4>Whey Pro 1Kg</h4>
                    <div className='ajustar'>
                    <ion-icon name="star-outline" className="star"></ion-icon>
                    <ion-icon name="star-outline" className="star"></ion-icon>
                    <ion-icon name="star-outline" className="star"></ion-icon>
                    <ion-icon name="star-outline" className="star"></ion-icon>
                    <ion-icon name="star-outline" className="star"></ion-icon>
                    </div>
                    <p>R$ 300,90</p>
                    <p>Até 4x de R$ 75,00</p>
                    <h3 className='corzinha'>R$ 290,00</h3>
                    <p>à vista no PIX</p>
                    <div className='espacamento'></div>
                    <a href=""><div className='ver'>
                    <h4>COMPRAR</h4>
                    </div></a>
                 </li>
            </ul>


        </>
      

        
     );
}

export default Creatina;