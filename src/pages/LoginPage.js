import React from 'react';
import {Link, useNavigate} from "react-router-dom";

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