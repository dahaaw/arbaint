import React from 'react';
import {Row, Col, Form, Button} from 'react-bootstrap';
import {Link} from 'react-router-dom';
import {MolModal} from '../'

const Register = () => {
    return (

        <MolModal type='REGISTER'>
            <Row>
                <Col>
                <div className="text-center">
                    <h3>Register</h3>
                </div>
                <Form>
                    <Form.Group controlId="email">
                        <Form.Label>Alamat Email</Form.Label>
                        <Form.Control type="email" placeholder="Enter email" />
                        <Form.Text className="text-muted">
                        </Form.Text>
                    </Form.Group>

                    <Form.Group controlId="password">
                        <Form.Label>Password</Form.Label>
                        <Form.Control type="password" placeholder="Password" />
                    </Form.Group>

                    <Form.Group controlId="repassword">
                        <Form.Label>Password</Form.Label>
                        <Form.Control type="password" placeholder="Password" />
                    </Form.Group>

                    
                    <Button variant="primary" type="button" as={Link} to="/login">
                        Submit
                    </Button>
                </Form>   
                </Col>
            </Row>
            </MolModal>
    );
}

export default Register;
