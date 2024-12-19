import React, { createContext, useContext, useState } from 'react';

// Create the context object
const EcommerceContext = createContext();

// Create the provider component
const EcommerceProvider = ({ children }) => {
  // Your state and functions go here
  const [cart, setCart] = useState([]);

  const addToCart = (productDetails) => {
    setCart([...cart, { ...productDetails, quantity: 1 }]);
  };
  const updateCartItemQuantity = (productId, updateQuantity) => {
    const updatedCart = cart.map((item) => {
      if (item.id === productId) {
        // Update the quantity of the specific product
        return { ...item, quantity: item.quantity + updateQuantity };
      }
      return item;
    });
  
    setCart(updatedCart);
  };
  const removeFromCart = (productId) => {
    const updatedCart = cart.filter((product) => product.id !== productId);
    setCart(updatedCart);
  };

  // Provide the context value
  const contextValue = {
    cart,
    addToCart,
    removeFromCart,
    updateCartItemQuantity,
  };

  // Provide the context value to the descendants
  return <EcommerceContext.Provider value={contextValue}>{children}</EcommerceContext.Provider>;
};

// Create a custom hook for using the context
const useEcommerceContext = () => {
  const context = useContext(EcommerceContext);
  if (!context) {
    throw new Error('useEcommerceContext must be used within an EcommerceProvider');
  }
  return context;
};

export { EcommerceProvider, useEcommerceContext };
