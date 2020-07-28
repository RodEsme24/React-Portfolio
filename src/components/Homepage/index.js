import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import logo from './esme.jpg';
import './styles.css'
function Homepage() {
    return (
<Container className="flex-grow-1 center-vert">
  <Row className="info-env no-gutters">
    <Col sm={3} className="p-3">
      <img src={logo} alt="my face" className="img-fluid"/>
    </Col>
    <Col sm={9} className="p-5">
      <span className="enphasis">Hello, I'm Esme!</span><br/> I am 28 years old woman who has spent the last 7.5 years working as trauma medical assistant for Sonoran Orthopaedic Trauma surgeons. Fresh out of school I was nervous to start in Trauma but through hard work and dedication I was promoted to Medical Assistant coordinator and have helped the practice establish their satellite offices around the valley. The job itself is very rewarding but I wanted a new challenge and coding is providing just that. I have now finished the coding bootcamp from UofA. It has not been easy but through hard work and perseverance I prevailed once again. rodriguezesme24@gmail.com 602.881.8945
602.881.8945
</Col>
  </Row>
  </Container>
    )
   
    }
  
export default Homepage;