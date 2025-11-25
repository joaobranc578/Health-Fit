import React from "react";
import "./Whey-protein.css";
import logo from "../../assets/logo-footer.png";
import { Link } from "react-router-dom";
import Topo from "../../Components/Topo";
import HeaderLinks from '../../Components/HeaderLinks';
import Footer from '../../Components/Footer';

function WheyProtein() {
  return (
       <>
        
         <Topo />
        <HeaderLinks />
      

         <div className='produtos'></div>
            <ul className='produtos'>

               <li className='creatine500g'>
                    <img src="/img/whey900g.png"  className='img-creatina' alt="" />
                    <h4>100% Whey Refil 900G</h4>
                    <div className='ajustar'>
                    <ion-icon name="star-outline" className="star"></ion-icon>
                    <ion-icon name="star-outline" className="star"></ion-icon>
                    <ion-icon name="star-outline" className="star"></ion-icon>
                    <ion-icon name="star-outline" className="star"></ion-icon>
                    <ion-icon name="star-outline" className="star"></ion-icon>
                    </div>
                    <p>R̶$̶ ̶1̶8̶4̶,̶9̶0̶</p>
                    <p>R$ 129,90</p>
                    <p>Até 4x de R$ 32,47</p>
                    <h3 className='corzinha'>R$ 126,00</h3>
                    <p>à vista no PIX</p>
                    <div className='espacamento'></div>
                    <a href=""><div className='ver'>
                     <Link to="/whey-900g" className="botao">COMPRAR</Link>
                    </div></a>
                 </li>

               <li className='creatine500g'>
                    <img src="/img/whey900g.png"  className='img-creatina' alt="" />
                    <h4>Top Whey 3W + Performance 1,8Kg</h4>
                    <div className='ajustar'>
                    <ion-icon name="star-outline" className="star"></ion-icon>
                    <ion-icon name="star-outline" className="star"></ion-icon>
                    <ion-icon name="star-outline" className="star"></ion-icon>
                    <ion-icon name="star-outline" className="star"></ion-icon>
                    <ion-icon name="star-outline" className="star"></ion-icon>
                    </div>
                    <p>R̶$̶ ̶4̶6̶9̶,̶9̶0̶</p>
                    <p>R$ 325,90</p>
                    <p>Até 6x de R$ 54,31</p>
                    <h3 className='corzinha'>R$ 316,12</h3>
                    <p>à vista no PIX</p>
                    <div className='espacamento'></div>
                    <a href=""><div className='ver'>
                    <h4>COMPRAR</h4>
                    </div></a>
                 </li>

                <li className='creatine500g'>
                    <img src="/img/whey1kg.png"  className='img-creatina' alt="" />
                    <h4>Whey Pro 1Kg</h4>
                    <div className='ajustar'>
                    <ion-icon name="star-outline" className="star"></ion-icon>
                    <ion-icon name="star-outline" className="star"></ion-icon>
                    <ion-icon name="star-outline" className="star"></ion-icon>
                    <ion-icon name="star-outline" className="star"></ion-icon>
                    <ion-icon name="star-outline" className="star"></ion-icon>
                    </div>
                    <p>R$ <s>94,60</s></p>
                    <p>R$ 82,59</p>
                    <p>Até 2x de R$ 41,73</p>
                    <h3 className='corzinha'>R$ 80,96</h3>
                    <p>à vista no PIX</p>
                    <div className='espacamento'></div>
                    <a href=""><div className='ver'>
                    <h4>COMPRAR</h4>
                    </div></a>
                 </li>

                 <li className='creatine500g'>
                    <img src="/img/iso-clear-whey.png"  className='img-creatina' alt="" />
                    <h4>Iso Clear Whey Pote 405g</h4>
                    <div className='ajustar'>
                    <ion-icon name="star-outline" className="star"></ion-icon>
                    <ion-icon name="star-outline" className="star"></ion-icon>
                    <ion-icon name="star-outline" className="star"></ion-icon>
                    <ion-icon name="star-outline" className="star"></ion-icon>
                    <ion-icon name="star-outline" className="star"></ion-icon>
                    </div>
                    <p>R$ 220,00</p>
                    <p>Até 6x de R$ 36,81</p>
                    <h3 className='corzinha'>R$ 214,27</h3>
                    <p>à vista no PIX</p>
                    <div className='espacamento'></div>
                    <a href=""><div className='ver'>
                    <h4>COMPRAR</h4>
                    </div></a>
                 </li>
            </ul>

             <ul className='produtos'>

                <li className='creatine500g'>
                    <img src="/img/Pack-2x-Whey-Pro-1Kg.png"  className='img-creatina' alt="" />
                    <h4>Pack 2x Whey Pro 1Kg</h4>
                    <div className='ajustar'>
                    <ion-icon name="star-outline" className="star"></ion-icon>
                    <ion-icon name="star-outline" className="star"></ion-icon>
                    <ion-icon name="star-outline" className="star"></ion-icon>
                    <ion-icon name="star-outline" className="star"></ion-icon>
                    <ion-icon name="star-outline" className="star"></ion-icon>
                    </div>
                    <p>R$ 189,20</p>
                    <p>Até 6x de R$ 31,53</p>
                    <h3 className='corzinha'>R$ 183,52</h3>
                    <p>à vista no PIX</p>
                    <a href=""><div className='Ver'>
                    <h4>COMPRAR</h4>
                    </div></a>
                </li>

                <li className='creatine500g'>
                    <img src="/img/top-whey-3w.png"  className='img-creatina' alt="" />
                    <h4>Top Whey 3W + Performance 900G</h4>
                    <div className='ajustar'>
                    <ion-icon name="star-outline" className="star"></ion-icon>
                    <ion-icon name="star-outline" className="star"></ion-icon>
                    <ion-icon name="star-outline" className="star"></ion-icon>
                    <ion-icon name="star-outline" className="star"></ion-icon>
                    <ion-icon name="star-outline" className="star"></ion-icon>
                    </div>
                    <p>R$ <s>259,90</s></p>
                    <p>R$ 199,80</p>
                    <p>Até 6x de R$ 33,30</p>
                    <h3 className='corzinha'>R$ 193,81</h3>
                    <p>à vista no PIX</p>
                    <div className='espacamento'></div>
                    <a href=""><div className='ver'>
                    <h4>COMPRAR</h4>
                    </div></a>
                </li>

                <li className='creatine500g'>
                    <img src="/img/isolado.png"  className='img-creatina' alt="" />
                    <h4>Whey Protein Isolado Iso Whey 900g</h4>
                    <div className='ajustar'>
                    <ion-icon name="star-outline" className="star"></ion-icon>
                    <ion-icon name="star-outline" className="star"></ion-icon>
                    <ion-icon name="star-outline" className="star"></ion-icon>
                    <ion-icon name="star-outline" className="star"></ion-icon>
                    <ion-icon name="star-outline" className="star"></ion-icon>
                    </div>
                    <p>R$ 294,50</p>
                    <p>Até 6x de R$ 49,08</p>
                    <h3 className='corzinha'>R$ 285,67</h3>
                    <p>à vista no PIX</p>
                    <div className='espacamento'></div>
                    <a href=""><div className='ver'>
                    <h4>COMPRAR</h4>
                    </div></a>
                 </li>

                 <li className='creatine500g'>
                    <img src="/img/100%-Whey-Dr.peanut.png"  className='img-creatina' alt="" />
                    <h4>Whey Protein Dr. Peanut 100% Whey 900g</h4>
                    <div className='ajustar'>
                    <ion-icon name="star-outline" className="star"></ion-icon>
                    <ion-icon name="star-outline" className="star"></ion-icon>
                    <ion-icon name="star-outline" className="star"></ion-icon>
                    <ion-icon name="star-outline" className="star"></ion-icon>
                    <ion-icon name="star-outline" className="star"></ion-icon>
                    </div>
                    <p>R$ 157,70</p>
                    <p>Até 5x de R$ 31,54</p>
                    <h3 className='corzinha'>R$ 152,97</h3>
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

export default WheyProtein;