import React from "react";
import "./Barras.css";
import logo from "../../assets/logo-footer.png";
import { Link } from "react-router-dom";
import Topo from "../../Components/Topo";
import HeaderLinks from '../../Components/HeaderLinks';
import Footer from '../../Components/Footer';

function Barras() {
  return (
       <>
        
         <Topo />
        <HeaderLinks />

        <img src="/img/Banner-barras.png" alt=""  className="Banner-creatina"/>
      

         <div className='produtos'></div>
            <ul className='produtos'>

               <li className='creatine500g'>
                    <img src="/img/Barra-90g.png"  className='img-creatina' alt="" />
                    <h4>Power Protein Bar 90G</h4>
                    <div className='ajustar'>
                    <ion-icon name="star-outline" className="star"></ion-icon>
                    <ion-icon name="star-outline" className="star"></ion-icon>
                    <ion-icon name="star-outline" className="star"></ion-icon>
                    <ion-icon name="star-outline" className="star"></ion-icon>
                    <ion-icon name="star-outline" className="star"></ion-icon>
                    </div>
                    <p>R̶$ <s>154,90</s></p>
                    <p>R$ 123,41</p>
                    <p>até 4x de R$ 30,85</p>
                    <h3 className='corzinha'>R$ 117,24</h3>
                    <p>à vista no PIX</p>
                    <div className='espacamento'></div>
                    <a href=""><div className='ver'>
                    <h4>COMPRAR</h4>
                    </div></a>
                 </li>

               <li className='creatine500g'>
                    <img src="/img/Barra-41g.png"  className='img-creatina' alt="" />
                    <h4>Power Protein Bar 41G</h4>
                    <div className='ajustar'>
                    <ion-icon name="star-outline" className="star"></ion-icon>
                    <ion-icon name="star-outline" className="star"></ion-icon>
                    <ion-icon name="star-outline" className="star"></ion-icon>
                    <ion-icon name="star-outline" className="star"></ion-icon>
                    <ion-icon name="star-outline" className="star"></ion-icon>
                    </div>
                    <p>R$ 90,40</p>
                    <p>até 3x de R$ 30,13</p>
                    <h3 className='corzinha'>R$ 87,69</h3>
                    <p>à vista no PIX</p>
                    <div className='espacamento'></div>
                    <a href=""><div className='ver'>
                    <h4>COMPRAR</h4>
                    </div></a>
                 </li>

                <li className='creatine500g'>
                    <img src="/img/Top-whey-bar-41g.png"  className='img-creatina' alt="" />
                    <h4>Top Whey Bar 41g</h4>
                    <div className='ajustar'>
                    <ion-icon name="star-outline" className="star"></ion-icon>
                    <ion-icon name="star-outline" className="star"></ion-icon>
                    <ion-icon name="star-outline" className="star"></ion-icon>
                    <ion-icon name="star-outline" className="star"></ion-icon>
                    <ion-icon name="star-outline" className="star"></ion-icon>
                    </div>
                    <p>R$ <s>R$ 89,90</s></p>
                    <p>R$ 78,80</p>
                    <p>até 2x de R$ 39,40</p>
                    <h3 className='corzinha'>R$ 76,44</h3>
                    <p>à vista no PIX</p>
                    <div className='espacamento'></div>
                    <a href=""><div className='ver'>
                    <h4>COMPRAR</h4>
                    </div></a>
                 </li>

                 <li className='creatine500g'>
                    <img src="/img/protein-grisp.png"  className='img-creatina' alt="" />
                    <h4>Power Protein Crisp</h4>
                    <div className='ajustar'>
                    <ion-icon name="star-outline" className="star"></ion-icon>
                    <ion-icon name="star-outline" className="star"></ion-icon>
                    <ion-icon name="star-outline" className="star"></ion-icon>
                    <ion-icon name="star-outline" className="star"></ion-icon>
                    <ion-icon name="star-outline" className="star"></ion-icon>
                    </div>
                    <p>R$ <s>96,92</s></p>
                    <p>R$ 86,24</p>
                    <p>até 2x de R$ 43,12</p>
                    <h3 className='corzinha'>R$ 81,93</h3>
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

export default Barras;