import { Button, Container, Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <>
        <Navbar collapseOnSelect expand="lg" bg="light" variant="light" sticky="top">
            <Container>
                <Navbar.Brand as={Link} to="/">ProCourier</Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                <Nav className="justify-content-end">
                    <Nav.Link as={Link} to="/home">Home</Nav.Link>
                    <Nav.Link as={Link} to="/products">Products</Nav.Link>
                    <Nav.Link as={Link} to="/aboutus">About us</Nav.Link>
                    {/* {user?.email ?
                    <>
                        <Nav.Link as={Link}  to="/addservice">Add Service</Nav.Link>
                        <Nav.Link as={Link}  to="/mybooked">My Booked</Nav.Link>
                        <Nav.Link as={Link}  to="/managebooked">Manage Booked</Nav.Link>
                        <Navbar.Text className="mr-2">
                            Sign in as {user?.displayName} 
                        </Navbar.Text>
                        <Button onClick={logOut} variant="light">Logout</Button> 
                    </>
                        :
                    <>
                        <Nav.Link as={Link}  to="/registration">Register</Nav.Link>
                        <Nav.Link as={Link} to="/login">Login </Nav.Link> 
                    </>
                    }
                </Nav> */}
                </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    </>
    )
}

export default Header;
