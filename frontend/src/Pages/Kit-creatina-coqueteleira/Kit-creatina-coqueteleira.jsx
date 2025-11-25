import React, { useState } from "react";
import "./Kit-creatina-coqueteleira.css";
import { Link } from "react-router-dom";
import Topo from "../../Components/Topo";
import HeaderLinks from '../../Components/HeaderLinks';
import Footer from '../../Components/Footer';
import { useCart } from "../../context/CartContext";
import Toast from "../../components/Toast/Toast";

function KitCreatinaCoqueteleira() {
  const [qty, setQty] = useState(1);
  const [showToast, setShowToast] = useState(false);
  const [toastMessage, setToastMessage] = useState("");
  const { addToCart } = useCart();

  function increment() { setQty(q => q + 1); }
  function decrement() { setQty(q => Math.max(1, q - 1)); }

  const handleAddToCart = () => {
    const product = {
      id: "kit-creatina-coqueteleira",
      name: "Kit Creatina 300g e Coqueteleira Incolor Brinde",
      price: 74.62,
      image: "/img/Kits.png"
    };

    addToCart(product, qty);
    
    // Mostra o toast em vez do alert
    setToastMessage(`🎉 ${qty} ${qty > 1 ? 'unidades' : 'unidade'} adicionada${qty > 1 ? 's' : ''} ao carrinho!`);
    setShowToast(true);
    
    // Auto-esconde depois de 3 segundos
    setTimeout(() => {
      setShowToast(false);
    }, 3000);

    setQty(1);
  };

  return (
    <>
      <Topo />
      <HeaderLinks />

      {/* Toast Component */}
      <Toast 
        message={toastMessage}
        show={showToast}
        onClose={() => setShowToast(false)}
      />

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
              <img src="/img/Kits.png" alt="Kit Creatina 300g e Coqueteleira Incolor Brinde" />
            </div>
            <div className="thumbs">
              <img src="/img/Kits.png" alt="thumb1" />
              <img src="/img/TN-Whey-Pro-1kg-Choco.png" alt="thumb2" />
            </div>
          </div>

          <div className="related-title">Quem comprou, comprou também:</div>
          <div className="related-grid">
            <article className="related-card">
              <img src="/img/creatina300g.png" alt="" />
              <small>Creatina 300g</small>
              <div className="price">R$ 75,10</div>
              <Link to="/creatina-300g" className="btn-compact">COMPRAR</Link>
            </article>
            <article className="related-card">
              <img src="/img/Barra-90g.png" alt="" />
              <small>Power Protein Bar 90G</small>
              <div className="price">R$ 117,24</div>
              <Link to="/protein-bar-90g" className="btn-compact">COMPRAR</Link>
            </article>
            <article className="related-card">
              <img src="/img/Pré-treino300g-ama.png" alt="" />
              <small>Pré treino 300g</small>
              <div className="price">R$ 310,00</div>
              <Link to="/pre-treino-300g" className="btn-compact">COMPRAR</Link>
            </article>
            <article className="related-card">
              <img src="/img/whey900g.png" alt="" />
              <small>100% Whey Refil 900g</small>
              <div className="price">R$ 134,73</div>
              <Link to="/whey-900g" className="btn-compact">COMPRAR</Link>
            </article>
          </div>
        </section>

        <aside className="right-buy">
          <div className="buy-card">
            <div className="tag">-3% OFF</div>
            <h2>Kit Creatina 300g e Coqueteleira Incolor Brinde</h2>
            <div className="rating">★★★★☆</div>

            <div>R$ <s>110,90</s></div>
            <div className="price-big">R$ <strong>74,62</strong></div>
            <div className="parcel">Até 2x de R$ 38,46</div>

            <div className="qty-row">
              <label>Quantidade</label>
              <div className="qty-controls">
                <button onClick={decrement}>-</button>
                <input type="text" readOnly value={qty} />
                <button onClick={increment}>+</button>
              </div>
            </div>

            <button className="add-cart" onClick={handleAddToCart}>
              ADICIONAR AO CARRINHO
            </button>

            <div className="frete">
              <label>Calcular o frete</label>
              <div className="frete-row">
                <input placeholder="00000-000" />
                <button className="calc">Calcular</button>
              </div>
              <small className="frete-policy">Política de Frete Grátis</small>
            </div>

            <div className="payment-badges">
              
            </div>
          </div>
        </aside>
      </main>

      <div className="comments-section">
        <h2>Comentários</h2>
        <CommentForm productId="whey900g" />
      </div>
      <CommentsList productId="whey900g" />

      <Footer />
    </>
  );
}

export default KitCreatinaCoqueteleira;