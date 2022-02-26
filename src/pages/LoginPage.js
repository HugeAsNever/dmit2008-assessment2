import React from 'react';
import {Link, useNavigate} from "react-router-dom";
import {Form, Button} from "react-bootstrap";

 //add event listner
 //elm.addEventListener

function LoginPage  (props){
    //window.location.assign('page.html')
    //router navigate to a path (/home/index dashboard)
let navigation = useNavigate();

function onHandleSubmit(evt) {
    evt.preventDefault();
    navigation('dashboard');
    //firebase auth signInWithUsernameAndPassword({email, password})
}

return( 
    
    <>
        <nav>
            <ul>
                <li><Link to="/">LoginPage</Link></li>
                <li><Link to="/dashboard">DashBoard Page</Link></li>
            </ul>
        </nav>

        <Form>
            <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Email address</Form.Label>
                <Form.Control type="email" placeholder="Enter email" />
                <Form.Text className="text-muted">
                We'll never share your email with anyone else.
                </Form.Text>
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label>Password</Form.Label>
                <Form.Control type="password" placeholder="Password" />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicCheckbox">
                <Form.Check type="checkbox" label="Check me out" />
            </Form.Group>
            <Button variant="primary" type="submit">
                Submit
            </Button>
        </Form>

        <heder>
            <h1>Login Page</h1>
        </heder>
        <form>
            <input type="email" />
            <button type="submit">form submmission</button>
        </form>
        <button onClick={onHandleSubmit}>
            click me
        </button>
        <form onSubmit={onHandleSubmit}>
        <input type="text" />
            <button type="submit">form submmission</button>
        </form>
    </>

)

}

export default LoginPage; 