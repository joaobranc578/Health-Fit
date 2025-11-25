import './Categorias.css'
import { Link } from "react-router-dom";

export default function Categorias() {
    return (
        <>

            <h2 className='titulo-categorias'>Compre por Categoria</h2>

            <div className='text-case'>
                <a href="#">WHEY PROTEIN</a>
                <a href="#" className='back'>CREATINA</a>
                <a href="#">PRÉ-TREINO</a>
            </div>

            <div className='produtos'></div>
            <ul className='produtos'>

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
                    <p>R$ 269,90</p>
                    <p>Até 6x de R$ 44,98</p>
                    <h3 className='corzinha'>R$ 261,80</h3>
                    <p>à vista no PIX</p>
                    <div className='espaçamento'></div>
                    <a href=""><div className='Ver'>
                    <h4>VER PRODUTO</h4>
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
                    <p>R̶$ 2̶5̶9̶,̶9̶0̶</p>
                    <p>R$ 179,90</p>
                    <p>Até 5x de R$ 35,90</p>
                    <h3 className='corzinha'>R$ 174,50</h3>
                    <p>à vista no PIX</p>
                    <div className='espacamento'></div>
                    <a href=""><div className='ver'>
                    <h4>VER PRODUTO</h4>
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
                    <h4>VER PRODUTO</h4>
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
                    <p>R̶$̶ ̶1̶1̶9̶,̶9̶0̶</p>
                    <p>R$ 83,46</p>
                    <p>Até 2x de R$ 41,73</p>
                    <h3 className='corzinha'>R$ 80,96</h3>
                    <p>à vista no PIX</p>
                    <div className='espacamento'></div>
                    <a href=""><div className='ver'>
                    <h4>VER PRODUTO</h4>
                    </div></a>
                 </li>
            </ul>

            <ul className="service-img">
            <li className='item-service-img'>
                <a href=""><img src="/img/Ramon.png" className='imgg' alt="item" /></a>
            </li>
            <li className='item-service-img'>
                <a href=""><img src="/img/promocao.png" className='imgg' alt="item" /></a>
            </li>
            <li className='item-service-img'>
                <a href=""><img src="/img/proteico.png" className='imgg' alt="item" /></a>
            </li>
        </ul>

        

        <h2 className='titulo-categorias'>Benefícios da creatina</h2>

        <div className='Beneficios-content'>
            <img src="/img/Beneficios.png" alt="" className='img-beneficios' />

         <ul className='produtos'>

                <li className='creatine500g'>
                    <img src="/img/creatina.png"  className='img-creatina' alt="" />
                    <h4>Creatina 500g</h4>
                    <div className='ajustar'>
                    <ion-icon name="star-outline" className="star"></ion-icon>
                    <ion-icon name="star-outline" className="star"></ion-icon>
                    <ion-icon name="star-outline" className="star"></ion-icon>
                    <ion-icon name="star-outline" className="star"></ion-icon>
                    <ion-icon name="star-outline" className="star"></ion-icon>
                    </div>
                    <p>R$ 129,90</p>
                    <p>Até 4x de R$ 32,47</p>
                    <h3 className='corzinha'>R$ 126,00</h3>
                    <p>à vista no PIX</p>
                    <div className='espaçamento'></div>
                    <a href=""><div className='Ver'>
                    <h4>VER PRODUTO</h4>
                    </div></a>
                </li>

                <li className='creatine500g'>
                    <img src="/img/Kits.png"  className='img-creatina' alt="" />
                    <h4>Kit Creatina 300g Brinde</h4>
                    <div className='ajustar'>
                    <ion-icon name="star-outline" className="star"></ion-icon>
                    <ion-icon name="star-outline" className="star"></ion-icon>
                    <ion-icon name="star-outline" className="star"></ion-icon>
                    <ion-icon name="star-outline" className="star"></ion-icon>
                    <ion-icon name="star-outline" className="star"></ion-icon>
                    </div>
                    <p>R̶$̶ 1̶1̶0̶,̶0̶0̶</p>
                    <p>R$ 76,93</p>
                    <p>Até 2x de R$ 38,46</p>
                    <h3 className='corzinha'>R$ 74,62</h3>
                    <p>à vista no PIX</p>
                    <div className='espacamento'></div>
                    <a href=""><div className='ver'>
                    <h4>VER PRODUTO</h4>
                    </div></a>
                </li>

                <li className='creatine500g'>
                    <img src="/img/creatine-120.png"  className='img-creatina' alt="" />
                    <h4>Creatine 120 Caps</h4>
                    <div className='ajustar'>
                    <ion-icon name="star-outline" className="star"></ion-icon>
                    <ion-icon name="star-outline" className="star"></ion-icon>
                    <ion-icon name="star-outline" className="star"></ion-icon>
                    <ion-icon name="star-outline" className="star"></ion-icon>
                    <ion-icon name="star-outline" className="star"></ion-icon>
                    </div>
                    <p>R̶$̶ ̶1̶6̶4̶,̶9̶0̶</p>
                    <p>R$ 69,90</p>
                    <p>Até 2x de R$ 34,95</p>
                    <h3 className='corzinha'>R$ 66,41</h3>
                    <p>à vista no PIX</p>
                    <div className='espacamento'></div>
                    <a href=""><div className='ver'>
                    <h4>VER PRODUTO</h4>
                    </div></a>
                 </li>
                 </ul>
        </div>

        <h2 className='titulo-categorias'>Benefícios do Whey Protein</h2>

        <div className='Beneficios-content'>
            <img src="/img/Beneficios-w.png" alt="" className='img-beneficios' />

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
                    <Link to="/whey-900g" className="botao">VER PRODUTO</Link>
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
                    <p>R̶$̶ ̶1̶1̶9̶,̶9̶0̶</p>
                    <p>R$ 83,46</p>
                    <p>Até 2x de R$ 41,73</p>
                    <h3 className='corzinha'>R$ 80,96</h3>
                    <p>à vista no PIX</p>
                    <div className='espacamento'></div>
                    <a href=""><div className='ver'>
                    <h4>VER PRODUTO</h4>
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
                    <h4>VER PRODUTO</h4>
                    </div></a>
                 </li>

                 </ul>
        </div>
        </>
    );
}