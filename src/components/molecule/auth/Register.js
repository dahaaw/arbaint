import React, {useState} from 'react';
import {Row, Col, Form} from 'react-bootstrap';
import {Modal, Button} from 'antd';
import {useDispatch, useSelector} from 'react-redux';
import {showModal, register} from '../../../redux/reducer/auth/auth.action';
import {setLoading} from '../../../redux/reducer/general/general.action';

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
        dispatch(setLoading(true))
        e.preventDefault();
        const data = {email,username,fullname,password,repassword,birthdate:'1994-10-04',gender:'L'};
        dispatch(register(data));
    }
    const handleCancel = () => {
        dispatch(showModal('REGISTER',false))
    };
    const glob = useSelector(state => state);
    const {showRegister} = glob.auth;
    const {loading} = glob.general;
    return (
        <Modal
            title="REGISTER"
            centered
            visible={showRegister}
            onOk={handleRegister}
            onCancel={handleCancel}
            footer={[
            <Button key="back" onClick={handleLogin} className="float-left">
                Login
            </Button>,
            <Button key="submit" loading={loading} type="primary" onClick={handleRegister}>
                Register
            </Button>,
            ]}
        >
            <Row>
                <Col>
                <Form>
                    <Form.Group controlId="username">
                        <Form.Label>Username</Form.Label>
                        {/* <Form.Text className="text-danger float-right">
                            usenam sudah terdaftar
                        </Form.Text> */}
                        <Form.Control size="sm" type="username" placeholder="Username" onChange={(e) => {setUsername(e.target.value)}}/>
                    </Form.Group>

                    <Form.Group controlId="email">
                        <Form.Label>Alamat Email</Form.Label>
                        {/* <Form.Text className="text-danger float-right">
                            email sudah terdaftar
                        </Form.Text> */}
                        <Form.Control size="sm" type="email" placeholder="Email aktif" onChange={(e) => {setEmail(e.target.value)}}/>
                    </Form.Group>

                    <Form.Group controlId="fullname">
                        <Form.Label>Nama lengkap</Form.Label>
                        {/* <Form.Text className="text-danger float-right">
                            usenam sudah terdaftar
                        </Form.Text> */}
                        <Form.Control size="sm" type="text" placeholder="Nama lengkap" onChange={(e) => {setFullname(e.target.value)}}/>
                    </Form.Group>

                    <Form.Group controlId="password">
                        <Form.Label>Password</Form.Label>
                        <Form.Control size="sm" type="password" placeholder="Password" onChange={(e) => {setPassword(e.target.value)}}/>
                    </Form.Group>

                    <Form.Group controlId="repassword">
                        <Form.Label>Konfirmasi Password</Form.Label>
                        <Form.Control size="sm" type="password" placeholder="Konfirmasi password" onChange={(e) => {setRepassword(e.target.value)}}/>
                    </Form.Group>
                    
                </Form>   
                </Col>
            </Row>
        </Modal>
    );
};

export default Register;
