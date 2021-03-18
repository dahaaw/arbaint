import React, {useState} from 'react';
import {Row, Col, Form, Button} from 'react-bootstrap';
import {MolModal} from '../';
import {useDispatch, useSelector} from 'react-redux';
import {login, showModal} from '../../../redux/reducer/auth/auth.action';

const Login = () => {
    const dispatch = useDispatch();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleEmail = () => (e) => {
        setEmail(e.target.value)
    }
    const handlePassword = () => (e) => {
        setPassword(e.target.value)
    }
    const handleSubmit = () => (e) => {    
        // console.log(email)
        // console.log(password)
        dispatch(login({email,password}));
    }

    const handleRegister = ()  => {
        dispatch(showModal('REGISTER', true));
        dispatch(showModal('LOGIN', false));
    }

    const {showLogin} = useSelector(state => state.auth);
    return (
        <MolModal type='LOGIN' show={showLogin}>
            <Row >
                <Col>
                    <div className="text-center my-3">
                        <h3>Login</h3>
                    </div>
                    <Form>
                        <Form.Group controlId="formBasicEmail">
                            <Form.Label>Username / Email</Form.Label>
                            <Form.Control type="email" placeholder="Username atau Email" onKeyUp={handleEmail()}/>
                        </Form.Group>

                        <Form.Group controlId="formBasicPassword">
                            <Form.Label >Password</Form.Label>
                            <Form.Control type="password" placeholder="Password" onKeyUp={handlePassword()}/>
                        </Form.Group>
                        {/* <Form.Group controlId="formBasicCheckbox">
                            <Form.Check type="checkbox" label="Check me out" />
                        </Form.Group> */}
                        <Row className="mt-4 mb-3">
                            <Col>
                                <Button variant="text" type="button" onClick={handleRegister}> Daftar</Button>                            
                            </Col>
                            <Col>
                                <Button variant="outline-primary" className="float-right" type="button" onClick={handleSubmit()}>
                                    Login
                                </Button>
                            </Col>
                        </Row>
                    </Form>
                </Col>
            </Row>
        </MolModal>
        );

}

export default Login;
