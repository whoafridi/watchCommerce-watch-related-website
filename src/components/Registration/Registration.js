import { useState } from 'react';
import { Form, Button } from 'react-bootstrap';
import { Link , useHistory, useLocation} from 'react-router-dom';
import useAuth from '../../hooks/useAuth';


const Registration = () => {
    const [loginData, setLoginData] = useState({});
    const history = useHistory();
    
    const location = useLocation();
    const redirect_uri = location.state?.from || "/home"
    const { user, registerUser, signInUsingGoogle } = useAuth();

    const handleOnBlur = e => {
        const field = e.target.name;
        const value = e.target.value;
        const newLoginData = { ...loginData };
        newLoginData[field] = value;
        setLoginData(newLoginData);
    }
    const handleLoginSubmit = e => {
        registerUser(loginData.email, loginData.password, loginData.name, history);
        e.preventDefault();
    }
   

    return (
        <div className="container">
            <h2 className="fw-bold mt-3 mb-3">Welcome to Registration!</h2>
            <Form>
            <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Enter name</Form.Label>
                <Form.Control type="text" name="name" placeholder="Enter your name" onBlur={handleOnBlur}/>
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Email address</Form.Label>
                <Form.Control type="email" name="email" placeholder="Enter email" onBlur={handleOnBlur}/>
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label>Password</Form.Label>
                <Form.Control type="password" name="password" placeholder="Password" onBlur={handleOnBlur}/>
            </Form.Group>
            <Button variant="primary" type="submit" onClick={handleLoginSubmit }>
                Registration
            </Button>
            </Form>
            <h4>Already have an account? <Link to="/login">
            <Button variant="warning" type="submit">
                Login
            </Button>
            </Link></h4>
        </div>
    )
}

export default Registration;