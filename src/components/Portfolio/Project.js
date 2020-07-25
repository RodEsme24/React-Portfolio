import React from "react";
import { Container, Row, Col } from 'react-bootstrap';


function Project(props) {
  return (
    <Row className="info-env no-gutters">
    <Col sm={3} className="p-3">
        <img src={props.info.img} alt="my face" className="img-fluid"/>
    </Col>
    <Col sm={9} className="p-5">
        <span className="enphasis">{props.info.title}</span><br/>
        <p>{props.info.text}</p>
    </Col>
  </Row>
  )
}

export default Project;