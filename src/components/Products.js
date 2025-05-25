import React, { useState, useMemo } from "react";
import styled from "styled-components";
import { motion, AnimatePresence } from "framer-motion";
import { FiSearch, FiShoppingCart } from "react-icons/fi";
import { products, categories } from "../data/products";

const ProductsContainer = styled.section`
  padding: 5rem 5%;
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  min-height: 100vh;
  position: relative;
`;

const Container = styled.div`
  max-width: 1400px;
  margin: 0 auto;
`;

const SectionHeader = styled(motion.div)`
  text-align: center;
  margin-bottom: 3rem;
  color: white;
`;

const SectionTitle = styled(motion.h2)`
  font-size: 3rem;
  font-weight: 800;
  margin-bottom: 1rem;

  @media (max-width: 768px) {
    font-size: 2rem;
  }
`;

const SectionSubtitle = styled(motion.p)`
  font-size: 1.2rem;
  opacity: 0.9;
  max-width: 600px;
  margin: 0 auto;
  line-height: 1.6;

  @media (max-width: 768px) {
    font-size: 1rem;
  }
`;

const FilterSection = styled(motion.div)`
  background: rgba(255, 255, 255, 0.1);
  backdrop-filter: blur(20px);
  border-radius: 20px;
  padding: 2rem;
  margin-bottom: 3rem;
  border: 1px solid rgba(255, 255, 255, 0.2);
`;

const FilterRow = styled.div`
  display: flex;
  gap: 2rem;
  align-items: center;
  flex-wrap: wrap;

  @media (max-width: 768px) {
    flex-direction: column;
    gap: 1rem;
  }
`;

const SearchBox = styled.div`
  position: relative;
  flex: 1;
  min-width: 300px;

  @media (max-width: 768px) {
    min-width: 100%;
  }
`;

const SearchInput = styled.input`
  width: 100%;
  padding: 1rem 1rem 1rem 3rem;
  border: none;
  border-radius: 25px;
  background: rgba(255, 255, 255, 0.9);
  font-size: 1rem;
  outline: none;
  transition: all 0.3s ease;

  &:focus {
    background: white;
    box-shadow: 0 0 20px rgba(255, 255, 255, 0.3);
  }

  &::placeholder {
    color: #999;
  }
`;

const SearchIcon = styled(FiSearch)`
  position: absolute;
  left: 1rem;
  top: 50%;
  transform: translateY(-50%);
  color: #666;
  font-size: 1.2rem;
`;

const FilterButtons = styled.div`
  display: flex;
  gap: 1rem;
  flex-wrap: wrap;

  @media (max-width: 768px) {
    justify-content: center;
  }
`;

const FilterButton = styled(motion.button)`
  background: ${(props) =>
    props.active ? "rgba(255, 255, 255, 0.3)" : "rgba(255, 255, 255, 0.1)"};
  border: 1px solid rgba(255, 255, 255, 0.3);
  color: white;
  padding: 0.75rem 1.5rem;
  border-radius: 25px;
  font-weight: 500;
  cursor: pointer;
  transition: all 0.3s ease;
  backdrop-filter: blur(10px);

  &:hover {
    background: rgba(255, 255, 255, 0.2);
    transform: translateY(-2px);
  }
`;

const ProductsGrid = styled(motion.div)`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(320px, 1fr));
  gap: 2rem;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    gap: 1.5rem;
  }
`;

const ProductCard = styled(motion.div)`
  background: rgba(255, 255, 255, 0.95);
  backdrop-filter: blur(20px);
  border-radius: 25px;
  overflow: hidden;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.2);
  border: 1px solid rgba(255, 255, 255, 0.3);
  transition: all 0.3s ease;
  cursor: pointer;

  &:hover {
    transform: translateY(-10px);
    box-shadow: 0 20px 40px rgba(0, 0, 0, 0.3);
  }
`;

const ProductImage = styled.div`
  position: relative;
  height: 250px;
  background: linear-gradient(135deg, #f5f7fa 0%, #c3cfe2 100%);
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    transition: transform 0.3s ease;
  }

  &:hover img {
    transform: scale(1.1);
  }
`;

const SaleBadge = styled.div`
  position: absolute;
  top: 1rem;
  left: 1rem;
  background: #ff4757;
  color: white;
  padding: 0.5rem 1rem;
  border-radius: 15px;
  font-size: 0.8rem;
  font-weight: 600;
  z-index: 2;
`;

const StockBadge = styled.div`
  position: absolute;
  top: 1rem;
  right: 1rem;
  background: ${(props) =>
    props.inStock > 10 ? "#2ed573" : props.inStock > 0 ? "#ffa502" : "#ff4757"};
  color: white;
  padding: 0.5rem 1rem;
  border-radius: 15px;
  font-size: 0.8rem;
  font-weight: 600;
  z-index: 2;
`;

const ProductInfo = styled.div`
  padding: 1.5rem;
`;

const ProductCategory = styled.div`
  color: #667eea;
  font-size: 0.9rem;
  font-weight: 500;
  margin-bottom: 0.5rem;
`;

const ProductName = styled.h3`
  font-size: 1.2rem;
  font-weight: 700;
  color: #333;
  margin-bottom: 0.5rem;
  line-height: 1.3;
`;

const ProductDescription = styled.p`
  color: #666;
  font-size: 0.9rem;
  line-height: 1.5;
  margin-bottom: 1rem;
`;

const ProductFeatures = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
  margin-bottom: 1rem;
`;

const FeatureTag = styled.span`
  background: rgba(102, 126, 234, 0.1);
  color: #667eea;
  padding: 0.25rem 0.75rem;
  border-radius: 15px;
  font-size: 0.8rem;
  font-weight: 500;
`;

const PriceSection = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 1rem;
`;

const PriceGroup = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
`;

const SalePrice = styled.span`
  font-size: 1.5rem;
  font-weight: 700;
  color: #2ed573;
`;

const OriginalPrice = styled.span`
  font-size: 1rem;
  color: #999;
  text-decoration: line-through;
`;

const Discount = styled.span`
  background: #ff4757;
  color: white;
  padding: 0.25rem 0.5rem;
  border-radius: 10px;
  font-size: 0.8rem;
  font-weight: 600;
`;

const StockInfo = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
  margin-bottom: 1rem;
  font-size: 0.9rem;
  color: #666;
`;

const AddToCartButton = styled(motion.button)`
  width: 100%;
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  border: none;
  color: white;
  padding: 1rem;
  border-radius: 15px;
  font-weight: 600;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
  transition: all 0.3s ease;
  box-shadow: 0 4px 15px rgba(102, 126, 234, 0.3);

  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 8px 25px rgba(102, 126, 234, 0.4);
  }

  &:disabled {
    background: #ccc;
    cursor: not-allowed;
    transform: none;
    box-shadow: none;
  }
`;

const NoProducts = styled(motion.div)`
  text-align: center;
  color: white;
  padding: 3rem;

  h3 {
    font-size: 1.5rem;
    margin-bottom: 1rem;
  }

  p {
    opacity: 0.8;
  }
`;

const Products = ({ addToCart }) => {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All");

  const filteredProducts = useMemo(() => {
    return products.filter((product) => {
      const matchesSearch =
        product.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        product.description.toLowerCase().includes(searchTerm.toLowerCase());
      const matchesCategory =
        selectedCategory === "All" || product.category === selectedCategory;
      return matchesSearch && matchesCategory;
    });
  }, [searchTerm, selectedCategory]);

  const allCategories = ["All", ...categories.map((cat) => cat.name)];

  const calculateDiscount = (original, sale) => {
    return Math.round(((original - sale) / original) * 100);
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const cardVariants = {
    hidden: {
      opacity: 0,
      y: 50,
      scale: 0.9,
    },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: 0.5,
        ease: "easeOut",
      },
    },
  };

  return (
    <ProductsContainer id="products">
      <Container>
        <SectionHeader>
          <SectionTitle
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            Our Premium Products
          </SectionTitle>
          <SectionSubtitle
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
          >
            Discover our carefully curated collection of spiritual and aromatic
            products
          </SectionSubtitle>
        </SectionHeader>

        <FilterSection
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          viewport={{ once: true }}
        >
          <FilterRow>
            <SearchBox>
              <SearchIcon />
              <SearchInput
                type="text"
                placeholder="Search products..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
            </SearchBox>

            <FilterButtons>
              {allCategories.map((category) => (
                <FilterButton
                  key={category}
                  active={selectedCategory === category}
                  onClick={() => setSelectedCategory(category)}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  {category}
                </FilterButton>
              ))}
            </FilterButtons>
          </FilterRow>
        </FilterSection>

        <AnimatePresence>
          {filteredProducts.length > 0 ? (
            <ProductsGrid
              variants={containerVariants}
              initial="hidden"
              animate="visible"
              key={`${searchTerm}-${selectedCategory}`}
            >
              {filteredProducts.map((product) => (
                <ProductCard
                  key={product.id}
                  variants={cardVariants}
                  whileHover={{ scale: 1.02 }}
                  layout
                >
                  <ProductImage>
                    <img src={product.image} alt={product.name} />
                    {product.originalPrice > product.salePrice && (
                      <SaleBadge>
                        {calculateDiscount(
                          product.originalPrice,
                          product.salePrice
                        )}
                        % OFF
                      </SaleBadge>
                    )}
                    <StockBadge inStock={product.inStock}>
                      {product.inStock > 0
                        ? `${product.inStock} in stock`
                        : "Out of stock"}
                    </StockBadge>
                  </ProductImage>

                  <ProductInfo>
                    <ProductCategory>{product.category}</ProductCategory>
                    <ProductName>{product.name}</ProductName>
                    <ProductDescription>
                      {product.description}
                    </ProductDescription>

                    <ProductFeatures>
                      {product.features.map((feature, index) => (
                        <FeatureTag key={index}>{feature}</FeatureTag>
                      ))}
                    </ProductFeatures>

                    <PriceSection>
                      <PriceGroup>
                        <SalePrice>₹{product.salePrice}</SalePrice>
                        {product.originalPrice > product.salePrice && (
                          <OriginalPrice>
                            ₹{product.originalPrice}
                          </OriginalPrice>
                        )}
                      </PriceGroup>
                      {product.originalPrice > product.salePrice && (
                        <Discount>
                          Save ₹{product.originalPrice - product.salePrice}
                        </Discount>
                      )}
                    </PriceSection>

                    <StockInfo>
                      <span>Available: {product.inStock}</span>
                      <span>•</span>
                      <span>Sold: {product.sold}</span>
                    </StockInfo>

                    <AddToCartButton
                      onClick={() => addToCart(product)}
                      disabled={product.inStock === 0}
                      whileHover={{ scale: product.inStock > 0 ? 1.02 : 1 }}
                      whileTap={{ scale: product.inStock > 0 ? 0.98 : 1 }}
                    >
                      <FiShoppingCart />
                      {product.inStock > 0 ? "Add to Cart" : "Out of Stock"}
                    </AddToCartButton>
                  </ProductInfo>
                </ProductCard>
              ))}
            </ProductsGrid>
          ) : (
            <NoProducts
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
            >
              <h3>No products found</h3>
              <p>Try adjusting your search or filter criteria</p>
            </NoProducts>
          )}
        </AnimatePresence>
      </Container>
    </ProductsContainer>
  );
};

export default Products;
