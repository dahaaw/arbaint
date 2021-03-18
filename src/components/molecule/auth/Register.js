import React, {useState} from 'react';
import {Row, Col, Form, Button} from 'react-bootstrap';
import {MolModal} from '../'
import {useDispatch, useSelector} from 'react-redux';
import {showModal, register} from '../../../redux/reducer/auth/auth.action';

const Register = () => {
    const [email, setEmail] = useState('');
    const [username, setUsername] = useState('');
    const [fullname, setFullname] = useState('');
    const [password, setPassword] = useState('');
    const [repassword, setRepassword] = useState('');

    const dispatch = useDispatch();
    const handleLogin = () => {
        dispatch(showModal('LOGIN', true));
        dispatch(showModal('REGISTER', false));
    }
    const handleRegister = (e) => {
        e.preventDefault();
        const data = {email,username,fullname,password,repassword,birthdate:'1994-10-04',gender:'L'};
        dispatch(register(data));
    }
    const {showRegister} = useSelector(state => state.auth);
    return (
        <MolModal type='REGISTER' show={showRegister}>
            <Row>
                <Col>
                <div className="text-center my-3">
                    <h3>Register</h3>
                </div>
                <Form>
                    <Form.Group controlId="username">
                        <Form.Label>Username</Form.Label>
                        {/* <Form.Text className="text-danger float-right">
                            usenam sudah terdaftar
                        </Form.Text> */}
                        <Form.Control type="username" placeholder="Username" onChange={(e) => {setUsername(e.target.value)}}/>
                    </Form.Group>

                    <Form.Group controlId="email">
                        <Form.Label>Alamat Email</Form.Label>
                        {/* <Form.Text className="text-danger float-right">
                            email sudah terdaftar
                        </Form.Text> */}
                        <Form.Control type="email" placeholder="Email aktif" onChange={(e) => {setEmail(e.target.value)}}/>
                    </Form.Group>

                    <Form.Group controlId="fullname">
                        <Form.Label>Nama lengkap</Form.Label>
                        {/* <Form.Text className="text-danger float-right">
                            usenam sudah terdaftar
                        </Form.Text> */}
                        <Form.Control type="text" placeholder="Nama lengkap" onChange={(e) => {setFullname(e.target.value)}}/>
                    </Form.Group>

                    <Form.Group controlId="password">
                        <Form.Label>Password</Form.Label>
                        <Form.Control type="password" placeholder="Password" onChange={(e) => {setPassword(e.target.value)}}/>
                    </Form.Group>

                    <Form.Group controlId="repassword">
                        <Form.Label>Konfirmasi Password</Form.Label>
                        <Form.Control type="password" placeholder="Konfirmasi password" onChange={(e) => {setRepassword(e.target.value)}}/>
                    </Form.Group>

                    <Row className="mt-4 mb-3">
                        <Col>
                            <Button variant="text" type="button" onClick={handleLogin}>Login</Button>                            
                        </Col>
                        <Col>
                            <Button variant="outline-primary" type="button" className="float-right" onClick={handleRegister}>
                                Daftar
                            </Button>
                        </Col>
                    </Row>
                    
                </Form>   
                </Col>
            </Row>
            </MolModal>
    );
};

export default Register;
