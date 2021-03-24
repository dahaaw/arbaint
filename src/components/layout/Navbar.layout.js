import {Nav, Navbar, NavDropdown, Container} from 'react-bootstrap';
import {useDispatch, useSelector} from 'react-redux';
import {showModal, setLogged} from '../../redux/reducer/auth/auth.action';
import Cookies from 'universal-cookie';

import {Login, Register, NotifModal} from '../molecule'
import { addNotif } from '../../redux/reducer/general/general.action';
import { Link } from 'react-router-dom';

const NavbarLayout = () => {
    const global = useSelector(state => state);
    console.log(global);
    const auth = global.auth;
    const general = global.general;
    const dispatch = useDispatch();
    const cookies = new Cookies();
    
    const handleBLogin = () => {        
        dispatch(showModal('LOGIN',true));
    }
    const handleBRegister = () => {
        dispatch(showModal('REGISTER', true));
    }

    const handleBLogout = () => {
        cookies.remove('token')
        dispatch(addNotif('success', 'berhasil logout'))
        dispatch(setLogged(false));
    }
    return (
        <>
        <Navbar variant="light" bg="white" expand="lg" fixed="top" style={{zIndex:10,height:'60px'}}>
            <Container>
                <Navbar.Brand as={Link} to="/"><strong>Haiwah</strong></Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav" className="justify-content-end">
                    <Nav>
                    {!auth.logged && <Nav.Link onClick={handleBRegister}>Register</Nav.Link> }
                    {!auth.logged && <Nav.Link onClick={handleBLogin}>Login</Nav.Link> }
                    {auth.logged &&
                        <NavDropdown title="User " id="basic-nav-dropdown">
                            <NavDropdown.Item as={Link} to="/profile">Profile</NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
                            <NavDropdown.Divider />
                            <NavDropdown.Item onClick={handleBLogout}>Logout</NavDropdown.Item>
                        </NavDropdown>
                    }
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
        
        {!auth.logged && <Login />}
        {!auth.logged && <Register />}
        {general.notif.text && <NotifModal />}
        </>
    )
}

export default NavbarLayout;  