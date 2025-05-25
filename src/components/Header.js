import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import styled from "styled-components";
import { motion } from "framer-motion";
import { FiShoppingCart, FiMenu, FiX, FiPhone, FiMail } from "react-icons/fi";
import { FaWhatsapp } from "react-icons/fa";

const HeaderContainer = styled(motion.header)`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 1000;
  background: rgba(255, 255, 255, 0.95);
  backdrop-filter: blur(20px);
  border-bottom: 1px solid rgba(255, 255, 255, 0.2);
  transition: all 0.3s ease;

  &.scrolled {
    background: rgba(255, 255, 255, 0.98);
    box-shadow: 0 4px 20px rgba(0, 0, 0, 0.1);
  }
`;

const TopBar = styled.div`
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  color: white;
  padding: 8px 0;
  font-size: 14px;
  text-align: center;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 8px 5%;

  @media (max-width: 768px) {
    flex-direction: column;
    gap: 5px;
    padding: 10px 5%;
  }
`;

const ContactInfo = styled.div`
  display: flex;
  gap: 20px;
  align-items: center;

  @media (max-width: 768px) {
    gap: 15px;
    font-size: 12px;
  }
`;

const ContactItem = styled.div`
  display: flex;
  align-items: center;
  gap: 5px;
`;

const PromoText = styled.div`
  font-weight: 500;

  @media (max-width: 768px) {
    font-size: 12px;
  }
`;

const MainHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem 5%;
  max-width: 1400px;
  margin: 0 auto;
`;

const Logo = styled(Link)`
  text-decoration: none;
  display: flex;
  align-items: center;
  gap: 10px;
`;

const LogoIcon = styled.div`
  font-size: 2.5rem;
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
`;

const LogoText = styled.div`
  h1 {
    font-family: "Dancing Script", cursive;
    font-size: 2rem;
    font-weight: 700;
    background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
    margin: 0;
  }

  p {
    font-size: 0.8rem;
    color: #666;
    margin: 0;
    font-weight: 500;
  }

  @media (max-width: 768px) {
    h1 {
      font-size: 1.5rem;
    }
    p {
      font-size: 0.7rem;
    }
  }
`;

const Navigation = styled.nav`
  display: flex;
  gap: 2rem;
  align-items: center;

  @media (max-width: 768px) {
    display: none;
  }
`;

const NavLink = styled(Link)`
  text-decoration: none;
  color: #333;
  font-weight: 500;
  padding: 0.5rem 1rem;
  border-radius: 25px;
  transition: all 0.3s ease;
  position: relative;

  &:hover {
    color: #667eea;
    background: rgba(102, 126, 234, 0.1);
  }

  &.active {
    color: #667eea;
    background: rgba(102, 126, 234, 0.1);
  }
`;

const RightSection = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
`;

const CartButton = styled(motion.button)`
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  border: none;
  color: white;
  padding: 0.75rem;
  border-radius: 50%;
  cursor: pointer;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  box-shadow: 0 4px 15px rgba(102, 126, 234, 0.3);
  transition: all 0.3s ease;

  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 8px 25px rgba(102, 126, 234, 0.4);
  }
`;

const CartBadge = styled.span`
  position: absolute;
  top: -8px;
  right: -8px;
  background: #ff4757;
  color: white;
  border-radius: 50%;
  width: 20px;
  height: 20px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 0.7rem;
  font-weight: bold;
`;

const WhatsAppButton = styled(motion.a)`
  background: #25d366;
  color: white;
  padding: 0.75rem 1.5rem;
  border-radius: 25px;
  text-decoration: none;
  display: flex;
  align-items: center;
  gap: 0.5rem;
  font-weight: 500;
  box-shadow: 0 4px 15px rgba(37, 211, 102, 0.3);
  transition: all 0.3s ease;

  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 8px 25px rgba(37, 211, 102, 0.4);
  }

  @media (max-width: 768px) {
    padding: 0.75rem;
    span {
      display: none;
    }
  }
`;

const MobileMenuButton = styled.button`
  display: none;
  background: none;
  border: none;
  font-size: 1.5rem;
  color: #333;
  cursor: pointer;

  @media (max-width: 768px) {
    display: block;
  }
`;

const MobileMenu = styled(motion.div)`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(255, 255, 255, 0.98);
  backdrop-filter: blur(20px);
  z-index: 2000;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 2rem;
`;

const MobileNavLink = styled(Link)`
  text-decoration: none;
  color: #333;
  font-size: 1.5rem;
  font-weight: 600;
  padding: 1rem 2rem;
  border-radius: 25px;
  transition: all 0.3s ease;

  &:hover {
    color: #667eea;
    background: rgba(102, 126, 234, 0.1);
  }
`;

const CloseButton = styled.button`
  position: absolute;
  top: 2rem;
  right: 2rem;
  background: none;
  border: none;
  font-size: 2rem;
  color: #333;
  cursor: pointer;
`;

const Header = ({ cartItemsCount, onCartClick }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const isActive = (path) => location.pathname === path;

  return (
    <HeaderContainer
      className={isScrolled ? "scrolled" : ""}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <TopBar>
        <ContactInfo>
          <ContactItem>
            <FiPhone size={14} />
            <span>+91 98249 97129</span>
          </ContactItem>
          <ContactItem>
            <FiMail size={14} />
            <span>info@shreekrishnapooja.com</span>
          </ContactItem>
        </ContactInfo>
        <PromoText>Free Shipping on Orders Above ₹200</PromoText>
      </TopBar>

      <MainHeader>
        <Logo to="/">
          <LogoIcon>🕉️</LogoIcon>
          <LogoText>
            <h1>Shree Krishna</h1>
            <p>Poojapa Store</p>
          </LogoText>
        </Logo>

        <Navigation>
          <NavLink to="/" className={isActive("/") ? "active" : ""}>
            Home
          </NavLink>
          <NavLink
            to="/products"
            className={isActive("/products") ? "active" : ""}
          >
            Products
          </NavLink>
          <NavLink to="/about" className={isActive("/about") ? "active" : ""}>
            About
          </NavLink>
          <NavLink
            to="/contact"
            className={isActive("/contact") ? "active" : ""}
          >
            Contact
          </NavLink>
        </Navigation>

        <RightSection>
          <WhatsAppButton
            href="https://wa.me/919824997129?text=Hello! I'm interested in your products."
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <FaWhatsapp size={20} />
            <span>WhatsApp</span>
          </WhatsAppButton>

          <CartButton
            onClick={onCartClick}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
            <FiShoppingCart size={20} />
            {cartItemsCount > 0 && <CartBadge>{cartItemsCount}</CartBadge>}
          </CartButton>

          <MobileMenuButton onClick={() => setIsMobileMenuOpen(true)}>
            <FiMenu />
          </MobileMenuButton>
        </RightSection>
      </MainHeader>

      {isMobileMenuOpen && (
        <MobileMenu
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >
          <CloseButton onClick={() => setIsMobileMenuOpen(false)}>
            <FiX />
          </CloseButton>
          <MobileNavLink to="/" onClick={() => setIsMobileMenuOpen(false)}>
            Home
          </MobileNavLink>
          <MobileNavLink
            to="/products"
            onClick={() => setIsMobileMenuOpen(false)}
          >
            Products
          </MobileNavLink>
          <MobileNavLink to="/about" onClick={() => setIsMobileMenuOpen(false)}>
            About
          </MobileNavLink>
          <MobileNavLink
            to="/contact"
            onClick={() => setIsMobileMenuOpen(false)}
          >
            Contact
          </MobileNavLink>
        </MobileMenu>
      )}
    </HeaderContainer>
  );
};

export default Header;
