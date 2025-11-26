 import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { useDispatch } from 'react-redux';
import './ProductCard.css';

const ProductCard = ({product}) => {
  const [isHovered, setIsHovered] = useState(false);
  const dispatch = useDispatch();

  const handleAddToCart = () => {
    dispatch({ type: 'ADD_TO_CART', payload: product });
  };

  return (
    <Card 
      className="product-card"
      style={{ 
        width: "22%", 
        marginTop: "20px", 
        boxShadow: "0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)",
      }}
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
              style={{
                transition: 'all 0.3s ease',
                ':hover': {
                  backgroundColor: '#6c757d',
                  color: 'white',
                  borderColor: '#6c757d'
                }
              }}
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
