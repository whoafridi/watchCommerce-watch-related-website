import React, { useState } from 'react';
import { Form , Button} from 'react-bootstrap';

const MakeAdmin = () => {
    const [email, setEmail] = useState('');
    

    const handleOnBlur = e => {
        setEmail(e.target.value);
    }
    const handleAdminSubmit = e => {
        const user = { email };
        fetch('https://arcane-spire-40682.herokuapp.com/users/admin', {
            method: 'PUT',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(user)
        })
            .then(res => res.json())
            .then(data => {
                if (data.modifiedCount) {
                    console.log(data);
                    alert("admin added");
                    setEmail('');
                }
            })

        e.preventDefault();
       
    }
    return (
        <div>
            <h2>Make an Admin</h2>
            <Form onSubmit={handleAdminSubmit}>
               
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Email address</Form.Label>
                <Form.Control type="email" name="email" placeholder="Enter email"  onBlur={handleOnBlur}/>
            </Form.Group>
                <Button type="submit" variant="dark">Make Admin</Button>
            </Form>
        </div>
    );
};

export default MakeAdmin;