import React from "react";
import styled from "styled-components";
import { motion, AnimatePresence } from "framer-motion";
import { FiX, FiMinus, FiPlus, FiTrash2 } from "react-icons/fi";
import { FaWhatsapp } from "react-icons/fa";

const CartOverlay = styled(motion.div)`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.5);
  backdrop-filter: blur(10px);
  z-index: 3000;
  display: flex;
  justify-content: flex-end;
`;

const CartContainer = styled(motion.div)`
  width: 450px;
  height: 100vh;
  background: white;
  box-shadow: -10px 0 30px rgba(0, 0, 0, 0.3);
  display: flex;
  flex-direction: column;
  overflow: hidden;

  @media (max-width: 768px) {
    width: 100vw;
  }
`;

const CartHeader = styled.div`
  padding: 2rem;
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  color: white;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const CartTitle = styled.h2`
  font-size: 1.5rem;
  font-weight: 700;
  margin: 0;
`;

const CloseButton = styled(motion.button)`
  background: rgba(255, 255, 255, 0.2);
  border: none;
  color: white;
  width: 40px;
  height: 40px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  transition: all 0.3s ease;

  &:hover {
    background: rgba(255, 255, 255, 0.3);
  }
`;

const CartContent = styled.div`
  flex: 1;
  overflow-y: auto;
  padding: 1rem;
`;

const EmptyCart = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100%;
  text-align: center;
  color: #666;

  h3 {
    font-size: 1.5rem;
    margin-bottom: 1rem;
    color: #333;
  }

  p {
    font-size: 1rem;
    margin-bottom: 2rem;
  }
`;

const CartItems = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

const CartItem = styled(motion.div)`
  background: #f8f9fa;
  border-radius: 15px;
  padding: 1rem;
  display: flex;
  gap: 1rem;
  align-items: center;
`;

const ItemImage = styled.div`
  width: 60px;
  height: 60px;
  border-radius: 10px;
  overflow: hidden;
  flex-shrink: 0;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;

const ItemInfo = styled.div`
  flex: 1;
  min-width: 0;
`;

const ItemName = styled.h4`
  font-size: 0.9rem;
  font-weight: 600;
  color: #333;
  margin: 0 0 0.25rem 0;
  line-height: 1.3;
`;

const ItemPrice = styled.div`
  font-size: 0.8rem;
  color: #666;
  margin-bottom: 0.5rem;
`;

const ItemControls = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
`;

const QuantityButton = styled(motion.button)`
  background: #667eea;
  border: none;
  color: white;
  width: 30px;
  height: 30px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  font-size: 0.8rem;

  &:disabled {
    background: #ccc;
    cursor: not-allowed;
  }
`;

const Quantity = styled.span`
  font-weight: 600;
  min-width: 30px;
  text-align: center;
`;

const RemoveButton = styled(motion.button)`
  background: #ff4757;
  border: none;
  color: white;
  width: 30px;
  height: 30px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  margin-left: 0.5rem;
`;

const CartFooter = styled.div`
  padding: 1.5rem;
  background: #f8f9fa;
  border-top: 1px solid #e9ecef;
`;

const TotalSection = styled.div`
  margin-bottom: 1.5rem;
`;

const TotalRow = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 0.5rem;
  font-size: ${(props) => (props.large ? "1.2rem" : "1rem")};
  font-weight: ${(props) => (props.large ? "700" : "500")};
  color: ${(props) => (props.large ? "#333" : "#666")};
`;

const CheckoutButton = styled(motion.button)`
  width: 100%;
  background: #25d366;
  border: none;
  color: white;
  padding: 1rem;
  border-radius: 15px;
  font-weight: 600;
  font-size: 1rem;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
  box-shadow: 0 4px 15px rgba(37, 211, 102, 0.3);
  transition: all 0.3s ease;

  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 8px 25px rgba(37, 211, 102, 0.4);
  }
`;

const ContinueShoppingButton = styled(motion.button)`
  width: 100%;
  background: transparent;
  border: 2px solid #667eea;
  color: #667eea;
  padding: 1rem;
  border-radius: 15px;
  font-weight: 600;
  cursor: pointer;
  margin-bottom: 1rem;
  transition: all 0.3s ease;

  &:hover {
    background: #667eea;
    color: white;
  }
`;

const Cart = ({
  isOpen,
  onClose,
  items,
  onRemove,
  onUpdateQuantity,
  totalPrice,
}) => {
  const generateWhatsAppMessage = () => {
    const safeTotal = totalPrice || 0;
    let message = "🛒 *Order from Shree Radhe Pooja Shop*\n\n";
    message += "📋 *Order Details:*\n";

    items.forEach((item, index) => {
      message += `${index + 1}. ${item.name}\n`;
      message += `   Quantity: ${item.quantity}\n`;
      message += `   Price: ₹${item.salePrice} x ${item.quantity} = ₹${
        item.salePrice * item.quantity
      }\n\n`;
    });

    message += `💰 *Total Amount: ₹${safeTotal}*\n\n`;
    message +=
      "📞 Please confirm this order and let me know the delivery details.\n\n";
    message += "🙏 Thank you for choosing Shree Radhe Pooja Shop!";

    return encodeURIComponent(message);
  };

  const handleWhatsAppOrder = () => {
    const message = generateWhatsAppMessage();
    const whatsappUrl = `https://wa.me/919510542579?text=${message}`;
    window.open(whatsappUrl, "_blank");
  };

  const itemCount = items.reduce((total, item) => total + item.quantity, 0);
  const safeTotal = totalPrice || 0;

  return (
    <AnimatePresence>
      {isOpen && (
        <CartOverlay
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
        >
          <CartContainer
            initial={{ x: 450 }}
            animate={{ x: 0 }}
            exit={{ x: 450 }}
            transition={{ type: "spring", damping: 25, stiffness: 200 }}
            onClick={(e) => e.stopPropagation()}
          >
            <CartHeader>
              <CartTitle>Shopping Cart ({itemCount})</CartTitle>
              <CloseButton
                onClick={onClose}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
              >
                <FiX size={20} />
              </CloseButton>
            </CartHeader>

            <CartContent>
              {items.length === 0 ? (
                <EmptyCart>
                  <h3>Your cart is empty</h3>
                  <p>Add some products to get started!</p>
                  <ContinueShoppingButton
                    onClick={onClose}
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    Continue Shopping
                  </ContinueShoppingButton>
                </EmptyCart>
              ) : (
                <CartItems>
                  {items.map((item) => (
                    <CartItem
                      key={item.id}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -20 }}
                      layout
                    >
                      <ItemImage>
                        <img src={item.image} alt={item.name} />
                      </ItemImage>

                      <ItemInfo>
                        <ItemName>{item.name}</ItemName>
                        <ItemPrice>₹{item.salePrice} each</ItemPrice>

                        <ItemControls>
                          <QuantityButton
                            onClick={() =>
                              onUpdateQuantity(item.id, item.quantity - 1)
                            }
                            disabled={item.quantity <= 1}
                            whileHover={{ scale: 1.1 }}
                            whileTap={{ scale: 0.9 }}
                          >
                            <FiMinus />
                          </QuantityButton>

                          <Quantity>{item.quantity}</Quantity>

                          <QuantityButton
                            onClick={() =>
                              onUpdateQuantity(item.id, item.quantity + 1)
                            }
                            whileHover={{ scale: 1.1 }}
                            whileTap={{ scale: 0.9 }}
                          >
                            <FiPlus />
                          </QuantityButton>

                          <RemoveButton
                            onClick={() => onRemove(item.id)}
                            whileHover={{ scale: 1.1 }}
                            whileTap={{ scale: 0.9 }}
                          >
                            <FiTrash2 size={14} />
                          </RemoveButton>
                        </ItemControls>
                      </ItemInfo>
                    </CartItem>
                  ))}
                </CartItems>
              )}
            </CartContent>

            {items.length > 0 && (
              <CartFooter>
                <TotalSection>
                  <TotalRow>
                    <span>Subtotal:</span>
                    <span>₹{safeTotal}</span>
                  </TotalRow>
                  <TotalRow>
                    <span>Shipping:</span>
                    <span>{safeTotal >= 200 ? "Free" : "₹50"}</span>
                  </TotalRow>
                  <TotalRow large>
                    <span>Total:</span>
                    <span>
                      ₹{safeTotal >= 200 ? safeTotal : safeTotal + 50}
                    </span>
                  </TotalRow>
                </TotalSection>

                <CheckoutButton
                  onClick={handleWhatsAppOrder}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <FaWhatsapp size={20} />
                  Order via WhatsApp
                </CheckoutButton>

                <ContinueShoppingButton
                  onClick={onClose}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  Continue Shopping
                </ContinueShoppingButton>
              </CartFooter>
            )}
          </CartContainer>
        </CartOverlay>
      )}
    </AnimatePresence>
  );
};

export default Cart;
