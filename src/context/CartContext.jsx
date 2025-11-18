import React, { createContext, useContext, useState } from 'react';

const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState([]);

  const addToCart = (product, quantity = 1) => {
  console.log('=== ADD TO CART INICIADO ===');
  console.log('Parâmetro product:', product);
  console.log('Parâmetro quantity:', quantity);
  console.log('Tipo do product:', typeof product);
  
  // Se for um evento, para aqui
  if (product && typeof product === 'object' && product.nativeEvent) {
    console.error('❌ ERRO: Evento do DOM recebido como produto');
    console.error('Evento:', product);
    return;
  }
  
  // Se for um evento React, para aqui  
  if (product && typeof product === 'object' && product._reactName) {
    console.error('❌ ERRO: Evento React recebido como produto');
    console.error('Evento React:', product);
    return;
  }

  // Agora sim processa o produto
  const safeProduct = {
    id: product?.id || 'unknown-id',
    name: product?.name || 'Produto sem nome',
    price: Number(product?.price) || 0,
    image: product?.image || '/img/placeholder.png',
    quantity: Number(quantity) || 1
  };

  console.log('✅ Produto processado:', safeProduct);

  setCartItems(prevItems => {
    const existingItem = prevItems.find(item => item.id === safeProduct.id);
    
    if (existingItem) {
      const newItems = prevItems.map(item =>
        item.id === safeProduct.id
          ? { ...item, quantity: item.quantity + safeProduct.quantity }
          : item
      );
      console.log('🔄 Carrinho atualizado (item existente):', newItems);
      return newItems;
    }
    
    const newItems = [...prevItems, safeProduct];
    console.log('🆕 Carrinho atualizado (novo item):', newItems);
    return newItems;
  });
  
  console.log('=== ADD TO CART FINALIZADO ===');
};
  const removeFromCart = (productId) => {
    setCartItems(prevItems => prevItems.filter(item => item.id !== productId));
  };

  const updateQuantity = (productId, quantity) => {
    if (quantity <= 0) {
      removeFromCart(productId);
      return;
    }
    
    setCartItems(prevItems =>
      prevItems.map(item =>
        item.id === productId ? { ...item, quantity } : item
      )
    );
  };

  const getCartItemsCount = () => {
    return cartItems.reduce((total, item) => total + item.quantity, 0);
  };

  const getCartTotal = () => {
    return cartItems.reduce((total, item) => total + (item.price * item.quantity), 0);
  };

  const clearCart = () => {
    setCartItems([]);
  };

  return (
    <CartContext.Provider value={{
      cartItems,
      addToCart,
      removeFromCart,
      updateQuantity,
      clearCart,
      getCartTotal,
      getCartItemsCount
    }}>
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => {
  const context = useContext(CartContext);
  if (!context) {
    throw new Error('useCart must be used within a CartProvider');
  }
  return context;
};