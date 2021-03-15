import {Nav, Navbar, NavDropdown, Container, Button} from 'react-bootstrap';
import {useDispatch} from 'react-redux';
import {useSelector} from 'react-redux';
import {showModal} from '../redux/reducer/auth/auth.action';

import {Login, Register} from './molecule'

const NavbarComponent = () => {
    const global = useSelector(state => state.authReducer);
    
    const dispatch = useDispatch();
    
    const handleBLogin = () => {
        dispatch(showModal('LOGIN',true));
    }
    const handleBRegister = () => {
        dispatch(showModal('REGISTER', true));
    }
    return (
        <>
        <Navbar variant="dark" expand="lg">
            <Container>
                <Navbar.Brand href="#home"><strong>Haiwah</strong></Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="mr-auto">
                        <Nav.Link href="#home">Home</Nav.Link>
                        <Nav.Link href="#link">Link</Nav.Link>
                        <NavDropdown title="Dropdown" id="basic-nav-dropdown">
                            <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
                            <NavDropdown.Divider />
                            <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
                        </NavDropdown>
                    </Nav>
                    <div className="float-right">
                        <Button onClick={handleBLogin}>
                            Login
                        </Button>
                        <Button onClick={handleBRegister}>
                            Register
                        </Button>
                    </div>
                </Navbar.Collapse>
            </Container>
        </Navbar>
        {global.showLogin && <Login />}
        {global.showRegister && <Register />}
        </>
    )
}

export default NavbarComponent;  