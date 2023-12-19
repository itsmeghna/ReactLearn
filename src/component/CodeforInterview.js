import React from 'react'
import { NavLink } from "react-router-dom";
import styled  from 'styled-components';

const Link = styled(NavLink)`
  background: #0000000;
  margin-left: 80rem;
  text-decoration: none;
  font-size: 20px;
  background-color:LightGray;
  margin-top:20rem;
`;

const CodeforInterview = () => {
  return (
    <div>Home Page

    <Link to="/SignIn"> Sign-In </Link>
   

    </div>
  )
}

export default CodeforInterview