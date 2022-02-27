import React from 'react';
import {Container} from "react-bootstrap";
import {Link} from "react-router-dom";
import {AppBar} from './../components/appbar';



function DashBoardPage  (props){
    return(
        <>
        <nav>
            <ul>
                <li>
                    <Link to="/">LoginPage</Link>
                </li>
                <li>
                    <Link to="/dashboard">DashBoard Page</Link>
                </li>
            </ul>
        </nav>
      
        <AppBar/>
        <Container>

        </Container>
        </> 
    )
}

export default DashBoardPage; 