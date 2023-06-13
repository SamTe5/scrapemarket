import React from 'react'
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Image from 'react-bootstrap/Image';
import { Link } from "react-router-dom";




function Navbarim() {

  const imgStyle = {
    width: '30px', // Örneğin, genişlik 100 piksel olsun
    height: 'auto', // Yükseklik otomatik olarak ayarlanacak
    
  };

  const linkText={
    textDecoration:"none",
    color:"black"
  }

  return (
    <Navbar expand="lg">
      <Container>
        <Navbar.Brand href="#">
          <Image src='https://cdn-icons-png.flaticon.com/128/3128/3128247.png' style={imgStyle}></Image>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0 w-100 justify-content-center"
            style={{ maxHeight: '100px' }}
            navbarScroll
          >
            <Nav.Link className='active' >
              <Link to="/" style={linkText}>Home</Link>
            </Nav.Link>
            <Nav.Link>
              <Link to="/Fruits" style={linkText}>Fruits</Link>
            </Nav.Link>
            <Nav.Link>
              <Link to="/Vegetable" style={linkText}>Vegetable</Link>
            </Nav.Link>
          </Nav>
          <Form className="d-flex">
            <Form.Control
              type="search"
              placeholder="Search"
              className="me-2"
              aria-label="Search"
            />
            <Button variant="outline-success">Search</Button>
          </Form>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  )
}

export default Navbarim