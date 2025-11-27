
import { Container, Row, Col, Form,  Nav } from "react-bootstrap";
import { FaInstagram, FaFacebook } from "react-icons/fa"; 
import "./CloneFooter.css"; 
import {  NavLink } from "react-router-dom";

const CloneFooter = () => {
  return (
    <footer className="site-footer mt-5 bg-light pt-4 border-top textdecoration-none">
      <Container fluid className="footer-top py-5">
        <Container>
          <Row className="gy-4">
            <Col xs={12} md={6} lg={3}>
              <h5 className="footer-title">CONTACT US</h5>
              <p className="mb-1">+92 21 111-244-266</p>
              <p className="mb-1">info@bonanzasatrangi.com</p>
              <small className="d-block">Customer Service</small>
              <small className="d-block">Mon–Sat: 9:30 AM – 10:00 PM PKT</small>
              <small className="d-block">Sun: 11:00 AM – 8:00 PM PKT</small>
              <div className="social-icons mt-2">
                <a href="https://www.facebook.com" target="_blank" rel="noreferrer" aria-label="facebook"><FaFacebook /></a>
                <a href="https://www.instagram.com" target="_blank" rel="noreferrer" aria-label="instagram" className="ms-3"><FaInstagram /></a>
              </div>
            </Col>

            <Col xs={12} md={6} lg={3} className="textdecoration-none text-dark">
              <h5 className="footer-title">INFORMATION</h5>
              <Nav className="flex-column">
                <Nav.Link as={NavLink} to='/AboutUs'>About Us</Nav.Link>
                <Nav.Link as={NavLink} to='/TrackYourOrder'>Track Your Order</Nav.Link>
                <Nav.Link as={NavLink} to='/ShippingInformation'>Shipping Information</Nav.Link>
                <Nav.Link as={NavLink} to='/StoreLocator'>Store Locator</Nav.Link>
                <Nav.Link as={NavLink} to='/TermsOfServices'>Terms of Service</Nav.Link>
              </Nav>
            </Col>

            <Col xs={12} md={6} lg={3}>
              <h5 className="footer-title">CUSTOMER CARE</h5>
              <Nav className="flex-column">
                <Nav.Link href="/contact">Contact Us</Nav.Link>
                <Nav.Link href="/privacy">Privacy Policy</Nav.Link>
                <Nav.Link href="/returns">Return & Exchange Policy</Nav.Link>
                <Nav.Link href="/faqs">FAQs</Nav.Link>
              </Nav>
            </Col>

            <Col xs={12} md={6} lg={3}>
              <h5 className="footer-title">NEWSLETTER SIGN UP</h5>
              <p className="small">Sign up to stay in the loop. Receive updates, access to exclusive deals and more.</p>
              <Form className="position-relative">
                <Form.Control
                  type="email"
                  placeholder="Enter email"
                  aria-label="Email address"
                  className="pe-5"
                />
                <button 
                  type="submit" 
                  className="position-absolute end-0 top-0 h-100 bg-transparent border-0 px-4"
                  style={{ cursor: 'pointer' }}
                  aria-label="Subscribe"
                >
                  →
                </button>
              </Form>
            </Col>
          </Row>
        </Container>
      </Container>

      <div className="footer-bottom py-3">
        <Container className="d-flex flex-column flex-md-row justify-content-between align-items-center">
          <div className="powered">
            Powered By <a href="https://siardigital.com" target="_blank" rel="noreferrer">SIAR</a>
          </div>

          <div className="d-flex align-items-center mt-2 mt-md-0">
            <div className="me-3 small">Select your currency</div>
            <select className="form-select form-select-sm">
              <option>PKR</option>
              <option>EUR</option>
              <option>USD</option>
              <option>GBP</option>
              <option>AED</option>
            </select>
          </div>
        </Container>
      </div>
    </footer>
  );
};

export default CloneFooter;
