import React from "react";
import { AppBar, Toolbar, Typography } from "@mui/material";
import styled from "styled-components";
import { NavLink } from "react-router-dom";
import navbar from "./navbar.css"
const Header = styled(AppBar)`
  background: #111111;
`;

const Tabs = styled(NavLink)`
  font-size: 20px;
  margin-right: 40px;
  color: inherit;
`;

const Navbar = () => {
  return (
    <Header position="static">
      <Toolbar>
        <Tabs to="/"> Home</Tabs>        
        {/* <Tabs to="/all"> All User</Tabs>
        <Tabs to="/add"> Add User</Tabs>  */}
      </Toolbar>
    </Header>
  );
};

export default Navbar;
