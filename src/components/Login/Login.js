import { useState } from 'react';
import { Form,Button } from 'react-bootstrap';
import { Link , useHistory, useLocation} from 'react-router-dom';
import useAuth from '../../hooks/useAuth'

const Login = () => {

     const location = useLocation();
     const history = useHistory();
     const redirect_uri = location.state?.from || "/home";
     
     const [loginData, setLoginData] = useState({});
     const { user, loginUser, signInUsingGoogle } = useAuth();
 
     const handleOnChange = e => {
         const field = e.target.name;
         const value = e.target.value;
         const newLoginData = { ...loginData };
         newLoginData[field] = value;
         setLoginData(newLoginData);
     }
     const handleLoginSubmit = e => {
         loginUser(loginData.email, loginData.password, location, history);
         e.preventDefault();
     }

     const handleGooglelogin = () =>{
        signInUsingGoogle(location, history)
        
     }

    return (
        <div className="container">
            <h2 className="fw-bold mt-3 mb-3">Welcome to Login!</h2>
            <Form>
            <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Email address</Form.Label>
                <Form.Control type="email" name="email" placeholder="Enter email" onBlur={handleOnChange}/>
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label>Password</Form.Label>
                <Form.Control type="password" name="password" placeholder="Password" onBlur={handleOnChange}/>
            </Form.Group>
            <Button variant="primary" type="submit" onClick={handleLoginSubmit}>
                Login
            </Button>
            </Form>
            <button onClick={handleGooglelogin} className="btn btn-warning">Google Sign In</button>
            <h4>Don't have an account? <Link to="/registration">
            <Button variant="warning" type="submit">
                Registration
            </Button>
            </Link></h4>
        </div>
    )
}

export default Login;