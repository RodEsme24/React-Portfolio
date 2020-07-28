import React from 'react';
import { Button, Navbar, Nav, Form, FormControl } from 'react-bootstrap';

function Header(props) {
    return (
  <Navbar bg="dark" variant="dark">
    <Navbar.Brand href="#home">Esmeralda Rodriguez</Navbar.Brand>
    <Nav className="mr-auto">
      <Nav.Link onClick={() => {props.changePage('homepage')}}>About Me</Nav.Link>
      <Nav.Link onClick={() => {props.changePage('portfolio')}}>Portfolio</Nav.Link>
      <Nav.Link onClick={() => {props.changePage('contact')}}>Contact</Nav.Link>
      <Nav.Link onClick={() => {window.open('https://github.com/RodEsme24', '_blank')}}>Github</Nav.Link>
      <Nav.Link onClick={() => {window.open('https://linkedin.com/in/esmerrodriguez', '_blank')}}>LinkedIn</Nav.Link>
      <Nav.Link onClick={() => {window.open('https://rodesme24.github.io/portfolio-/Document43.pdf', '_blank')}}>Resume</Nav.Link>
    </Nav>
  </Navbar>
    )

  }

  export default Header;