import React, { useState } from "react";
import styled from "styled-components";
import { motion } from "framer-motion";
import {
  FaWhatsapp,
  FaPhone,
  FaEnvelope,
  FaMapMarkerAlt,
  FaClock,
  FaInstagram,
  FaFacebook,
  FaPaperPlane,
} from "react-icons/fa";

const ContactSection = styled.section`
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

const ContactGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 60px;
  margin-bottom: 80px;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    gap: 40px;
  }
`;

const ContactInfo = styled(motion.div)`
  background: rgba(255, 255, 255, 0.1);
  backdrop-filter: blur(20px);
  border-radius: 20px;
  padding: 40px;
  border: 1px solid rgba(255, 255, 255, 0.2);
  box-shadow: 0 20px 40px rgba(0, 0, 0, 0.1);
`;

const ContactForm = styled(motion.div)`
  background: rgba(255, 255, 255, 0.1);
  backdrop-filter: blur(20px);
  border-radius: 20px;
  padding: 40px;
  border: 1px solid rgba(255, 255, 255, 0.2);
  box-shadow: 0 20px 40px rgba(0, 0, 0, 0.1);
`;

const InfoTitle = styled.h3`
  font-size: 2rem;
  color: white;
  margin-bottom: 30px;
  text-align: center;
`;

const InfoItem = styled(motion.div)`
  display: flex;
  align-items: center;
  margin-bottom: 25px;
  padding: 20px;
  background: rgba(255, 255, 255, 0.05);
  border-radius: 15px;
  border: 1px solid rgba(255, 255, 255, 0.1);
  transition: all 0.3s ease;

  &:hover {
    background: rgba(255, 255, 255, 0.1);
    transform: translateX(10px);
  }
`;

const InfoIcon = styled.div`
  font-size: 1.5rem;
  color: #ffd700;
  margin-right: 15px;
  min-width: 30px;
`;

const InfoText = styled.div`
  color: rgba(255, 255, 255, 0.9);

  .label {
    font-weight: 600;
    margin-bottom: 5px;
  }

  .value {
    opacity: 0.8;
  }
`;

const WhatsAppButton = styled(motion.a)`
  display: inline-flex;
  align-items: center;
  background: linear-gradient(45deg, #25d366, #128c7e);
  color: white;
  padding: 15px 30px;
  border-radius: 50px;
  text-decoration: none;
  font-weight: 600;
  margin-top: 20px;
  box-shadow: 0 10px 30px rgba(37, 211, 102, 0.3);
  transition: all 0.3s ease;

  &:hover {
    transform: translateY(-3px);
    box-shadow: 0 15px 40px rgba(37, 211, 102, 0.4);
  }

  svg {
    margin-right: 10px;
    font-size: 1.2rem;
  }
`;

const FormTitle = styled.h3`
  font-size: 2rem;
  color: white;
  margin-bottom: 30px;
  text-align: center;
`;

const FormGroup = styled.div`
  margin-bottom: 25px;
`;

const FormLabel = styled.label`
  display: block;
  color: rgba(255, 255, 255, 0.9);
  margin-bottom: 8px;
  font-weight: 500;
`;

const FormInput = styled.input`
  width: 100%;
  padding: 15px;
  border: 1px solid rgba(255, 255, 255, 0.2);
  border-radius: 10px;
  background: rgba(255, 255, 255, 0.1);
  color: white;
  font-size: 1rem;
  transition: all 0.3s ease;

  &::placeholder {
    color: rgba(255, 255, 255, 0.5);
  }

  &:focus {
    outline: none;
    border-color: #ffd700;
    background: rgba(255, 255, 255, 0.15);
    box-shadow: 0 0 20px rgba(255, 215, 0, 0.2);
  }
`;

const FormTextarea = styled.textarea`
  width: 100%;
  padding: 15px;
  border: 1px solid rgba(255, 255, 255, 0.2);
  border-radius: 10px;
  background: rgba(255, 255, 255, 0.1);
  color: white;
  font-size: 1rem;
  min-height: 120px;
  resize: vertical;
  transition: all 0.3s ease;

  &::placeholder {
    color: rgba(255, 255, 255, 0.5);
  }

  &:focus {
    outline: none;
    border-color: #ffd700;
    background: rgba(255, 255, 255, 0.15);
    box-shadow: 0 0 20px rgba(255, 215, 0, 0.2);
  }
`;

const SubmitButton = styled(motion.button)`
  width: 100%;
  padding: 15px;
  background: linear-gradient(45deg, #ffd700, #ffed4e);
  color: #333;
  border: none;
  border-radius: 10px;
  font-size: 1.1rem;
  font-weight: 600;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 10px;
  transition: all 0.3s ease;

  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 10px 30px rgba(255, 215, 0, 0.3);
  }
`;

const SocialSection = styled.div`
  text-align: center;
`;

const SocialTitle = styled(motion.h3)`
  font-size: 2.5rem;
  color: white;
  margin-bottom: 30px;
  font-weight: 600;
`;

const SocialLinks = styled.div`
  display: flex;
  justify-content: center;
  gap: 20px;
  flex-wrap: wrap;
`;

const SocialLink = styled(motion.a)`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 60px;
  height: 60px;
  background: rgba(255, 255, 255, 0.1);
  backdrop-filter: blur(20px);
  border-radius: 50%;
  color: #ffd700;
  font-size: 1.5rem;
  text-decoration: none;
  border: 1px solid rgba(255, 255, 255, 0.2);
  transition: all 0.3s ease;

  &:hover {
    background: rgba(255, 215, 0, 0.2);
    transform: translateY(-5px) scale(1.1);
    box-shadow: 0 10px 30px rgba(255, 215, 0, 0.3);
  }
`;

const FloatingShape = styled(motion.div)`
  position: absolute;
  background: rgba(255, 215, 0, 0.1);
  border-radius: 50%;
  pointer-events: none;
`;

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Create WhatsApp message
    const message = `Hello! I'm interested in your products.
    
Name: ${formData.name}
Email: ${formData.email}
Phone: ${formData.phone}
Message: ${formData.message}`;

    const whatsappUrl = `https://wa.me/919510542579?text=${encodeURIComponent(
      message
    )}`;
    window.open(whatsappUrl, "_blank");

    // Reset form
    setFormData({
      name: "",
      email: "",
      phone: "",
      message: "",
    });
  };

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
    <ContactSection>
      {/* Floating Background Elements */}
      <FloatingShape
        style={{ top: "15%", left: "5%", width: "80px", height: "80px" }}
        animate={{
          y: [0, -25, 0],
          rotate: [0, 180, 360],
        }}
        transition={{
          duration: 12,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />
      <FloatingShape
        style={{ top: "70%", right: "10%", width: "100px", height: "100px" }}
        animate={{
          y: [0, 30, 0],
          rotate: [0, -180, -360],
        }}
        transition={{
          duration: 15,
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
          <SectionTitle variants={itemVariants}>Get In Touch</SectionTitle>
          <SectionSubtitle variants={itemVariants}>
            We're here to help you with all your spiritual needs. Reach out to
            us anytime!
          </SectionSubtitle>

          <ContactGrid>
            <ContactInfo variants={itemVariants}>
              <InfoTitle>Contact Information</InfoTitle>

              <InfoItem
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.2 }}
              >
                <InfoIcon>
                  <FaWhatsapp />
                </InfoIcon>
                <InfoText>
                  <div className="label">WhatsApp - Ashish Bansal</div>
                  <div className="value">+91 95105 42579</div>
                </InfoText>
              </InfoItem>

              <InfoItem
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.2 }}
              >
                <InfoIcon>
                  <FaPhone />
                </InfoIcon>
                <InfoText>
                  <div className="label">Phone - Mohit Bansal</div>
                  <div className="value">+91 82005 01012</div>
                </InfoText>
              </InfoItem>

              <InfoItem
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.2 }}
              >
                <InfoIcon>
                  <FaEnvelope />
                </InfoIcon>
                <InfoText>
                  <div className="label">Email</div>
                  <div className="value">info@shreeradhepooja.com</div>
                </InfoText>
              </InfoItem>

              <InfoItem
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.2 }}
              >
                <InfoIcon>
                  <FaMapMarkerAlt />
                </InfoIcon>
                <InfoText>
                  <div className="label">Address</div>
                  <div className="value">
                    Shree Radhe Pooja Shop, Main Market, India
                  </div>
                </InfoText>
              </InfoItem>

              <InfoItem
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.2 }}
              >
                <InfoIcon>
                  <FaClock />
                </InfoIcon>
                <InfoText>
                  <div className="label">Business Hours</div>
                  <div className="value">Mon - Sat: 9:00 AM - 8:00 PM</div>
                </InfoText>
              </InfoItem>

              <WhatsAppButton
                href="https://wa.me/919510542579?text=Hello! I'm interested in your spiritual products."
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <FaWhatsapp />
                Chat on WhatsApp
              </WhatsAppButton>
            </ContactInfo>

            <ContactForm variants={itemVariants}>
              <FormTitle>Send us a Message</FormTitle>

              <form onSubmit={handleSubmit}>
                <FormGroup>
                  <FormLabel htmlFor="name">Full Name *</FormLabel>
                  <FormInput
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    placeholder="Enter your full name"
                    required
                  />
                </FormGroup>

                <FormGroup>
                  <FormLabel htmlFor="email">Email Address *</FormLabel>
                  <FormInput
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    placeholder="Enter your email address"
                    required
                  />
                </FormGroup>

                <FormGroup>
                  <FormLabel htmlFor="phone">Phone Number</FormLabel>
                  <FormInput
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleInputChange}
                    placeholder="Enter your phone number"
                  />
                </FormGroup>

                <FormGroup>
                  <FormLabel htmlFor="message">Message *</FormLabel>
                  <FormTextarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    placeholder="Tell us about your requirements..."
                    required
                  />
                </FormGroup>

                <SubmitButton
                  type="submit"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <FaPaperPlane />
                  Send Message via WhatsApp
                </SubmitButton>
              </form>
            </ContactForm>
          </ContactGrid>

          <SocialSection>
            <SocialTitle variants={itemVariants}>Follow Us</SocialTitle>
            <SocialLinks>
              <SocialLink
                href="https://wa.me/919510542579"
                target="_blank"
                rel="noopener noreferrer"
                variants={itemVariants}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
              >
                <FaWhatsapp />
              </SocialLink>
              <SocialLink
                href="https://instagram.com/shreekrishnapoojapa"
                target="_blank"
                rel="noopener noreferrer"
                variants={itemVariants}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
              >
                <FaInstagram />
              </SocialLink>
              <SocialLink
                href="https://facebook.com/shreekrishnapoojapa"
                target="_blank"
                rel="noopener noreferrer"
                variants={itemVariants}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
              >
                <FaFacebook />
              </SocialLink>
            </SocialLinks>
          </SocialSection>
        </motion.div>
      </Container>
    </ContactSection>
  );
};

export default Contact;
