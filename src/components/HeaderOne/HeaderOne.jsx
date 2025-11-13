import React from 'react'
import { Navbar, Nav, Container, Form, InputGroup } from "react-bootstrap";
import { FaSearch, FaUser, FaTruck, FaHeart, FaShoppingBag } from "react-icons/fa";
import "./HeaderOne.css"

const HeaderOne = () => {
  return (
<>
<Navbar bg="white" expand="lg" className="header-top">
<Container className='d-flex justify-content-between align-items-center'>

<div style={{width:"150px"}}></div>

<Navbar.Brand href="/" className="header-logo text-center mx-auto fw-bold fs-4">
  <img src='/images/logo.svg' alt='Bonanza Satrangi' style={{height:"40px"}}/>
</Navbar.Brand>
<div className='d-flex align-items-center gap-3 header-search'>
  
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
</Container>
</Navbar>

<Navbar bg='white' expand='md' className='border-bottom py-2'>
<Container>
  <Nav className='mx-auto fw-semibold text-uppercase small'>
    <Nav.Link href='#' className='text-danger'>Sale</Nav.Link>
    <Nav.Link href='#'>Ready To wear</Nav.Link>
    <Nav.Link href='#'>Unstitched</Nav.Link>
    <Nav.Link href='#'>Beauty</Nav.Link>
    <Nav.Link href='#'>Fragrances</Nav.Link>
    <Nav.Link href='#'>Men</Nav.Link>
    <Nav.Link href='#'>Sweaters <sup className='text-danger fw-bold'>New</sup>
    </Nav.Link>
    <Nav.Link href='#'>Kids</Nav.Link>
    <Nav.Link href='#'>Socks</Nav.Link>
    <Nav.Link href='#' className='fw-bold'>Festive Edit</Nav.Link>
  </Nav>
</Container>
</Navbar>
</>
  )
}

export default HeaderOne
