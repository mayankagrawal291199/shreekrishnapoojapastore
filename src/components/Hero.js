import React from "react";
import styled from "styled-components";
import { motion } from "framer-motion";
import { FiArrowDown, FiStar } from "react-icons/fi";
import { FaWhatsapp } from "react-icons/fa";

const HeroContainer = styled.section`
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  overflow: hidden;
  padding-top: 120px;
`;

const BackgroundElements = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  overflow: hidden;
  z-index: 1;
`;

const FloatingElement = styled(motion.div)`
  position: absolute;
  background: rgba(255, 255, 255, 0.1);
  border-radius: 50%;
  backdrop-filter: blur(10px);
`;

const HeroContent = styled.div`
  max-width: 1400px;
  margin: 0 auto;
  padding: 0 5%;
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 4rem;
  align-items: center;
  position: relative;
  z-index: 2;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    gap: 2rem;
    text-align: center;
  }
`;

const TextContent = styled(motion.div)`
  color: white;
`;

const Badge = styled(motion.div)`
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  background: rgba(255, 255, 255, 0.2);
  backdrop-filter: blur(10px);
  padding: 0.5rem 1rem;
  border-radius: 25px;
  font-size: 0.9rem;
  font-weight: 500;
  margin-bottom: 1rem;
  border: 1px solid rgba(255, 255, 255, 0.3);
`;

const MainHeading = styled(motion.h1)`
  font-size: 4rem;
  font-weight: 800;
  line-height: 1.1;
  margin: 1rem 0;
  background: linear-gradient(135deg, #ffffff 0%, #f8f9ff 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;

  @media (max-width: 768px) {
    font-size: 2.5rem;
  }
`;

const SubHeading = styled(motion.p)`
  font-size: 1.3rem;
  line-height: 1.6;
  margin: 1.5rem 0;
  opacity: 0.9;

  @media (max-width: 768px) {
    font-size: 1.1rem;
  }
`;

const ButtonGroup = styled(motion.div)`
  display: flex;
  gap: 1rem;
  margin: 2rem 0;

  @media (max-width: 768px) {
    flex-direction: column;
    align-items: center;
  }
`;

const PrimaryButton = styled(motion.a)`
  background: rgba(255, 255, 255, 0.2);
  backdrop-filter: blur(10px);
  border: 2px solid rgba(255, 255, 255, 0.3);
  color: white;
  padding: 1rem 2rem;
  border-radius: 50px;
  text-decoration: none;
  font-weight: 600;
  display: flex;
  align-items: center;
  gap: 0.5rem;
  transition: all 0.3s ease;

  &:hover {
    background: rgba(255, 255, 255, 0.3);
    transform: translateY(-2px);
    box-shadow: 0 10px 30px rgba(0, 0, 0, 0.2);
  }
`;

const SecondaryButton = styled(motion.button)`
  background: transparent;
  border: 2px solid rgba(255, 255, 255, 0.5);
  color: white;
  padding: 1rem 2rem;
  border-radius: 50px;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.3s ease;

  &:hover {
    background: rgba(255, 255, 255, 0.1);
    transform: translateY(-2px);
  }
`;

const Stats = styled(motion.div)`
  display: flex;
  gap: 2rem;
  margin: 2rem 0;

  @media (max-width: 768px) {
    justify-content: center;
  }
`;

const StatItem = styled.div`
  text-align: center;

  h3 {
    font-size: 2rem;
    font-weight: 700;
    margin: 0;
  }

  p {
    font-size: 0.9rem;
    opacity: 0.8;
    margin: 0.5rem 0 0 0;
  }
`;

const VisualContent = styled(motion.div)`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const ProductShowcase = styled(motion.div)`
  position: relative;
  width: 400px;
  height: 400px;
  display: flex;
  justify-content: center;
  align-items: center;

  @media (max-width: 768px) {
    width: 300px;
    height: 300px;
  }
`;

const ProductCard = styled(motion.div)`
  position: absolute;
  width: 200px;
  height: 250px;
  background: rgba(255, 255, 255, 0.15);
  backdrop-filter: blur(20px);
  border-radius: 20px;
  border: 1px solid rgba(255, 255, 255, 0.2);
  padding: 1.5rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
  color: white;

  img {
    width: 80px;
    height: 80px;
    border-radius: 50%;
    object-fit: cover;
    margin-bottom: 1rem;
  }

  h4 {
    font-size: 1rem;
    font-weight: 600;
    margin: 0.5rem 0;
  }

  p {
    font-size: 0.8rem;
    opacity: 0.8;
    margin: 0;
  }

  @media (max-width: 768px) {
    width: 150px;
    height: 200px;
    padding: 1rem;
  }
`;

const ScrollIndicator = styled(motion.div)`
  position: absolute;
  bottom: 2rem;
  left: 50%;
  transform: translateX(-50%);
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.5rem;
  color: white;
  opacity: 0.7;
  cursor: pointer;

  span {
    font-size: 0.9rem;
    font-weight: 500;
  }
`;

const Hero = () => {
  const scrollToProducts = () => {
    const element = document.getElementById("categories");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  const productCards = [
    {
      id: 1,
      name: "Premium Agarbatti",
      image:
        "https://images.unsplash.com/photo-1582735689369-4fe89db7114c?w=100&h=100&fit=crop",
      description: "Sacred fragrances",
      position: { x: -100, y: -50, rotate: -15 },
    },
    {
      id: 2,
      name: "Dhoop Cones",
      image:
        "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=100&h=100&fit=crop",
      description: "Aromatic bliss",
      position: { x: 100, y: -50, rotate: 15 },
    },
    {
      id: 3,
      name: "Puja Items",
      image:
        "https://images.unsplash.com/photo-1574263867128-a3d5c1b1dedc?w=100&h=100&fit=crop",
      description: "Complete essentials",
      position: { x: 0, y: 50, rotate: 0 },
    },
  ];

  return (
    <HeroContainer>
      <BackgroundElements>
        {[...Array(6)].map((_, i) => (
          <FloatingElement
            key={i}
            style={{
              width: Math.random() * 100 + 50,
              height: Math.random() * 100 + 50,
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [0, -20, 0],
              x: [0, 10, 0],
              rotate: [0, 180, 360],
            }}
            transition={{
              duration: Math.random() * 10 + 10,
              repeat: Infinity,
              ease: "linear",
            }}
          />
        ))}
      </BackgroundElements>

      <HeroContent>
        <TextContent>
          <Badge
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <FiStar />
            Premium Quality Since 2020
          </Badge>

          <MainHeading
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            Divine Fragrances for Sacred Moments
          </MainHeading>

          <SubHeading
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            Experience the essence of spirituality with our premium collection
            of incense sticks, dhoop cones, and puja essentials. Wholesale and
            retail available.
          </SubHeading>

          <ButtonGroup
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            <PrimaryButton
              href="https://wa.me/919824997129?text=Hello! I want to place an order for puja items."
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <FaWhatsapp />
              Order on WhatsApp
            </PrimaryButton>

            <SecondaryButton
              onClick={scrollToProducts}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Explore Products
            </SecondaryButton>
          </ButtonGroup>

          <Stats
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
          >
            <StatItem>
              <h3>1000+</h3>
              <p>Happy Customers</p>
            </StatItem>
            <StatItem>
              <h3>50+</h3>
              <p>Product Varieties</p>
            </StatItem>
            <StatItem>
              <h3>3+</h3>
              <p>Years Experience</p>
            </StatItem>
          </Stats>
        </TextContent>

        <VisualContent
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.5 }}
        >
          <ProductShowcase>
            {productCards.map((card, index) => (
              <ProductCard
                key={card.id}
                style={{
                  left: card.position.x,
                  top: card.position.y,
                  transform: `rotate(${card.position.rotate}deg)`,
                }}
                initial={{ opacity: 0, scale: 0 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: 1 + index * 0.2 }}
                whileHover={{
                  scale: 1.1,
                  rotate: 0,
                  zIndex: 10,
                  transition: { duration: 0.3 },
                }}
              >
                <img src={card.image} alt={card.name} />
                <h4>{card.name}</h4>
                <p>{card.description}</p>
              </ProductCard>
            ))}
          </ProductShowcase>
        </VisualContent>
      </HeroContent>

      <ScrollIndicator
        onClick={scrollToProducts}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 2 }}
        whileHover={{ scale: 1.1 }}
      >
        <span>Discover More</span>
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          <FiArrowDown size={24} />
        </motion.div>
      </ScrollIndicator>
    </HeroContainer>
  );
};

export default Hero;
