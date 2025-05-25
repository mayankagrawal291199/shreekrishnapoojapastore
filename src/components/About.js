import React from "react";
import styled from "styled-components";
import { motion } from "framer-motion";
import {
  FaOm,
  FaLeaf,
  FaHeart,
  FaStar,
  FaUsers,
  FaGlobe,
} from "react-icons/fa";

const AboutSection = styled.section`
  padding: 100px 0;
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  position: relative;
  overflow: hidden;
`;

const Container = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 20px;
  position: relative;
  z-index: 2;
`;

const SectionTitle = styled(motion.h2)`
  text-align: center;
  font-size: 3.5rem;
  font-weight: 700;
  background: linear-gradient(45deg, #ffd700, #ffed4e);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  margin-bottom: 20px;
  text-shadow: 0 4px 8px rgba(0, 0, 0, 0.3);
`;

const SectionSubtitle = styled(motion.p)`
  text-align: center;
  font-size: 1.3rem;
  color: rgba(255, 255, 255, 0.9);
  margin-bottom: 60px;
  max-width: 600px;
  margin-left: auto;
  margin-right: auto;
`;

const ContentGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
  gap: 40px;
  margin-bottom: 80px;
`;

const StoryCard = styled(motion.div)`
  background: rgba(255, 255, 255, 0.1);
  backdrop-filter: blur(20px);
  border-radius: 20px;
  padding: 40px;
  border: 1px solid rgba(255, 255, 255, 0.2);
  box-shadow: 0 20px 40px rgba(0, 0, 0, 0.1);
  transform-style: preserve-3d;

  &:hover {
    transform: translateY(-10px) rotateX(5deg);
    box-shadow: 0 30px 60px rgba(0, 0, 0, 0.2);
  }
`;

const CardIcon = styled.div`
  font-size: 3rem;
  color: #ffd700;
  margin-bottom: 20px;
  text-align: center;
`;

const CardTitle = styled.h3`
  font-size: 1.8rem;
  color: white;
  margin-bottom: 15px;
  text-align: center;
`;

const CardText = styled.p`
  color: rgba(255, 255, 255, 0.8);
  line-height: 1.6;
  text-align: center;
`;

const StatsSection = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 30px;
  margin-bottom: 80px;
`;

const StatCard = styled(motion.div)`
  text-align: center;
  background: rgba(255, 255, 255, 0.1);
  backdrop-filter: blur(20px);
  border-radius: 15px;
  padding: 30px 20px;
  border: 1px solid rgba(255, 255, 255, 0.2);

  &:hover {
    transform: translateY(-5px) scale(1.05);
    background: rgba(255, 255, 255, 0.15);
  }
`;

const StatNumber = styled.div`
  font-size: 3rem;
  font-weight: 700;
  background: linear-gradient(45deg, #ffd700, #ffed4e);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  margin-bottom: 10px;
`;

const StatLabel = styled.div`
  color: rgba(255, 255, 255, 0.9);
  font-size: 1.1rem;
  font-weight: 500;
`;

const ValuesSection = styled.div`
  text-align: center;
`;

const ValuesTitle = styled(motion.h3)`
  font-size: 2.5rem;
  color: white;
  margin-bottom: 40px;
  font-weight: 600;
`;

const ValuesGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 30px;
`;

const ValueCard = styled(motion.div)`
  background: rgba(255, 255, 255, 0.1);
  backdrop-filter: blur(20px);
  border-radius: 15px;
  padding: 30px 20px;
  border: 1px solid rgba(255, 255, 255, 0.2);
  text-align: center;

  &:hover {
    transform: translateY(-10px);
    background: rgba(255, 255, 255, 0.15);
  }
`;

const ValueIcon = styled.div`
  font-size: 2.5rem;
  color: #ffd700;
  margin-bottom: 15px;
`;

const ValueTitle = styled.h4`
  color: white;
  font-size: 1.3rem;
  margin-bottom: 10px;
`;

const ValueText = styled.p`
  color: rgba(255, 255, 255, 0.8);
  line-height: 1.5;
`;

const FloatingShape = styled(motion.div)`
  position: absolute;
  background: rgba(255, 215, 0, 0.1);
  border-radius: 50%;
  pointer-events: none;
`;

const About = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 50, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.6,
        ease: "easeOut",
      },
    },
  };

  return (
    <AboutSection>
      {/* Floating Background Elements */}
      <FloatingShape
        style={{ top: "10%", left: "10%", width: "100px", height: "100px" }}
        animate={{
          y: [0, -20, 0],
          rotate: [0, 180, 360],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />
      <FloatingShape
        style={{ top: "60%", right: "15%", width: "80px", height: "80px" }}
        animate={{
          y: [0, 20, 0],
          rotate: [0, -180, -360],
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />
      <FloatingShape
        style={{ bottom: "20%", left: "20%", width: "60px", height: "60px" }}
        animate={{
          y: [0, -15, 0],
          x: [0, 15, 0],
        }}
        transition={{
          duration: 6,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      <Container>
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <SectionTitle variants={itemVariants}>
            About Shree Radhe Pooja Shop
          </SectionTitle>
          <SectionSubtitle variants={itemVariants}>
            Bringing divine blessings to your doorstep with authentic spiritual
            products
          </SectionSubtitle>

          <ContentGrid>
            <StoryCard
              variants={itemVariants}
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.3 }}
            >
              <CardIcon>
                <FaOm />
              </CardIcon>
              <CardTitle>Our Heritage</CardTitle>
              <CardText>
                Founded with deep reverence for spiritual traditions, Shree
                Radhe Pooja Shop has been serving devotees for years. We
                understand the sacred importance of authentic puja materials and
                strive to provide products that enhance your spiritual journey.
              </CardText>
            </StoryCard>

            <StoryCard
              variants={itemVariants}
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.3 }}
            >
              <CardIcon>
                <FaLeaf />
              </CardIcon>
              <CardTitle>Natural & Pure</CardTitle>
              <CardText>
                All our products are made from natural ingredients sourced
                directly from trusted suppliers. From aromatic incense sticks to
                sacred dhoop, every item is crafted with purity and devotion to
                maintain the sanctity of your prayers.
              </CardText>
            </StoryCard>
          </ContentGrid>

          <StatsSection>
            <StatCard variants={itemVariants} whileHover={{ scale: 1.05 }}>
              <StatNumber>10,000+</StatNumber>
              <StatLabel>Happy Customers</StatLabel>
            </StatCard>
            <StatCard variants={itemVariants} whileHover={{ scale: 1.05 }}>
              <StatNumber>50+</StatNumber>
              <StatLabel>Product Varieties</StatLabel>
            </StatCard>
            <StatCard variants={itemVariants} whileHover={{ scale: 1.05 }}>
              <StatNumber>5+</StatNumber>
              <StatLabel>Years of Service</StatLabel>
            </StatCard>
            <StatCard variants={itemVariants} whileHover={{ scale: 1.05 }}>
              <StatNumber>100%</StatNumber>
              <StatLabel>Natural Products</StatLabel>
            </StatCard>
          </StatsSection>

          <ValuesSection>
            <ValuesTitle variants={itemVariants}>Our Core Values</ValuesTitle>
            <ValuesGrid>
              <ValueCard variants={itemVariants} whileHover={{ scale: 1.05 }}>
                <ValueIcon>
                  <FaHeart />
                </ValueIcon>
                <ValueTitle>Devotion</ValueTitle>
                <ValueText>
                  Every product is selected and prepared with deep devotion and
                  respect for spiritual traditions.
                </ValueText>
              </ValueCard>

              <ValueCard variants={itemVariants} whileHover={{ scale: 1.05 }}>
                <ValueIcon>
                  <FaStar />
                </ValueIcon>
                <ValueTitle>Quality</ValueTitle>
                <ValueText>
                  We never compromise on quality, ensuring every item meets the
                  highest standards of purity.
                </ValueText>
              </ValueCard>

              <ValueCard variants={itemVariants} whileHover={{ scale: 1.05 }}>
                <ValueIcon>
                  <FaUsers />
                </ValueIcon>
                <ValueTitle>Service</ValueTitle>
                <ValueText>
                  Customer satisfaction is our priority, with personalized
                  service for every devotee.
                </ValueText>
              </ValueCard>

              <ValueCard variants={itemVariants} whileHover={{ scale: 1.05 }}>
                <ValueIcon>
                  <FaGlobe />
                </ValueIcon>
                <ValueTitle>Tradition</ValueTitle>
                <ValueText>
                  Preserving ancient traditions while making spiritual products
                  accessible to all.
                </ValueText>
              </ValueCard>
            </ValuesGrid>
          </ValuesSection>
        </motion.div>
      </Container>
    </AboutSection>
  );
};

export default About;
