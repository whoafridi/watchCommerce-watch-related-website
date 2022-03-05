import { Button, Container, Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';

const Header = () => {
    const {user, logOut} = useAuth();
    return (
        <>
        <Navbar collapseOnSelect expand="lg" bg="light" variant="light" sticky="top">
            <Container>
                <Navbar.Brand as={Link} to="/">watchCommerce</Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav" className='justify-content-end'>
                <Nav className="justify-content-end">
                    <Nav.Link as={Link} to="/home">Home</Nav.Link>
                    <Nav.Link as={Link} to="/products">Products</Nav.Link>
                    <Nav.Link as={Link} to="/aboutus">About us</Nav.Link>
                    {user?.email ?
                    <>
                        <Nav.Link as={Link}  to="/dashboard">Dashboard</Nav.Link>
                        <Navbar.Text className="mr-2">
                            Sign in as {user?.displayName} 
                        </Navbar.Text>
                        <Button onClick={logOut} variant="light">Logout</Button> 
                    </>
                        :
                    <>
                        <Nav.Link as={Link} className="border border-2 rounded-3 rounded-pill" to="/registration">Register</Nav.Link>
                        <Nav.Link as={Link} className="border border-2 rounded-3 rounded-pill ms-2" to="/login">Login </Nav.Link> 
                    </>
                    }
                </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    </>
    )
}

export default Header;
