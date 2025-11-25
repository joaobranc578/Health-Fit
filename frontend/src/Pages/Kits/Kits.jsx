import React from "react";
import "./Kits.css";
import logo from "../../assets/logo-footer.png";
import { Link } from "react-router-dom";
import Topo from "../../Components/Topo";
import HeaderLinks from '../../Components/HeaderLinks';
import Footer from '../../Components/Footer';

function Kits() {
  return (
       <>
        
         <Topo />
        <HeaderLinks />

        <div className="banner-container">
          <img src="/img/Banner-Kits.webp" alt="Banner Kits" className="Banner-kits" />
        </div>

         <div className='produtos'></div>
            <ul className='produtos'>

               <li className='creatine500g'>
                    <img src="/img/Kits.png"  className='img-creatina' alt="" />
                    <h4>Kit Creatina 300g e Coqueteleira Incolor Brinde</h4>
                    <div className='ajustar'>
                    <ion-icon name="star-outline" className="star"></ion-icon>
                    <ion-icon name="star-outline" className="star"></ion-icon>
                    <ion-icon name="star-outline" className="star"></ion-icon>
                    <ion-icon name="star-outline" className="star"></ion-icon>
                    <ion-icon name="star-outline" className="star"></ion-icon>
                    </div>
                    <p>R̶$ <s>110,90</s></p>
                    <p>R$ 76,93</p>
                    <p>Até 2x de R$ 38,46</p>
                    <h3 className='corzinha'>R$ 74,62</h3>
                    <p>à vista no PIX</p>
                    <div className='espacamento'></div>
                    <a href=""><div className='ver'>
                   <Link to="/kit-creatina-coqueteleira" className="botao">COMPRAR</Link>
                    </div></a>
                 </li>

               <li className='creatine500g'>
                    <img src="/img/Kit-creatina300g.png"  className='img-creatina' alt="" />
                    <h4>Kit Creatina 300g + Whey Pro 1Kg</h4>
                    <div className='ajustar'>
                    <ion-icon name="star-outline" className="star"></ion-icon>
                    <ion-icon name="star-outline" className="star"></ion-icon>
                    <ion-icon name="star-outline" className="star"></ion-icon>
                    <ion-icon name="star-outline" className="star"></ion-icon>
                    <ion-icon name="star-outline" className="star"></ion-icon>
                    </div>
                    <p>R$ 169,70</p>
                    <p>até 5x de R$ 33,94</p>
                    <h3 className='corzinha'>R$ 164,61</h3>
                    <p>à vista no PIX</p>
                    <div className='espacamento'></div>
                    <a href=""><div className='ver'>
                    <h4>COMPRAR</h4>
                    </div></a>
                 </li>

                <li className='creatine500g'>
                    <img src="/img/kit-whey-peanut.png"  className='img-creatina' alt="" />
                    <h4>Kit 100% Whey Dr. Peanut + Creatina 100g</h4>
                    <div className='ajustar'>
                    <ion-icon name="star-outline" className="star"></ion-icon>
                    <ion-icon name="star-outline" className="star"></ion-icon>
                    <ion-icon name="star-outline" className="star"></ion-icon>
                    <ion-icon name="star-outline" className="star"></ion-icon>
                    <ion-icon name="star-outline" className="star"></ion-icon>
                    </div>
                    <p>R$ 197,60</p>
                    <p>até 6x de R$ 32,93</p>
                    <h3 className='corzinha'>R$ 191,67</h3>
                    <p>à vista no PIX</p>
                    <div className='espacamento'></div>
                    <a href=""><div className='ver'>
                    <h4>COMPRAR</h4>
                    </div></a>
                 </li>

                 <li className='creatine500g'>
                    <img src="/img/kit-pro-imunidade.png"  className='img-creatina' alt="" />
                    <h4>Kit Pro Imunidade - Glutamina 300g + Multi Max 90 cápsulas</h4>
                    <div className='ajustar'>
                    <ion-icon name="star-outline" className="star"></ion-icon>
                    <ion-icon name="star-outline" className="star"></ion-icon>
                    <ion-icon name="star-outline" className="star"></ion-icon>
                    <ion-icon name="star-outline" className="star"></ion-icon>
                    <ion-icon name="star-outline" className="star"></ion-icon>
                    </div>
                    <p>R$ <s>R$ 188,00</s></p>
                    <p>R$ 142,70</p>
                    <p>até 4x de R$ 35,67</p>
                    <h3 className='corzinha'>R$ 138,42</h3>
                    <p>à vista no PIX</p>
                    <div className='espacamento'></div>
                    <a href=""><div className='ver'>
                    <h4>COMPRAR</h4>
                    </div></a>
                 </li>
            </ul>

             <ul className='produtos'>

                <li className='creatine500g'>
                    <img src="/img/kit-creatina-feminino.png"  className='img-creatina' alt="" />
                    <h4>Kit Creatina 300g + Femini Whey 900g</h4>
                    <div className='ajustar'>
                    <ion-icon name="star-outline" className="star"></ion-icon>
                    <ion-icon name="star-outline" className="star"></ion-icon>
                    <ion-icon name="star-outline" className="star"></ion-icon>
                    <ion-icon name="star-outline" className="star"></ion-icon>
                    <ion-icon name="star-outline" className="star"></ion-icon>
                    </div>
                    <p>R$ 211,80</p>
                    <p>até 6x de R$ 35,30</p>
                    <h3 className='corzinha'>R$ 205,45</h3>
                    <p>à vista no PIX</p>
                    <a href=""><div className='Ver'>
                    <h4>COMPRAR</h4>
                    </div></a>
                </li>

                <li className='creatine500g'>
                    <img src="/img/kit-imunidade.png"  className='img-creatina' alt="" />
                    <h4>Kit Imunidade e Saúde Omega 3 90 caps + MultiMax 90 caps</h4>
                    <div className='ajustar'>
                    <ion-icon name="star-outline" className="star"></ion-icon>
                    <ion-icon name="star-outline" className="star"></ion-icon>
                    <ion-icon name="star-outline" className="star"></ion-icon>
                    <ion-icon name="star-outline" className="star"></ion-icon>
                    <ion-icon name="star-outline" className="star"></ion-icon>
                    </div>
                    <p>R$ 110,30</p>
                    <p>até 3x de R$ 36,76</p>
                    <h3 className='corzinha'>R$ 106,99</h3>
                    <p>à vista no PIX</p>
                    <div className='espacamento'></div>
                    <a href=""><div className='ver'>
                    <h4>COMPRAR</h4>
                    </div></a>
                </li>

                <li className='creatine500g'>
                    <img src="/img/kit-termo.png"  className='img-creatina' alt="" />
                    <h4>Kit Termo Pack 2Hot 200g + Shot Thermo 60 capsulas</h4>
                    <div className='ajustar'>
                    <ion-icon name="star-outline" className="star"></ion-icon>
                    <ion-icon name="star-outline" className="star"></ion-icon>
                    <ion-icon name="star-outline" className="star"></ion-icon>
                    <ion-icon name="star-outline" className="star"></ion-icon>
                    <ion-icon name="star-outline" className="star"></ion-icon>
                    </div>
                    <p>R$ 168,23</p>
                    <p>até 5x de R$ 33,64</p>
                    <h3 className='corzinha'>R$ 163,18</h3>
                    <p>à vista no PIX</p>
                    <div className='espacamento'></div>
                    <a href=""><div className='ver'>
                    <h4>COMPRAR</h4>
                    </div></a>
                 </li>

                 <li className='creatine500g'>
                    <img src="/img/Pack-3Creatina.png"  className='img-creatina' alt="" />
                    <h4>Pack 3 Creatinas 300g</h4>
                    <div className='ajustar'>
                    <ion-icon name="star-outline" className="star"></ion-icon>
                    <ion-icon name="star-outline" className="star"></ion-icon>
                    <ion-icon name="star-outline" className="star"></ion-icon>
                    <ion-icon name="star-outline" className="star"></ion-icon>
                    <ion-icon name="star-outline" className="star"></ion-icon>
                    </div>
                    <p>R$ 225,30</p>
                    <p>Até 6x de R$ 37,55</p>
                    <h3 className='corzinha'>R$ 218,54</h3>
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

export default Kits;