import React, { useState, useContext } from "react";
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { BsSearch, IconName } from "react-icons/bs";

function NavigationBar() {
  const [searchTerm, setSearchTerm] = useState("");

  return (
    <Navbar className="gap-3 px-3" bg="light" variant = "light" expand="lg">
      <Container>
      <Navbar.Brand href="#">
      <img
        src="https://cdn.sstatic.net/Sites/stackoverflow/Img/apple-touch-icon@2.png?v=73d79a89bded"
        alt="logo"
        height="80"
      />
      Company 
    </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="flex-grow-1 justify-content-evenly">
            <Nav.Link href="/debate_list">Shirts</Nav.Link>
            <Nav.Link href="#link">Pants</Nav.Link>
            <Nav.Link href="/debate_list">Sweaters</Nav.Link>
            <Nav.Link href="#link2">Shorts</Nav.Link>
            <Nav.Link href="#link3">Contact Us</Nav.Link>
          </Nav>
          {/* <Form className="d-flex" onSubmit={()=>console.log('search')}>
            <Form.Control
              type="search"
              placeholder="Search"
              className="me-2"
              aria-label="Search"
              onChange={(e) => setSearchTerm(e.target.value)}
              
            />
            <Button 
              variant="danger"
            >
              Search
            </Button>
          </Form> */}
        </Navbar.Collapse>
        <BsSearch/> 
      </Container>
      
    </Navbar>
  );
}

export default NavigationBar;
