import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useParams, useNavigate } from 'react-router-dom';
import { Container, Row, Col, Button, Image, Form, InputGroup } from 'react-bootstrap';
import { FiArrowLeft, FiPlus, FiMinus, FiHeart, FiShare2, FiFacebook, FiTwitter, FiInstagram } from 'react-icons/fi';
import './ProductDetails.css';

const ProductDetails = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { id } = useParams();
  const products = useSelector((state) => state.products);
  const [quantity, setQuantity] = useState(1);
  
  const product = products.find((p) => p.productId === parseInt(id));
  
  if (!product) {
    return (
      <Container className="py-5 text-center">
        <h2>Product not found</h2>
        <Button variant="outline-dark" onClick={() => navigate(-1)} className="mt-3">
          <FiArrowLeft className="me-2" /> Back to Shop
        </Button>
      </Container>
    );
  }

  const handleAddToCart = () => {
    const cartItem = {
      id: product.productId || Date.now(),
      productId: product.productId,
      productImg: mainImage,
      productName: product.productName,
      productPrice: product.productPrice,
      productCategory: product.productCategory,
      quantity: quantity
    };
    
    console.log('Adding to cart:', cartItem);
    
    dispatch({
      type: 'ADD_TO_CART',
      payload: cartItem
    });
  };

  const incrementQuantity = () => setQuantity(prev => prev + 1);
  const decrementQuantity = () => setQuantity(prev => (prev > 1 ? prev - 1 : 1));

  // Function to get the correct image path
  const getImagePath = (imgPath) => {
    if (!imgPath) return '/images/placeholder.jpg';
    // If it's already a full URL or starts with /, return as is
    if (imgPath.startsWith('http') || imgPath.startsWith('/')) {
      return imgPath;
    }
    // Remove leading ./ if it exists and ensure it starts with a slash
    const cleanPath = imgPath.startsWith('./') ? imgPath.substring(2) : imgPath;
    return `/${cleanPath.replace(/^\/+/, '')}`;
  };

  // Get main product image
  const mainImage = getImagePath(product.productImg);
  
  // Log the image path for debugging
  console.log('Product image path:', mainImage);

  return (
    <Container className="py-5">
      <Button 
        variant="link" 
        onClick={() => navigate(-1)} 
        className="text-dark mb-4 d-flex align-items-center p-0"
      >
        <FiArrowLeft className="me-2" /> Back to Shop
      </Button>
      
      <Row className="g-4">
        {/* Product Image */}
        <Col lg={6}>
          <div className="product-image mb-4">
            <div style={{ 
              height: '500px', 
              display: 'flex', 
              alignItems: 'center', 
              justifyContent: 'center',
              backgroundColor: '#f8f9fa',
              borderRadius: '8px',
              overflow: 'hidden',
              padding: '20px'
            }}>
              <img 
                src={mainImage} 
                alt={product.productName}
                style={{ 
                  maxHeight: '100%', 
                  maxWidth: '100%',
                  objectFit: 'contain'
                }}
                onError={(e) => {
                  e.target.onerror = null;
                  e.target.src = '/images/placeholder.jpg';
                }}
              />
            </div>
          </div>
        </Col>
        
        {/* Product Details */}
        <Col lg={6}>
          <h1 className="mb-3">{product.productName}</h1>
          <p className="text-muted mb-4">SKU: {product.productId}</p>
          
          <div className="price-section mb-4">
            <h3 className="text-danger">PKR {product.productPrice?.toLocaleString()}</h3>
            <p className="text-success mb-0">In Stock</p>
          </div>
          
          <p className="mb-4">
            {product.productDescription || 'Premium quality product with the finest materials. Perfect for any occasion.'}
          </p>
          
          
          <div className="quantity-selector mb-4">
            <h6>Quantity</h6>
            <div className="d-flex align-items-center" style={{ maxWidth: '150px' }}>
              <Button 
                variant="outline-secondary" 
                onClick={decrementQuantity}
                className="rounded-0"
              >
                <FiMinus />
              </Button>
              <Form.Control 
                type="number" 
                value={quantity}
                onChange={(e) => setQuantity(Math.max(1, parseInt(e.target.value) || 1))}
                className="text-center rounded-0"
                min="1"
                style={{ borderLeft: 'none', borderRight: 'none' }}
              />
              <Button 
                variant="outline-secondary" 
                onClick={incrementQuantity}
                className="rounded-0"
              >
                <FiPlus />
              </Button>
            </div>
          </div>
          
          <div className="d-flex gap-3 mb-4">
            <Button 
              variant="dark" 
              size="lg" 
              className="flex-grow-1"
              onClick={handleAddToCart}
            >
              Add to Cart
            </Button>
            <Button variant="outline-dark" size="lg">
              <FiHeart size={20} />
            </Button>
          </div>
          
          <div className="product-meta mb-4">
            <div className="d-flex align-items-center mb-2">
              <strong className="me-2">Category:</strong>
              <span>{product.productCategory || 'N/A'}</span>
            </div>
            <div className="d-flex align-items-center">
              <strong className="me-2">Share:</strong>
              <div className="d-flex gap-2">
                <Button variant="link" className="p-0 text-dark">
                  <FiFacebook size={20} />
                </Button>
                <Button variant="link" className="p-0 text-dark">
                  <FiTwitter size={20} />
                </Button>
                <Button variant="link" className="p-0 text-dark">
                  <FiInstagram size={20} />
                </Button>
              </div>
            </div>
          </div>
        </Col>
      </Row>
      
      {/* Product Description & Details */}
      <Row className="mt-5">
        <Col>
          <h4 className="mb-4">Product Description</h4>
          <p>
            {product.longDescription || 'This premium product is crafted with attention to detail and made from the finest materials. ' + 
            'Designed for comfort and style, it is perfect for any occasion. The product features a modern design ' +
            'that combines both functionality and aesthetics, making it a great addition to your collection.'}
          </p>
          
          <h5 className="mt-4 mb-3">Product Details</h5>
          <ul className="list-unstyled">
            <li><strong>Material:</strong> 100% Premium Quality</li>
            <li><strong>Color:</strong> As shown in the images</li>
            <li><strong>Care Instructions:</strong> Machine wash cold, gentle cycle</li>
            <li><strong>Origin:</strong> Made in Pakistan</li>
          </ul>
        </Col>
      </Row>
    </Container>
  );
};

export default ProductDetails;
