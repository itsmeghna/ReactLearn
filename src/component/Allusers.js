import { useEffect, useState } from "react"; //when it is inserted in component dom
import { NavLink } from "react-router-dom";
import navbar from "./navbar.css"
import {
  Table,
  TableHead,
  TableBody,
  TableCell,
  TableRow,
  styled,
  Button,
} from "@mui/material";
import React from "react";
import { getUsers, deleteUser } from "../service/api";
import { Link } from "react-router-dom";

const NLink = styled(NavLink)`
  background: #0000000;
  margin-left: 80rem;
  text-decoration: none;
  font-size: 20px;
  background-color:Plum;
  margin-top:20rem;
`;
const StyledTable = styled(Table)`
  width: 90%;
  margin: 50px auto 0 auto;
`;

const Allusers = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    getUsersDetails();
  }, []);

  const getUsersDetails = async () => {
    let response = await getUsers();
    console.log(response);
    setUsers(response.data);
  };

  const deleteUserData = async (id) => {
    await deleteUser(id);
    getUsersDetails();
  };

  return (
    <>
     
     <NLink to="/SignOut"> Log-Out</NLink>
     
      <StyledTable>
        <TableHead>
          <TableRow>
            <TableCell>Id</TableCell>
            <TableCell>Name</TableCell>
            <TableCell>Username</TableCell>
            <TableCell>Email</TableCell>
            <TableCell>Phone</TableCell>
            <TableCell>Actions</TableCell>
          </TableRow>
        </TableHead>

        <TableBody>
          {users.map((user) => (
            <TableRow>
              <TableCell>{user.id}</TableCell>
              <TableCell>{user.name}</TableCell>
              <TableCell>{user.username}</TableCell>
              <TableCell>{user.email}</TableCell>
              <TableCell>{user.phone}</TableCell>
              <TableCell>
                <Button
                  variant="contained"
                  style={{ marginRight: 15 }}
                  component={Link}
                  to={`/edit/${user.id}`}
                >
                  Edit
                </Button>
                <Button
                  variant="contained"
                  color="secondary"
                  onClick={() => deleteUserData(user.id)}
                >
                  Delete
                </Button>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </StyledTable>

      <NLink to="/add" className="add"> + Add User </NLink>
    </>
  );
};

export default Allusers;
