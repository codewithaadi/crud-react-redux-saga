import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { deleteUserStart, loadUsersStart } from '../redux/actions/usersAction';

import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import { styled, Button } from "@mui/material";

import { Link } from "react-router-dom";
import { toast } from 'react-toastify';

const StyledTable = styled(Table)`
  width: 95%;
  margin: 100px auto 0 auto;
`;
const THead = styled(TableRow)`
  background: #000000;
  & > th {
    color: white;
    font-size: 20px;
  }
`;
const TBody = styled(TableRow)`
  & > td {
    font-size: 20px;
  }
`;

export default function Home() {
  const dispatch = useDispatch();
  const users = useSelector(state => state.data.users);
  const loading = useSelector(state=>state.data.loading);
  const error = useSelector(state=>state.data.error);

  useEffect(() => {
    dispatch(loadUsersStart())
  }, [])

  useEffect(() => {error && toast.error(error)}, [error])

  if(loading){
    <h1>Loading</h1>
  }

  const handleDelete = (id) => {
    if(window.confirm("Are you sure want to delete the user ?")){
      dispatch(deleteUserStart(id));
      toast.success("User Deleted Successfully");
    }
  }
  

  return (
    <StyledTable>
      <TableHead>
        <THead>
          <TableCell>ID</TableCell>
          <TableCell>Name</TableCell>
          <TableCell>Username</TableCell>
          <TableCell>Email</TableCell>
          <TableCell>Phone</TableCell>
          <TableCell>Options</TableCell>
        </THead>
      </TableHead>
      <TableBody>
        {users && users.map((user,index) => (
          <TBody key={user.id}>
            <TableCell>{index+1}</TableCell>
            <TableCell>{user.name}</TableCell>
            <TableCell>{user.username}</TableCell>
            <TableCell>{user.email}</TableCell>
            <TableCell>{user.phone}</TableCell>
            <TableCell>
              <Button
                variant="contained"
                style={{ marginRight: 10 }}
                component={Link}
                to={`/editUser/${user.id}`}
              >
                Edit
              </Button>
              <Button
                variant="contained"
                color="secondary"
                style={{ marginRight: 10 }}
                onClick={() => handleDelete(user.id)}>
                Delete
              </Button>
              <Button
                variant="contained"
                color="success"
                component={Link}
                to={`/userInfo/${user.id}`}>
                View
              </Button>
          </TableCell>
          </TBody>
        ))}
    </TableBody>
    </StyledTable >
  )
}
