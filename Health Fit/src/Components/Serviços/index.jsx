import './Serviços.css'

export default function Serviços() {
    return (
        <>
          <div className="container-serv">
        <ul className="navbar-service">
            <li className="navbar-item-serv">
               <ion-icon name="bus-outline" className="icon-service"></ion-icon>
                FRETE GRATÍS EM TODO PAÍS
            </li>
            <li className="navbar-item-serv">
                <ion-icon name="checkmark-circle-outline" className="icon-service"></ion-icon>
                GARANTIA DE ORIGINALIDADE
            </li>
            <li className="navbar-item-serv">
                <ion-icon name="card-outline" className="icon-service"></ion-icon>
                1X NO CARTÃO COM ATÉ 5% OFF
            </li>
            <li className="navbar-item-serv">
                <ion-icon name="cash-outline" className="icon-service"></ion-icon>
                PIX E BOLETO COM ATÉ 5% OFF
            </li>
        </ul>

       
        
        <ul className="service-img">
            <li className='item-service-img'>
                <a href=""><img src="/img/frame-whey.png" className='imgg' alt="item" /></a>
            </li>
            <li className='item-service-img'>
                <a href=""><img src="/img/frame-pré.png" className='imgg' alt="item" /></a>
            </li>
            <li className='item-service-img'>
                <a href=""><img src="/img/frame-creatina.png" className='imgg' alt="item" /></a>
            </li>
        </ul>

        </div>
            <div className='Espaço'></div>
        <h2 className='text'>Produtos mais vendidos</h2>
            

            <div className='produtos'></div>
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
                    <img src="/img/creatina300g.png"  className='img-creatina' alt="" />
                    <h4>Creatina 300g</h4>
                    <div className='ajustar'>
                    <ion-icon name="star-outline" className="star"></ion-icon>
                    <ion-icon name="star-outline" className="star"></ion-icon>
                    <ion-icon name="star-outline" className="star"></ion-icon>
                    <ion-icon name="star-outline" className="star"></ion-icon>
                    <ion-icon name="star-outline" className="star"></ion-icon>
                    </div>
                    <p>R̶$̶ ̶9̶4̶,̶9̶0̶</p>
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
            <div className='Espaço'></div>
            <div className='button-mais'> 
            <a href=""><h3>VER MAIS</h3></a>
            </div>
            <div className='Espaço'></div>

            <h2 className='text'>Compre por categoria</h2>

            <ul className='categorias'>
                <li className='item-categoria'>
                    <a href=""><img src="/img/creatine.png" alt="" /></a>
                    <h4>Creatina</h4>
                </li>
                <li className='item-categoria'>
                    <a href=""><img src="/img/whey protein.png" alt="" /></a>
                    <h4>Whey Protein</h4>
                </li>
                <li className='item-categoria'>
                    <a href=""><img src="/img/termogenico.png" alt="" /></a>
                    <h4>Termogênicos</h4>
                </li>
                <li className='item-categoria'>
                    <a href=""><img src="/img/pré-treino.png" alt="" /></a>
                    <h4>Pré-treinos</h4>
                </li>
                <li className='item-categoria'>
                    <a href=""><img src="/img/hipercalorico.png" alt="" /></a>
                    <h4>Hipercalóricos</h4>
                </li>
                <li className='item-categoria'>
                    <a href=""><img src="/img/barras caloricas.png" alt="" /></a>
                    <h4>Barras Proteicas</h4>
                </li>
            </ul>

            <div className='Espaço'></div>
            <div className='Espaço'></div>

            <div className='selfs-container'>

            <div className='selfs'>
                <img src="/img/Melhora-da-autoestima.png" alt="" />
            </div>

            <div className='selfs'>
                <img src="/img/definição-muscular.png" alt="" />
            </div>

            </div>

            <div className='selfs-container2'>


            <div className='selfs'>
                <img src="/img/Emagrecimento.png" alt="" />
            </div>

            <div className='selfs'>
                <img src="/img/Ganho.png" alt="" />
            </div>

            </div>

            <div className='seção'>
                <img src="/img/seção.png" alt="" />
            </div>
      </>
    );
}