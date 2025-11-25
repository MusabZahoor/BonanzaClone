import React from 'react';
import { Navbar, Nav, Container, Form, InputGroup } from "react-bootstrap";
import { FaSearch, FaUser, FaTruck, FaHeart, FaShoppingBag } from "react-icons/fa";
import "./HeaderOne.css";
import { Link, NavLink } from 'react-router-dom';
import { useSelector } from 'react-redux';

const HeaderOne = () => {
  const cartCount = useSelector((state) => state.cart?.count ?? 0);

  return (
    <div className="header-container">
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
                <FaSearch className='search-icon' />
              </InputGroup>
            </div>
            
            <div className='nav-icons-container'>
              <FaUser title='Account' className='nav-icon' />
              <FaTruck title='Orders' className='nav-icon' />
              <FaHeart title='Wishlist' className='nav-icon' />
              <div className='cart-icon-container'>
                <FaShoppingBag title='Cart' className='nav-icon' />
                {cartCount > 0 && (
                  <span className='cart-badge'>{cartCount}</span>
                )}
              </div>
            </div>
          </div>
        </Container>
      </Navbar>

      {/* Bottom Navigation Bar */}
      <Navbar bg='white' expand='md' className='border-bottom py-2' style={{ width: "95%" }}>
        <Container style={{ fontSize: "18px" }}>
          <Nav className='mx-auto fw-semibold text-uppercase small lowerNavbar'>
            <Nav.Link as={NavLink} to="/sale" className='text-danger'>Sale</Nav.Link>
            <Nav.Link as={NavLink} to='/ReadyToWear'>Ready To Wear</Nav.Link>
            <Nav.Link as={NavLink} to='/unstitched'>Unstitched</Nav.Link>
            <Nav.Link as={NavLink} to='/beauty'>Beauty</Nav.Link>
            <Nav.Link as={NavLink} to='/fragrances'>Fragrances</Nav.Link>
            <Nav.Link as={NavLink} to='/men'>Men</Nav.Link>
            <Nav.Link as={NavLink} to='/sweaters'>Sweaters <sup className='text-danger fw-bold'>New</sup></Nav.Link>
            <Nav.Link as={NavLink} to='/socks'>Socks</Nav.Link>
            <Nav.Link as={NavLink} to='/FestiveEdit' className='fw-bold'>Festive Edit</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
    </div>
  );
};

export default HeaderOne;
