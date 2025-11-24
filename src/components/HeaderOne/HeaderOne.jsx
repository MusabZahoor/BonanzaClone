import React from 'react'
import { Navbar, Nav, Container, Form, InputGroup } from "react-bootstrap";
import { FaSearch, FaUser, FaTruck, FaHeart, FaShoppingBag } from "react-icons/fa";
import "./HeaderOne.css"
import { Link, NavLink } from 'react-router-dom';

const HeaderOne = () => {
  return (
< >
<Navbar bg="white" expand="lg" className="header-top wholeNavbar " style={{width:"95%"}}> 
<Container className='d-flex justify-content-between align-items-center'>

<div style={{width:"150px"}}></div>

<Navbar.Brand as={Link} to='/' className="header-logo text-center mx-auto fw-bold fs-4" >
  <img src='/images/logo.svg' alt='Bonanza Satrangi' style={{height:"45px"}}/>
</Navbar.Brand>
<div className='d-flex align-items-center gap-3 header-search'>

  <div className='d-flex' style={{gap:"10px", alignItems:"center",paddingTop:"35px"}}>
  <InputGroup style={{width:"180px"}}>
  <Form.Control type='text' placeholder='Search' className='border-0 border-bottom rounded-0 shadow-none'/>
  <FaSearch className='ms-1'/>
  </InputGroup>
  
  <FaUser size={18} title='Account'/>
  <FaTruck size={18} title='Orders'/>
  <FaHeart size={18} title='Wishlist'/>

  <div className='position-relative'>
    <FaShoppingBag size={18} title='Cart'/>
    <span className='position-absolute top-0 start-100 translate-middle badge' style={{fontSize:"0.65rem"}}>0</span>
  </div>
  </div>

  
</div>
</Container>
</Navbar>

<Navbar bg='white' expand='md' className='border-bottom py-2 wholeNavbar' style={{width:"95%"}}>
<Container style={{fontSize:"18px"}}>
  <Nav className='mx-auto fw-semibold text-uppercase small lowerNavbar'>
    <Nav.Link as={NavLink} to="/sale" className='text-danger'>Sale</Nav.Link>
    <Nav.Link as={NavLink} to='/ReadyToWear'>Ready To Wear</Nav.Link>
    <Nav.Link as={NavLink} to='/unstitched'>Unstitched</Nav.Link>
    <Nav.Link as={NavLink} to='/beauty'>Beauty</Nav.Link>
    <Nav.Link as={NavLink} to='/fragrances'>Fragrances</Nav.Link>
    <Nav.Link as={NavLink} to='/men'>Men</Nav.Link>
    <Nav.Link as={NavLink} to='/sweaters'>Sweaters <sup className='text-danger fw-bold'>New</sup>
    </Nav.Link>
    <Nav.Link as={NavLink} to='/kids'>Kids</Nav.Link>
    <Nav.Link as={NavLink} to='/socks'>Socks</Nav.Link>
    <Nav.Link as={NavLink} to='/FestiveEdit' className='fw-bold'>Festive Edit</Nav.Link>
  </Nav>
</Container>
</Navbar>
</>
  )
}

export default HeaderOne
