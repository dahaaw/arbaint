import React, {useState} from 'react';
import {Row, Col, Form} from 'react-bootstrap';
import {Modal, Button} from 'antd';
import {useDispatch, useSelector} from 'react-redux';
import {login, showModal} from '../../../redux/reducer/auth/auth.action';
import {setLoading} from '../../../redux/reducer/general/general.action';

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
    const handleSubmit = (e) => {    
        // console.log(password)
        dispatch(setLoading(true))
        dispatch(login({email,password}));
    }

    const handleRegister = ()  => {
        dispatch(showModal('REGISTER', true));
        dispatch(showModal('LOGIN', false));
    }
    const handleCancel = () => {
        dispatch(showModal('LOGIN',false))
    };

    const state = useSelector(state => state);
    const {showLogin} = state.auth
    const {loading} = state.general
    return (
        <Modal
            title='LOGIN'
            centered
            visible={showLogin}
            // onOk={handleSubmit}
            onCancel={handleCancel}
            footer={[
            <Button key="back" onClick={handleRegister} className="float-left">
                Register
            </Button>,
            <Button key="submit" loading={loading} type="primary" onClick={handleSubmit}>
                Login
            </Button>,
            ]}
        >
            <Row >
                <Col>
                    <Form>
                        <Form.Group controlId="formBasicEmail">
                            <Form.Label>Username / Email</Form.Label>
                            <Form.Control size="sm" type="email" placeholder="Username atau Email" onKeyUp={handleEmail()}/>
                        </Form.Group>

                        <Form.Group controlId="formBasicPassword">
                            <Form.Label >Password</Form.Label>
                            <Form.Control size="sm" type="password" placeholder="Password" onKeyUp={handlePassword()}/>
                        </Form.Group>
                        {/* <Form.Group controlId="formBasicCheckbox">
                            <Form.Check type="checkbox" label="Check me out" />
                        </Form.Group> */}
                    </Form>
                </Col>
            </Row>
        </Modal>
        // <MolModal 
        //     type='LOGIN' 
        //     show={showLogin}>
            
        // </MolModal>
        );
}

export default Login;
