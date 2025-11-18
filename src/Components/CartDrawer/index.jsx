import React from "react";
import "./CartDrawer.css";
import { useCart } from "../../context/CartContext";

export default function CartDrawer({ open, onClose }) {
  const { cartItems, removeFromCart, updateQuantity, getCartTotal, getCartItemsCount } = useCart();

  console.log('CartDrawer - Itens no carrinho:', cartItems);
  console.log('CartDrawer - Total calculado:', getCartTotal());

  function handleIncrement(itemId) {
    const item = cartItems.find(item => item.id === itemId);
    if (item) {
      updateQuantity(itemId, item.quantity + 1);
    }
  }

  function handleDecrement(itemId) {
    const item = cartItems.find(item => item.id === itemId);
    if (item && item.quantity > 1) {
      updateQuantity(itemId, item.quantity - 1);
    } else {
      removeFromCart(itemId);
    }
  }

  function handleRemove(itemId) {
    removeFromCart(itemId);
  }

  // Se não estiver aberto, não renderiza nada
  if (!open) return null;

  return (
    <div className="cart-overlay open" onClick={onClose}>
      <aside className="cart-drawer" onClick={(e) => e.stopPropagation()}>
        <header className="cart-header">
          <h3>Meu Carrinho</h3> 
          <span className="bag-count">{getCartItemsCount()}</span>
          <button className="cart-close" onClick={onClose} aria-label="Fechar">
            ✕
          </button>
        </header>

        <div className="cart-body">
          {cartItems.length === 0 ? (
            <>
              <div className="cart-empty-illustration">
                <svg width="80" height="80" viewBox="0 0 24 24" fill="none">
                  <path d="M3 3h2l.4 2M7 13h10l3-8H6.4" stroke="#666" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                  <circle cx="10" cy="20" r="1.5" fill="#666"/>
                  <circle cx="18" cy="20" r="1.5" fill="#666"/>
                </svg>
              </div>
              <p className="cart-empty-text">Seu carrinho está vazio</p>
            </>
          ) : (
            <div className="cart-items">
              {cartItems.map(item => (
                <div key={item.id} className="cart-item">
                  <img src={item.image || "/img/whey900g.png"} alt={item.name} className="cart-item-image" />
                  <div className="cart-item-details">
                    <h4>{item.name || "Produto sem nome"}</h4>
                    <div className="cart-item-price">
                      R$ {item.price ? item.price.toFixed(2) : "0.00"}
                    </div>
                    <div className="cart-item-controls">
                      <button onClick={() => handleDecrement(item.id)}>-</button>
                      <span>{item.quantity || 1}</span>
                      <button onClick={() => handleIncrement(item.id)}>+</button>
                    </div>
                  </div>
                  <button 
                    className="cart-item-remove" 
                    onClick={() => handleRemove(item.id)}
                  >
                    ✕
                  </button>
                </div>
              ))}
              
              <div className="cart-total">
                <strong>Total: R$ {getCartTotal().toFixed(2)}</strong>
              </div>
            </div>
          )}
        </div>

        <footer className="cart-footer">
          {cartItems.length > 0 ? (
            <button className="cart-cta checkout-btn">
              FINALIZAR COMPRA
            </button>
          ) : (
            <button className="cart-cta" onClick={onClose}>
              Continuar comprando
            </button>
          )}
        </footer>
      </aside>
    </div>
  );
}