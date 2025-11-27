import React, { useState, useEffect } from 'react';
import { Navbar, Nav, Container, Form, InputGroup, Badge, Offcanvas } from "react-bootstrap";
import { FiSearch, FiUser, FiTruck, FiHeart, FiShoppingBag } from "react-icons/fi";
import "./HeaderOne.css";
import { Link, NavLink } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import Cart from '../Cart/Cart';

const HeaderOne = () => {
  const dispatch = useDispatch();
  const cart = useSelector((state) => state.cart || { count: 0, items: [] });
  
  const [showCart, setShowCart] = useState(false);

  const toggleCart = () => setShowCart(!showCart);
  const closeCart = () => setShowCart(false);

  useEffect(() => {
    console.log('Current cart state:', cart);
  }, [cart]);

  return (
    <div className="header-container">
      <Cart show={showCart} handleClose={closeCart} />
      {/* Top Navigation Bar */}
      <Navbar bg="white" expand="lg" className="header-top" style={{ width: "95%" }}>
        <Container className="d-flex justify-content-between align-items-center">
          <div style={{ width: "150px" }}></div>
          <Navbar.Brand as={Link} to='/' className="header-logo text-center mx-auto fw-bold fs-4" style={{ zIndex: 1050 }}>
            <img 
              src='/images/logo.svg' 
              alt='Bonanza Satrangi' 
              style={{ 
                height: "45px",
                position: 'relative',
                zIndex: 1051
              }} 
            />
          </Navbar.Brand>
          
          <div className='d-flex align-items-center gap-4 header-actions'>
            <div className='position-relative search-container'>
              <InputGroup style={{ width: '200px' }}>
                <Form.Control 
                  type='text' 
                  placeholder='Search' 
                  className='border-0 border-bottom rounded-0 shadow-none'
                />
                <FiSearch className='search-icon' />
              </InputGroup>
            </div>
            
            <div className='nav-icons-container'>
              <FiUser title='Account' className='nav-icon' />
              <FiTruck title='Orders' className='nav-icon' />
              <Nav.Link as={Link} to="/wishlist" className="nav-icon">
                <FiHeart size={20} />
              </Nav.Link>
              <Nav.Link className="nav-icon position-relative" onClick={toggleCart} style={{ cursor: 'pointer' }}>
                <FiShoppingBag size={20} />
                {cart.count > 0 && (
                  <Badge 
                    bg="dark" 
                    className="position-absolute top-0 start-100 translate-middle rounded-circle"
                    style={{ fontSize: '0.6rem', padding: '0.25rem 0.4rem' }}
                  >
                    {cart.count}
                  </Badge>
                )}
              </Nav.Link>

            </div>
          </div>
        </Container>
      </Navbar>

      {/* Bottom Navigation Bar */}
      <Navbar bg='white' expand='md' className='border-bottom py-2' style={{ width: "95%" }}>
        <Container style={{ fontSize: "18px" }}>
          <Nav className='mx-auto fw-semibold text-uppercase small lowerNavbar'>
            <Nav.Link as={NavLink} to="/sale" className='text-danger'>Sale</Nav.Link>
            <Nav.Link as={NavLink} to='/newArrivals'>New Arrivals</Nav.Link>
            <Nav.Link as={NavLink} to='/ReadyToWear'>Ready To Wear</Nav.Link>
            <Nav.Link as={NavLink} to='/unstitched'>Unstitched</Nav.Link>
            <Nav.Link as={NavLink} to='/beauty'>Beauty</Nav.Link>
            <Nav.Link as={NavLink} to='/fragrances'>Fragrances</Nav.Link>
            <Nav.Link as={NavLink} to='/men'>Men</Nav.Link>
            <Nav.Link as={NavLink} to='/sweaters'>Sweaters <sup className='text-danger fw-bold'>New</sup></Nav.Link>
            <Nav.Link as={NavLink} to='/kids'>Kids</Nav.Link>
            <Nav.Link as={NavLink} to='/socks'>Socks</Nav.Link>
            <Nav.Link as={NavLink} to='/FestiveEdit' className='fw-bold'>Festive Edit</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
    </div>
  );
};

export default HeaderOne;