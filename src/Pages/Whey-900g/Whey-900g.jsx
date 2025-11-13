import React, { useState } from "react";
import "./Whey-900g.css";
import { Link } from "react-router-dom";
import Topo from "../../Components/Topo";
import HeaderLinks from '../../Components/HeaderLinks';
import Footer from '../../Components/Footer';

function Whey900g() {
  const [qty, setQty] = useState(1);

  function increment() { setQty(q => q + 1); }
  function decrement() { setQty(q => Math.max(1, q - 1)); }
  function addToCart() {
    // placeholder - integrar com contexto/serviço de carrinho
    alert(`Adicionado ${qty} ao carrinho`);
  }

  return (
    <>
      <Topo />
      <HeaderLinks />

      <div className="promo-bar">
        🎁 Ganhe uma creatina. Compras a partir de R$ 300 levam uma creatina 200g de brinde 🎁
      </div>

      <main className="product-page container2">
        <aside className="left-features">
          <ul className="features-list">
            <li><img src="/img/protein-icon.png" alt="ícone" /> <span>15g de Proteína por doses</span></li>
            <li><img src="/img/Melhor.png" alt="ícone" /> <span>Melhor sabor do mercado</span></li>
            <li><img src="/img/CustoB.png" alt="ícone" /> <span>Melhor custo-benefício</span></li>
            <li><img src="/img/Amino.png" alt="ícone" /> <span>Fonte de aminoácidos essenciais</span></li>
            <li><img src="/img/Proteina.png" alt="ícone" /> <span>As proteínas auxiliam na formação dos músculos e ossos</span></li>
            <li><img src="/img/Teor.png" alt="ícone" /> <span>Alto teor de proteínas</span></li>
          </ul>
        </aside>

        <section className="center-gallery">
          <div className="gallery">
            <div className="main-image">
              <img src="/img/whey900g.png" alt="Whey 900g" />
            </div>
            <div className="thumbs">
              <img src="/img/whey900g.png" alt="thumb1" />
              <img src="/img/whey900g-2.png" alt="thumb2" />
              <img src="/img/whey900g-3.png" alt="thumb3" />
            </div>
          </div>

          <div className="related-title">Quem comprou, comprou também:</div>
          <div className="related-grid">
            <article className="related-card">
              <img src="/img/related1.png" alt="" />
              <small>100% Whey Refil 900g</small>
              <div className="price">R$ 134,73</div>
              <button className="btn-compact">COMPRAR</button>
            </article>
            <article className="related-card">
              <img src="/img/related2.png" alt="" />
              <small>Pack 2x Whey Pro 1Kg</small>
              <div className="price">R$ 183,52</div>
              <button className="btn-compact">COMPRAR</button>
            </article>
            <article className="related-card">
              <img src="/img/related3.png" alt="" />
              <small>Pack 2x Whey Pro 1Kg</small>
              <div className="price">R$ 183,52</div>
              <button className="btn-compact">COMPRAR</button>
            </article>
            <article className="related-card">
              <img src="/img/related4.png" alt="" />
              <small>100% Whey Refil 900g</small>
              <div className="price">R$ 134,73</div>
              <button className="btn-compact">COMPRAR</button>
            </article>
          </div>
        </section>

        <aside className="right-buy">
          <div className="buy-card">
            <div className="tag">-3% OFF</div>
            <h2>100% Whey Refil 900G</h2>
            <div className="rating">★★★★☆</div>

            <div>R$ <s>1̶8̶4̶,̶9̶0̶</s></div>
            <div className="price-big">R$ <strong>129,90</strong></div>
            <div className="parcel">Até 4x de R$ 32,47</div>

            <div className="qty-row">
              <label>Quantidade</label>
              <div className="qty-controls">
                <button onClick={decrement}>-</button>
                <input type="text" readOnly value={qty} />
                <button onClick={increment}>+</button>
              </div>
            </div>

            <button className="add-cart" onClick={addToCart}>ADICIONAR AO CARRINHO</button>

            <div className="frete">
              <label>Calcular o frete</label>
              <div className="frete-row">
                <input placeholder="00000-000" />
                <button className="calc">Calcular</button>
              </div>
              <small className="frete-policy">Política de Frete Grátis</small>
            </div>

            <div className="payment-badges">
              <img src="/img/badge1.png" alt="badge" />
              <img src="/img/badge2.png" alt="badge" />
              <img src="/img/badge3.png" alt="badge" />
            </div>
          </div>
        </aside>
      </main>

      <Footer />
    </>
  );
}

export default Whey900g;