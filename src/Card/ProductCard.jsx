 import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { useDispatch } from 'react-redux';
import './ProductCard.css';
import { useNavigate } from 'react-router-dom';

const ProductCard = ({product}) => {
  const [isHovered, setIsHovered] = useState(false);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleAddToCart = (e) => {
    e.stopPropagation(); // Stop event bubbling to prevent navigation
    e.preventDefault(); // Prevent default action
    dispatch({ 
      type: 'ADD_TO_CART', 
      payload: product 
    });
  };

  const handleCardClick = (e) => {
    // Only navigate if the click is not on the Add to Cart button or its children
    if (!e.target.closest('.add-to-cart-button')) {
      navigate(`/product/${product.productId}`);
    }
  };

  return (
    <Card 
      className="product-card text-decoration-none text-dark"
      style={{ 
        width: "22%", 
        marginTop: "20px", 
        boxShadow: "0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)",
        cursor: 'pointer'
      }}
      onClick={handleCardClick}
    >
      <div 
        className="image-container"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <Card.Img 
          variant="top" 
          src={product.productImg} 
          className={isHovered ? 'zoomed' : ''}
          alt={product.productName}
        />
      </div>
      <Card.Body>
        <div>
          <p>{product.productCategory}</p>
          <Card.Title>{product.productName}</Card.Title>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginTop: '10px' }}>
            <p style={{ margin: 0 }}>PKR {product.productPrice}</p>
            <Button 
              variant="outline-secondary" 
              onClick={handleAddToCart}
              className="add-to-cart-button"
              style={{
                transition: 'all 0.3s ease',
                zIndex: 2, // Ensure button is above the card
                position: 'relative' // For z-index to work
              }}
              onMouseOver={(e) => e.stopPropagation()}
            >
              Add to Cart
            </Button>
          </div>
        </div>
      </Card.Body>
    </Card>
  );
};

export default ProductCard;
