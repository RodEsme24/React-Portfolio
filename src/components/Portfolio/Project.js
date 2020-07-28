import React from "react";
import { Container, Row, Col } from 'react-bootstrap';
import proj2banner from './images.jpeg'

function Project(props) {
let banners = {
    proj2banner
}
  return (
    <Row className="info-env no-gutters m-5">
    <Col sm={3} className="p-3">
        <img src={banners[props.info.img]} alt="my face" className="img-fluid"/>
    </Col>
    <Col sm={9} className="p-5">
        <span className="enphasis">{props.info.title}</span><br/>
        <p>{props.info.text}</p>
    </Col>
  </Row>
  )
}

export default Project;