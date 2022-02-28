import React from 'react';
import {Container} from "react-bootstrap";
import {AppBar} from './../components/appbar';
import {SideBar} from './../components/sidebar';




function DashBoardPage  (props){

    return(
        <>
      
        <AppBar/>
        <Container>
            <SideBar />
        </Container>
        </> 
    )
}

export default DashBoardPage; 