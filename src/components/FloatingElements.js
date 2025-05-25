import React from "react";
import styled from "styled-components";
import { motion } from "framer-motion";
import { FaOm, FaLeaf, FaStar, FaHeart } from "react-icons/fa";

const FloatingContainer = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  pointer-events: none;
  z-index: 0;
  overflow: hidden;
`;

const FloatingElement = styled(motion.div)`
  position: absolute;
  color: rgba(255, 215, 0, 0.1);
  font-size: ${(props) => props.size || "2rem"};
  pointer-events: none;
`;

const FloatingShape = styled(motion.div)`
  position: absolute;
  background: ${(props) => props.color || "rgba(255, 215, 0, 0.05)"};
  border-radius: 50%;
  pointer-events: none;
`;

const FloatingParticle = styled(motion.div)`
  position: absolute;
  width: 4px;
  height: 4px;
  background: rgba(255, 215, 0, 0.3);
  border-radius: 50%;
  pointer-events: none;
`;

const FloatingElements = () => {
  // Animation variants for different types of floating elements
  const floatVariants = {
    float1: {
      y: [0, -30, 0],
      x: [0, 15, 0],
      rotate: [0, 180, 360],
      transition: {
        duration: 8,
        repeat: Infinity,
        ease: "easeInOut",
      },
    },
    float2: {
      y: [0, 25, 0],
      x: [0, -20, 0],
      rotate: [0, -180, -360],
      transition: {
        duration: 12,
        repeat: Infinity,
        ease: "easeInOut",
      },
    },
    float3: {
      y: [0, -20, 0],
      x: [0, 10, 0],
      rotate: [0, 90, 180],
      transition: {
        duration: 10,
        repeat: Infinity,
        ease: "easeInOut",
      },
    },
    float4: {
      y: [0, 35, 0],
      x: [0, -15, 0],
      rotate: [0, -90, -180],
      transition: {
        duration: 15,
        repeat: Infinity,
        ease: "easeInOut",
      },
    },
    particle: {
      y: [0, -100, -200],
      opacity: [0, 1, 0],
      transition: {
        duration: 6,
        repeat: Infinity,
        ease: "easeOut",
      },
    },
  };

  return (
    <FloatingContainer>
      {/* Om Symbols */}
      <FloatingElement
        style={{ top: "10%", left: "5%" }}
        size="3rem"
        variants={floatVariants}
        animate="float1"
      >
        <FaOm />
      </FloatingElement>

      <FloatingElement
        style={{ top: "70%", right: "10%" }}
        size="2.5rem"
        variants={floatVariants}
        animate="float2"
      >
        <FaOm />
      </FloatingElement>

      <FloatingElement
        style={{ bottom: "20%", left: "15%" }}
        size="2rem"
        variants={floatVariants}
        animate="float3"
      >
        <FaOm />
      </FloatingElement>

      {/* Leaf Elements */}
      <FloatingElement
        style={{ top: "30%", right: "20%" }}
        size="2.5rem"
        variants={floatVariants}
        animate="float4"
      >
        <FaLeaf />
      </FloatingElement>

      <FloatingElement
        style={{ bottom: "40%", left: "8%" }}
        size="2rem"
        variants={floatVariants}
        animate="float1"
      >
        <FaLeaf />
      </FloatingElement>

      <FloatingElement
        style={{ top: "50%", left: "25%" }}
        size="1.8rem"
        variants={floatVariants}
        animate="float2"
      >
        <FaLeaf />
      </FloatingElement>

      {/* Star Elements */}
      <FloatingElement
        style={{ top: "15%", right: "30%" }}
        size="1.5rem"
        variants={floatVariants}
        animate="float3"
      >
        <FaStar />
      </FloatingElement>

      <FloatingElement
        style={{ bottom: "60%", right: "5%" }}
        size="1.8rem"
        variants={floatVariants}
        animate="float4"
      >
        <FaStar />
      </FloatingElement>

      <FloatingElement
        style={{ top: "80%", left: "30%" }}
        size="1.6rem"
        variants={floatVariants}
        animate="float1"
      >
        <FaStar />
      </FloatingElement>

      {/* Heart Elements */}
      <FloatingElement
        style={{ top: "40%", left: "40%" }}
        size="1.4rem"
        variants={floatVariants}
        animate="float2"
      >
        <FaHeart />
      </FloatingElement>

      <FloatingElement
        style={{ bottom: "30%", right: "25%" }}
        size="1.6rem"
        variants={floatVariants}
        animate="float3"
      >
        <FaHeart />
      </FloatingElement>

      {/* Floating Shapes */}
      <FloatingShape
        style={{ top: "5%", left: "50%", width: "120px", height: "120px" }}
        color="rgba(255, 215, 0, 0.03)"
        variants={floatVariants}
        animate="float1"
      />

      <FloatingShape
        style={{ top: "60%", left: "60%", width: "80px", height: "80px" }}
        color="rgba(102, 126, 234, 0.05)"
        variants={floatVariants}
        animate="float2"
      />

      <FloatingShape
        style={{ bottom: "10%", right: "40%", width: "100px", height: "100px" }}
        color="rgba(118, 75, 162, 0.04)"
        variants={floatVariants}
        animate="float3"
      />

      <FloatingShape
        style={{ top: "25%", left: "70%", width: "60px", height: "60px" }}
        color="rgba(255, 215, 0, 0.06)"
        variants={floatVariants}
        animate="float4"
      />

      <FloatingShape
        style={{ bottom: "50%", left: "45%", width: "90px", height: "90px" }}
        color="rgba(102, 126, 234, 0.03)"
        variants={floatVariants}
        animate="float1"
      />

      {/* Floating Particles */}
      {Array.from({ length: 15 }, (_, i) => (
        <FloatingParticle
          key={i}
          style={{
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
          }}
          variants={floatVariants}
          animate="particle"
          transition={{
            ...floatVariants.particle.transition,
            delay: Math.random() * 6,
          }}
        />
      ))}

      {/* Additional decorative elements */}
      <FloatingElement
        style={{ top: "85%", right: "15%" }}
        size="1.2rem"
        variants={floatVariants}
        animate="float4"
      >
        <FaOm />
      </FloatingElement>

      <FloatingElement
        style={{ top: "20%", left: "80%" }}
        size="1.4rem"
        variants={floatVariants}
        animate="float1"
      >
        <FaLeaf />
      </FloatingElement>

      <FloatingElement
        style={{ bottom: "15%", left: "55%" }}
        size="1.3rem"
        variants={floatVariants}
        animate="float2"
      >
        <FaStar />
      </FloatingElement>

      <FloatingElement
        style={{ top: "65%", left: "85%" }}
        size="1.1rem"
        variants={floatVariants}
        animate="float3"
      >
        <FaHeart />
      </FloatingElement>

      {/* Large background shapes */}
      <FloatingShape
        style={{ top: "35%", right: "60%", width: "200px", height: "200px" }}
        color="rgba(255, 215, 0, 0.02)"
        variants={floatVariants}
        animate="float2"
      />

      <FloatingShape
        style={{ bottom: "25%", left: "75%", width: "150px", height: "150px" }}
        color="rgba(118, 75, 162, 0.02)"
        variants={floatVariants}
        animate="float4"
      />
    </FloatingContainer>
  );
};

export default FloatingElements;
