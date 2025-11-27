import React, { useState } from 'react';
import { Offcanvas, Button, Row, Col } from 'react-bootstrap';
import { FiX, FiPlus, FiMinus, FiTrash2, FiEdit } from 'react-icons/fi';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import './Cart.css';

const Cart = ({ show, handleClose }) => {
  const dispatch = useDispatch();
  const cart = useSelector((state) => state.cart || { count: 0, items: [] });

  const handleIncrement = (item) => {
    dispatch({
      type: 'UPDATE_QUANTITY',
      payload: {
        id: item.id,
        quantity: item.quantity + 1
      }
    });
  };

  const handleDecrement = (item) => {
    if (item.quantity > 1) {
      dispatch({
        type: 'UPDATE_QUANTITY',
        payload: {
          id: item.id,
          quantity: item.quantity - 1
        }
      });
    } else {
      dispatch({
        type: 'REMOVE_FROM_CART',
        payload: { id: item.id }
      });
    }
  };

  const handleRemove = (itemId) => {
    dispatch({
      type: 'REMOVE_FROM_CART',
      payload: { id: itemId }
    });
  };

  const calculateTotal = () => {
    return cart.items.reduce((total, item) => {
      // Safely handle cases where price might be undefined or not a string
      const price = typeof item.productPrice === 'number' 
        ? item.productPrice 
        : parseFloat(String(item.productPrice || '0').replace(/[^0-9.-]+/g, '')) || 0;
      return total + (price * (item.quantity || 1));
    }, 0).toFixed(2);
  };

  // Format price to display with PKR and proper formatting
  const formatPrice = (price) => {
    if (!price) return 'PKR 0';
    const numericValue = parseFloat(String(price).replace(/[^0-9.-]+/g, '')) || 0;
    return `PKR ${numericValue.toLocaleString()}`;
  };

  // Function to get the correct image path
  const getImagePath = (imgPath) => {
    if (!imgPath) return '/images/placeholder.jpg';
    // If it's already a full URL or starts with /, return as is
    if (imgPath.startsWith('http') || imgPath.startsWith('/')) {
      return imgPath;
    }
    // Otherwise, ensure it starts with a slash
    return `/${imgPath.replace(/^\/+/, '')}`;
  };

  return (
    <Offcanvas show={show} onHide={handleClose} placement="end" className="cart-offcanvas">
      <Offcanvas.Header closeButton>
        <Offcanvas.Title>SHOPPING CART</Offcanvas.Title>
      </Offcanvas.Header>
      <Offcanvas.Body className="p-0 d-flex flex-column">
        <div className="cart-items flex-grow-1 overflow-auto">
          {cart.items.length === 0 ? (
            <div className="text-center p-5">
              <p>Your cart is empty</p>
              <Button variant="outline-dark" onClick={handleClose}>
                Continue Shopping
              </Button>
            </div>
          ) : (
            <>
              {cart.items.map((item) => (
                <div key={item.id} className="cart-item p-3 border-bottom">
                  <Row className="align-items-center">
                    <Col xs={3}>
                      <div style={{
                        width: '80px',
                        height: '80px',
                        backgroundColor: '#f8f9fa',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        borderRadius: '4px',
                        overflow: 'hidden'
                      }}>
                        <img 
                          src={getImagePath(item.productImg)} 
                          alt={item.productName || 'Product'} 
                          style={{ 
                            maxHeight: '100%',
                            maxWidth: '100%',
                            objectFit: 'contain',
                            padding: '5px'
                          }}
                          onError={(e) => {
                            console.log('Image failed to load:', e.target.src);
                            e.target.onerror = null;
                            e.target.src = '/images/placeholder.jpg';
                          }}
                        />
                      </div>
                    </Col>
                    <Col xs={9}>
                      <div className="d-flex justify-content-between">
                        <div>
                          <h6 className="mb-1">{item.productName || 'Product Name'}</h6>
                          <p className="mb-1 text-muted small">Category: {item.productCategory || 'N/A'}</p>
                          <p className="mb-2 fw-bold">{formatPrice(item.productPrice)}</p>
                        </div>
                        <Button 
                          variant="link" 
                          className="text-dark p-0"
                          onClick={() => handleRemove(item.id)}
                        >
                          <FiX size={20} />
                        </Button>
                      </div>
                      <div className="d-flex align-items-center justify-content-between">
                        <div className="quantity-selector d-flex align-items-center">
                          <Button 
                            variant="outline-secondary" 
                            size="sm" 
                            className="p-1"
                            onClick={() => handleDecrement(item)}
                          >
                            <FiMinus size={14} />
                          </Button>
                          <span className="mx-2">{item.quantity}</span>
                          <Button 
                            variant="outline-secondary" 
                            size="sm" 
                            className="p-1"
                            onClick={() => handleIncrement(item)}
                          >
                            <FiPlus size={14} />
                          </Button>
                        </div>
                        <div>
                          <Button variant="link" className="text-dark p-0 me-2">
                            <FiEdit size={16} />
                          </Button>
                          <Button 
                            variant="link" 
                            className="text-dark p-0"
                            onClick={() => handleRemove(item.id)}
                          >
                            <FiTrash2 size={16} />
                          </Button>
                        </div>
                      </div>
                    </Col>
                  </Row>
                </div>
              ))}
            </>
          )}
        </div>

        {cart.items.length > 0 && (
          <div className="border-top p-3">
            <div className="d-flex justify-content-between mb-3">
              <span>Subtotal</span>
              <span>{formatPrice(calculateTotal())}</span>
            </div>
            <div className="d-flex justify-content-between mb-3">
              <span>Shipping</span>
              <span>Calculated at checkout</span>
            </div>
            <div className="d-flex justify-content-between fw-bold mb-4">
              <span>Total</span>
              <span>{formatPrice(calculateTotal())}</span>
            </div>

            <div className="d-grid gap-2">
              <Button 
                as={Link} 
                to="/checkout" 
                variant="dark" 
                size="lg"
                className="mb-2"
                onClick={handleClose}
              >
                CHECKOUT
              </Button>
              <Button 
                variant="outline-dark" 
                size="lg"
                onClick={handleClose}
              >
                CONTINUE SHOPPING
              </Button>
            </div>
          </div>
        )}
      </Offcanvas.Body>
    </Offcanvas>
  );
};

export default Cart;