import React, {useState} from 'react';
import {Row, Col, Form, Button} from 'react-bootstrap';
import {MolModal} from '../'
import {Link} from 'react-router-dom';

const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleEmail = () => (e) => {
        setEmail(e.target.value)
    }
    const handlePassword = () => (e) => {
        setPassword(e.target.value)
    }
    const handleSubmit = () => (e) => {     
        console.log(email)
        console.log(password)
    }
    return (
        <MolModal type='LOGIN'>
            <Row >
                <Col>
                    <div className="text-center">
                        <h3>Login</h3>
                    </div>
                    <Form>
                        <Form.Group controlId="formBasicEmail">
                            <Form.Label>Email address</Form.Label>
                            <Form.Control type="email" placeholder="Enter email" onKeyUp={handleEmail()}/>
                        </Form.Group>

                        <Form.Group controlId="formBasicPassword">
                            <Form.Label>Password</Form.Label>
                            <Form.Control type="password" placeholder="Password" onKeyUp={handlePassword()}/>
                        </Form.Group>
                        <Form.Group controlId="formBasicCheckbox">
                            <Form.Check type="checkbox" label="Check me out" />
                        </Form.Group>
                        <div>
                            <Button variant="primary" type="button" onClick={handleSubmit()}>
                                Submit
                            </Button>
                            <Link to="/register" className="text-muted float-right my-auto">daftar</Link>
                        </div>
                    </Form>
                </Col>
            </Row>
        </MolModal>
        );

}

export default Login;
