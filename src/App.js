import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import styled from "styled-components";
import { motion } from "framer-motion";

// Components
import Header from "./components/Header";
import Hero from "./components/Hero";
import Categories from "./components/Categories";
import Products from "./components/Products";
import About from "./components/About";
import Contact from "./components/Contact";
import Cart from "./components/Cart";
import Footer from "./components/Footer";
import FloatingElements from "./components/FloatingElements";

const AppContainer = styled.div`
  min-height: 100vh;
  position: relative;
  overflow-x: hidden;
`;

const MainContent = styled(motion.main)`
  position: relative;
  z-index: 1;
`;

function App() {
  const [cartItems, setCartItems] = useState([]);
  const [isCartOpen, setIsCartOpen] = useState(false);

  const addToCart = (product) => {
    const existingItem = cartItems.find((item) => item.id === product.id);
    if (existingItem) {
      setCartItems(
        cartItems.map((item) =>
          item.id === product.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        )
      );
    } else {
      setCartItems([...cartItems, { ...product, quantity: 1 }]);
    }
  };

  const removeFromCart = (productId) => {
    setCartItems(cartItems.filter((item) => item.id !== productId));
  };

  const updateQuantity = (productId, quantity) => {
    if (quantity === 0) {
      removeFromCart(productId);
    } else {
      setCartItems(
        cartItems.map((item) =>
          item.id === productId ? { ...item, quantity } : item
        )
      );
    }
  };

  const getTotalItems = () => {
    return cartItems.reduce((total, item) => total + item.quantity, 0);
  };

  const getTotalPrice = () => {
    return cartItems.reduce(
      (total, item) => total + item.salePrice * item.quantity,
      0
    );
  };

  return (
    <Router>
      <AppContainer>
        <FloatingElements />
        <Header
          cartItemsCount={getTotalItems()}
          onCartClick={() => setIsCartOpen(true)}
        />

        <MainContent
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          <Routes>
            <Route
              path="/"
              element={
                <>
                  <Hero />
                  <Categories />
                  <Products addToCart={addToCart} />
                  <About />
                  <Contact />
                </>
              }
            />
            <Route
              path="/products"
              element={<Products addToCart={addToCart} />}
            />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </MainContent>

        <Footer />

        <Cart
          isOpen={isCartOpen}
          onClose={() => setIsCartOpen(false)}
          items={cartItems}
          onRemove={removeFromCart}
          onUpdateQuantity={updateQuantity}
          totalPrice={getTotalPrice()}
        />
      </AppContainer>
    </Router>
  );
}

export default App;
