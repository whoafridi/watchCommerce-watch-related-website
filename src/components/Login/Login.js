import { useState } from 'react';
import { Form,Button } from 'react-bootstrap';
import { Link , useHistory, useLocation} from 'react-router-dom';
import useAuth from '../../hooks/useAuth'

const Login = () => {
     const { signInUsingGoogle} = useAuth();
     
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

     const location = useLocation();
     const history = useHistory();
     const redirect_uri = location.state?.from || "/home";

     const handleEmailChange = e => {
        setEmail(e.target.value);
      }
    
      const handlePasswordChange = e => {
        setPassword(e.target.value)
      }

      const handleLogin = e =>{
          e.preventDefault()
      }
     const handleGooglelogin = () =>{
        signInUsingGoogle()
        .then(result =>{
            history.push(redirect_uri);
        })
     }

    return (
        <div className="container">
            <h2 className="fw-bold mt-3 mb-3">Welcome to Login!</h2>
            <Form>
            <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Email address</Form.Label>
                <Form.Control type="email" placeholder="Enter email" onBlur={handleEmailChange}/>
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label>Password</Form.Label>
                <Form.Control type="password" placeholder="Password" onBlur={handlePasswordChange}/>
            </Form.Group>
            <Button variant="primary" type="submit" onClick={handleLogin}>
                Registration
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