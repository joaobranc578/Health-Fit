import React from "react";
import "./Hipercaloricos.css";
import logo from "../../assets/logo-footer.png";
import { Link } from "react-router-dom";
import Topo from "../../Components/Topo";
import HeaderLinks from '../../Components/HeaderLinks';
import Footer from '../../Components/Footer';

function Hipercaloricos() {
  return (
       <>
        
         <Topo />
        <HeaderLinks />
      

         <div className='produtos'></div>
            <ul className='produtos'>

               <li className='creatine500g'>
                    <img src="/img/mass-titanium.png"  className='img-creatina' alt="" />
                    <h4>Mass Titanium Refil 3Kg</h4>
                    <div className='ajustar'>
                    <ion-icon name="star-outline" className="star"></ion-icon>
                    <ion-icon name="star-outline" className="star"></ion-icon>
                    <ion-icon name="star-outline" className="star"></ion-icon>
                    <ion-icon name="star-outline" className="star"></ion-icon>
                    <ion-icon name="star-outline" className="star"></ion-icon>
                    </div>
                    <p>R̶$ <s>R$ 149,00</s></p>
                    <p>R$ 118,80</p>
                    <p>Até 3x de R$ 39,60</p>
                    <h3 className='corzinha'>R$ 115,24</h3>
                    <p>à vista no PIX</p>
                    <div className='espacamento'></div>
                    <a href=""><div className='ver'>
                     <Link to="/whey-900g" className="botao">COMPRAR</Link>
                    </div></a>
                 </li>

               <li className='creatine500g'>
                    <img src="/img/super-gainers.png"  className='img-creatina' alt="" />
                    <h4>Super Gainers Refil 3Kg</h4>
                    <div className='ajustar'>
                    <ion-icon name="star-outline" className="star"></ion-icon>
                    <ion-icon name="star-outline" className="star"></ion-icon>
                    <ion-icon name="star-outline" className="star"></ion-icon>
                    <ion-icon name="star-outline" className="star"></ion-icon>
                    <ion-icon name="star-outline" className="star"></ion-icon>
                    </div>
                    <p>R̶$ <s>159,00</s></p>
                    <p>R$ 129,00</p>
                    <p>Até 4x de R$ 32,25</p>
                    <h3 className='corzinha'>R$ 122,55</h3>
                    <p>à vista no PIX</p>
                    <div className='espacamento'></div>
                    <a href=""><div className='ver'>
                    <h4>COMPRAR</h4>
                    </div></a>
                 </li>

                <li className='creatine500g'>
                    <img src="/img/mass-titanium-1,4g.png"  className='img-creatina' alt="" />
                    <h4>Mass Titanium Refil 1,4Kg</h4>
                    <div className='ajustar'>
                    <ion-icon name="star-outline" className="star"></ion-icon>
                    <ion-icon name="star-outline" className="star"></ion-icon>
                    <ion-icon name="star-outline" className="star"></ion-icon>
                    <ion-icon name="star-outline" className="star"></ion-icon>
                    <ion-icon name="star-outline" className="star"></ion-icon>
                    </div>
                    <p>R$ <s>79,00</s></p>
                    <p>R$ 70,00</p>
                    <p>Até 2x de R$ 35,00</p>
                    <h3 className='corzinha'>R$ 67,90</h3>
                    <p>à vista no PIX</p>
                    <div className='espacamento'></div>
                    <a href=""><div className='ver'>
                    <h4>COMPRAR</h4>
                    </div></a>
                 </li>

                 <li className='creatine500g'>
                    <img src="/img/mass-titanium-zero.png"  className='img-creatina' alt="" />
                    <h4>Mass Titanium 17500 ZERO LACTOSE 2,4kg
</h4>
                    <div className='ajustar'>
                    <ion-icon name="star-outline" className="star"></ion-icon>
                    <ion-icon name="star-outline" className="star"></ion-icon>
                    <ion-icon name="star-outline" className="star"></ion-icon>
                    <ion-icon name="star-outline" className="star"></ion-icon>
                    <ion-icon name="star-outline" className="star"></ion-icon>
                    </div>
                    <p>R$ 135,80</p>
                    <p>Até 4x de R$ 33,95</p>
                    <h3 className='corzinha'>R$ 131,73</h3>
                    <p>à vista no PIX</p>
                    <div className='espacamento'></div>
                    <a href=""><div className='ver'>
                    <h4>COMPRAR</h4>
                    </div></a>
                 </li>
            </ul>

            
        <Footer />

        </>
      

        
     );
}

export default Hipercaloricos;