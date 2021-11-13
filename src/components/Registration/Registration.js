import { useState } from 'react';
import { Form, Button } from 'react-bootstrap';
import { Link , useHistory, useLocation} from 'react-router-dom';
import useAuth from '../../hooks/useAuth'
import { getAuth, createUserWithEmailAndPassword, updateProfile } from "firebase/auth";


const Registration = () => {
    const { signInUsingGoogle } = useAuth();
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const auth = getAuth();
    const location = useLocation();
    const history = useHistory();
    const redirect_uri = location.state?.from || "/home"

    const handleNameChange = e => {
        setName(e.target.value);
      }

    const handleEmailChange = e => {
        setEmail(e.target.value);
      }
    
      const handlePasswordChange = e => {
        setPassword(e.target.value)
      }

        // user registration
    const handleRegistration = e =>{
        console.log(email, password)
        e.preventDefault();

        createUserWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
            // Signed in 
            const user = userCredential.user;
            // ...
            setUserName();
            //console.log(user);
            history.push(redirect_uri)
        })
        .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            // ..
        });
    }
    // set user name 
    const setUserName = () => {
        updateProfile(auth.currentUser, { displayName: name })
          .then(result => { })
      }
      // google login
      const handleGooglelogin = () =>{
        signInUsingGoogle()
        .then(result =>{
            history.push(redirect_uri);
        })
     }

    return (
        <div className="container">
            <h2 className="fw-bold mt-3 mb-3">Welcome to Registration!</h2>
            <Form>
            <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Enter name</Form.Label>
                <Form.Control type="text" placeholder="Enter your name" onBlur={handleNameChange}/>
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Email address</Form.Label>
                <Form.Control type="email" placeholder="Enter email" onBlur={handleEmailChange}/>
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label>Password</Form.Label>
                <Form.Control type="password" placeholder="Password" onBlur={handlePasswordChange}/>
            </Form.Group>
            <Button variant="primary" type="submit" onClick={handleRegistration}>
                Registration
            </Button>
            </Form>
            <button onClick={handleGooglelogin} className="btn btn-warning">Google Sign In</button>
            <h4>Already have an account? <Link to="/login">
            <Button variant="warning" type="submit">
                Login
            </Button>
            </Link></h4>
        </div>
    )
}

export default Registration;