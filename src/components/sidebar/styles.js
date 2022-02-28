import styled from "styled-components";


const SideBarStyles = styled.div `
    width: 20%;
    color: #546E7A;
    padding: 0.5rem;
    margin-top: 1rem;
`;

const SideBarTitle = styled.h1 `
    font-size: 1.5rem;
    
`;

const SideBarButton  = styled.button`
  border:none;
  background-color: transparent;
  font-size: 1.3rem;
`;

const SideBarItems = styled.ul`
    align-items:center;
    margin: 2rem 0;
`;

const SideBarItem = styled.li`
    margin: 0.5rem;
`;


export { SideBarStyles, SideBarTitle, SideBarButton, SideBarItems, SideBarItem };