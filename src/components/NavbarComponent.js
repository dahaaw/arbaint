import {Nav, Navbar, NavDropdown, Container, Button} from 'react-bootstrap';
import {useDispatch} from 'react-redux';
import {useSelector} from 'react-redux';
import {showModal} from '../redux/reducer/auth/auth.action';

import {Login, Register, NotifModal} from './molecule'

const NavbarComponent = () => {
    
    const global = useSelector(state => state);
    console.log(global);
    const auth = global.auth;
    const general = global.general;
    const dispatch = useDispatch();
    
    const handleBLogin = () => {
        dispatch(showModal('LOGIN',true));
    }
    const handleBRegister = () => {
        dispatch(showModal('REGISTER', true));
    }
    return (
        <>
        <Navbar variant="light" bg="transparent" expand="lg" className="py-3">
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
                    {!auth.logged &&
                    <div className="float-right row">
                        <div className="col" style={{cursor:'pointer'}} onClick={handleBLogin}>
                            Login
                        </div>
                        <div className="col" style={{cursor:'pointer'}} onClick={handleBRegister}>
                            Register
                        </div>
                    </div>
                    }
                </Navbar.Collapse>
            </Container>
        </Navbar>
        
        {!auth.logged && <Login />}
        {!auth.logged && <Register />}
        {general.notif && <NotifModal err={general.notif} />}
        </>
    )
}

export default NavbarComponent;  