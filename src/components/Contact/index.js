import React from 'react';
import { Container, Row, Col, Form, Button } from 'react-bootstrap';


function Contact() {
    return (
        <Container className="flex-grow-1 center-vert">
            <Row className="info-env no-gutters w-100">

                <Col sm={12} className="p-5 text-center">
                    <Form>
                        <Row className="justify-content-center m-1">
                            <Form.Label>First Name</Form.Label>
                            <Form.Control placeholder="First name" />
                        </Row>
                        <Row className="justify-content-center m-1">
                            <Form.Label>Last Name</Form.Label>
                            <Form.Control placeholder="Last name" />
                        </Row>
                        <Row className="justify-content-center m-1">
                            <Form.Label>Email address</Form.Label>
                            <Form.Control type="email" placeholder="name@example.com" />
                        </Row>
                        <Row className="justify-content-center m-1">
                            <Form.Label>Message</Form.Label>
                            <Form.Control as="textarea" rows="3" />
                        </Row>
                    <Row className="justify-content-center">
                    <Button variant="dark">Dark</Button>
                        </Row>
                    </Form>
                </Col>
            </Row>

        </Container>
    )

}

export default Contact;