import React from 'react';
import { Button, Navbar, Nav,Form, FormControl } from 'react-bootstrap';
function Header(props) {
    return (
  <Navbar bg="dark" variant="dark">
    <Navbar.Brand href="#home">Esmeralda Rodriguez</Navbar.Brand>
    <Nav className="mr-auto">
      <Nav.Link href="#home">About Me</Nav.Link>
      <Nav.Link href="#features">Portfolio</Nav.Link>
      <Nav.Link href="#pricing">Contact</Nav.Link>
      <Nav.Link href="#pricing">Github</Nav.Link>
      <Nav.Link href="#pricing">LinkedIn</Nav.Link>
      <Nav.Link href="#pricing">Resume</Nav.Link>
    </Nav>
    
  </Navbar>
  

    )

  }

  export default Header;