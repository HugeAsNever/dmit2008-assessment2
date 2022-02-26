import React from 'react'
import {Link, useNavigate} from "react-router-dom";
import Form  from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
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
        <heder>
            <h1>Login Page</h1>
        </heder>
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
        <form>
            <input type="email" />
            <input type="password" />
            <button onClick={onHandleSubmit}>Login</button>
        </form>
    </>

)

}

export default LoginPage; 