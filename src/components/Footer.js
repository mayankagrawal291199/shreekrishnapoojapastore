import React from "react";
import styled from "styled-components";
import { motion } from "framer-motion";
import {
  FaOm,
  FaWhatsapp,
  FaInstagram,
  FaFacebook,
  FaPhone,
  FaEnvelope,
  FaMapMarkerAlt,
  FaHeart,
  FaLeaf,
  FaStar,
} from "react-icons/fa";

const FooterSection = styled.footer`
  background: linear-gradient(135deg, #1a1a2e 0%, #16213e 50%, #0f3460 100%);
  color: white;
  position: relative;
  overflow: hidden;
`;

const FooterContent = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 80px 20px 40px;
  position: relative;
  z-index: 2;
`;

const FooterGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 40px;
  margin-bottom: 50px;
`;

const FooterColumn = styled(motion.div)`
  background: rgba(255, 255, 255, 0.05);
  backdrop-filter: blur(20px);
  border-radius: 15px;
  padding: 30px;
  border: 1px solid rgba(255, 255, 255, 0.1);
  transition: all 0.3s ease;

  &:hover {
    background: rgba(255, 255, 255, 0.08);
    transform: translateY(-5px);
  }
`;

const CompanyInfo = styled.div`
  text-align: center;
`;

const Logo = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 20px;

  .om-symbol {
    font-size: 2.5rem;
    color: #ffd700;
    margin-right: 15px;
  }

  .company-name {
    font-size: 1.8rem;
    font-weight: 700;
    background: linear-gradient(45deg, #ffd700, #ffed4e);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
  }
`;

const CompanyDescription = styled.p`
  color: rgba(255, 255, 255, 0.8);
  line-height: 1.6;
  margin-bottom: 25px;
`;

const SocialLinks = styled.div`
  display: flex;
  justify-content: center;
  gap: 15px;
`;

const SocialLink = styled(motion.a)`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 45px;
  height: 45px;
  background: rgba(255, 255, 255, 0.1);
  border-radius: 50%;
  color: #ffd700;
  font-size: 1.2rem;
  text-decoration: none;
  border: 1px solid rgba(255, 255, 255, 0.2);
  transition: all 0.3s ease;

  &:hover {
    background: rgba(255, 215, 0, 0.2);
    transform: translateY(-3px) scale(1.1);
    box-shadow: 0 8px 25px rgba(255, 215, 0, 0.3);
  }
`;

const ColumnTitle = styled.h3`
  font-size: 1.5rem;
  color: #ffd700;
  margin-bottom: 20px;
  text-align: center;
  font-weight: 600;
`;

const LinkList = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
`;

const LinkItem = styled(motion.li)`
  margin-bottom: 12px;

  a {
    color: rgba(255, 255, 255, 0.8);
    text-decoration: none;
    transition: all 0.3s ease;
    display: flex;
    align-items: center;
    padding: 8px 0;

    &:hover {
      color: #ffd700;
      transform: translateX(5px);
    }

    svg {
      margin-right: 8px;
      font-size: 0.9rem;
    }
  }
`;

const ContactInfo = styled.div`
  text-align: center;
`;

const ContactItem = styled(motion.div)`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 15px;
  color: rgba(255, 255, 255, 0.8);

  svg {
    color: #ffd700;
    margin-right: 10px;
    font-size: 1.1rem;
  }

  &:hover {
    color: white;
    transform: scale(1.02);
  }
`;

const WhatsAppButton = styled(motion.a)`
  display: inline-flex;
  align-items: center;
  background: linear-gradient(45deg, #25d366, #128c7e);
  color: white;
  padding: 12px 25px;
  border-radius: 25px;
  text-decoration: none;
  font-weight: 600;
  margin-top: 15px;
  box-shadow: 0 8px 25px rgba(37, 211, 102, 0.3);
  transition: all 0.3s ease;

  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 12px 35px rgba(37, 211, 102, 0.4);
  }

  svg {
    margin-right: 8px;
    font-size: 1.1rem;
  }
`;

const FooterBottom = styled.div`
  border-top: 1px solid rgba(255, 255, 255, 0.1);
  padding-top: 30px;
  text-align: center;
`;

const Copyright = styled.p`
  color: rgba(255, 255, 255, 0.6);
  margin-bottom: 15px;

  .heart {
    color: #ff6b6b;
    margin: 0 5px;
  }
`;

const TrustBadges = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 30px;
  flex-wrap: wrap;
  margin-top: 20px;
`;

const TrustBadge = styled(motion.div)`
  display: flex;
  align-items: center;
  color: rgba(255, 255, 255, 0.7);
  font-size: 0.9rem;

  svg {
    color: #ffd700;
    margin-right: 8px;
  }
`;

const FloatingShape = styled(motion.div)`
  position: absolute;
  background: rgba(255, 215, 0, 0.05);
  border-radius: 50%;
  pointer-events: none;
`;

const Footer = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 30, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5,
        ease: "easeOut",
      },
    },
  };

  return (
    <FooterSection>
      {/* Floating Background Elements */}
      <FloatingShape
        style={{ top: "10%", left: "5%", width: "120px", height: "120px" }}
        animate={{
          y: [0, -20, 0],
          rotate: [0, 180, 360],
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />
      <FloatingShape
        style={{ top: "60%", right: "8%", width: "80px", height: "80px" }}
        animate={{
          y: [0, 25, 0],
          rotate: [0, -180, -360],
        }}
        transition={{
          duration: 15,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />
      <FloatingShape
        style={{ bottom: "20%", left: "15%", width: "60px", height: "60px" }}
        animate={{
          y: [0, -15, 0],
          x: [0, 15, 0],
        }}
        transition={{
          duration: 12,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      <FooterContent>
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <FooterGrid>
            {/* Company Information */}
            <FooterColumn variants={itemVariants}>
              <CompanyInfo>
                <Logo>
                  <FaOm className="om-symbol" />
                  <span className="company-name">Shree Radhe Pooja Shop</span>
                </Logo>
                <CompanyDescription>
                  Your trusted partner for authentic spiritual products. We
                  bring divine blessings to your doorstep with pure, natural
                  incense, dhoop, and puja essentials.
                </CompanyDescription>
                <SocialLinks>
                  <SocialLink
                    href="https://wa.me/919510542579"
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                  >
                    <FaWhatsapp />
                  </SocialLink>
                  <SocialLink
                    href="https://instagram.com/shreekrishnapoojapa"
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                  >
                    <FaInstagram />
                  </SocialLink>
                  <SocialLink
                    href="https://facebook.com/shreekrishnapoojapa"
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                  >
                    <FaFacebook />
                  </SocialLink>
                </SocialLinks>
              </CompanyInfo>
            </FooterColumn>

            {/* Quick Links */}
            <FooterColumn variants={itemVariants}>
              <ColumnTitle>Quick Links</ColumnTitle>
              <LinkList>
                <LinkItem variants={itemVariants}>
                  <a href="/">
                    <FaOm />
                    Home
                  </a>
                </LinkItem>
                <LinkItem variants={itemVariants}>
                  <a href="/products">
                    <FaLeaf />
                    Products
                  </a>
                </LinkItem>
                <LinkItem variants={itemVariants}>
                  <a href="/about">
                    <FaHeart />
                    About Us
                  </a>
                </LinkItem>
                <LinkItem variants={itemVariants}>
                  <a href="/contact">
                    <FaPhone />
                    Contact
                  </a>
                </LinkItem>
              </LinkList>
            </FooterColumn>

            {/* Product Categories */}
            <FooterColumn variants={itemVariants}>
              <ColumnTitle>Our Products</ColumnTitle>
              <LinkList>
                <LinkItem variants={itemVariants}>
                  <a href="/products">
                    <FaLeaf />
                    Incense Sticks
                  </a>
                </LinkItem>
                <LinkItem variants={itemVariants}>
                  <a href="/products">
                    <FaLeaf />
                    Dhoop Cones
                  </a>
                </LinkItem>
                <LinkItem variants={itemVariants}>
                  <a href="/products">
                    <FaLeaf />
                    Dhoop Sticks
                  </a>
                </LinkItem>
                <LinkItem variants={itemVariants}>
                  <a href="/products">
                    <FaLeaf />
                    Sambrani Cups
                  </a>
                </LinkItem>
                <LinkItem variants={itemVariants}>
                  <a href="/products">
                    <FaOm />
                    Puja Items
                  </a>
                </LinkItem>
              </LinkList>
            </FooterColumn>

            {/* Contact Information */}
            <FooterColumn variants={itemVariants}>
              <ContactInfo>
                <ColumnTitle>Get In Touch</ColumnTitle>

                <ContactItem variants={itemVariants}>
                  <FaPhone />
                  Ashish: +91 95105 42579
                </ContactItem>

                <ContactItem variants={itemVariants}>
                  <FaPhone />
                  Mohit: +91 82005 01012
                </ContactItem>

                <ContactItem variants={itemVariants}>
                  <FaEnvelope />
                  info@shreeradhepooja.com
                </ContactItem>

                <ContactItem variants={itemVariants}>
                  <FaMapMarkerAlt />
                  Shree Radhe Pooja Shop, Main Market, India
                </ContactItem>

                <WhatsAppButton
                  href="https://wa.me/919510542579?text=Hello! I'm interested in your spiritual products."
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <FaWhatsapp />
                  Order on WhatsApp
                </WhatsAppButton>
              </ContactInfo>
            </FooterColumn>
          </FooterGrid>

          <FooterBottom>
            <Copyright>
              © 2024 Shree Radhe Pooja Shop. Made with{" "}
              <FaHeart className="heart" /> for spiritual souls.
            </Copyright>

            <TrustBadges>
              <TrustBadge variants={itemVariants}>
                <FaStar />
                100% Natural Products
              </TrustBadge>
              <TrustBadge variants={itemVariants}>
                <FaHeart />
                Customer Satisfaction
              </TrustBadge>
              <TrustBadge variants={itemVariants}>
                <FaLeaf />
                Eco-Friendly
              </TrustBadge>
            </TrustBadges>
          </FooterBottom>
        </motion.div>
      </FooterContent>
    </FooterSection>
  );
};

export default Footer;
