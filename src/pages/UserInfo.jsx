import React from 'react';
import { useParams } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { Typography, Box, styled,Button } from '@mui/material';
import { Link } from 'react-router-dom';

const Container = styled(Box)`
    width:50%;
    margin:10% auto 0 auto; 
    border: 1px solid black;
    padding: 50px;
    & > div {
      margin-top: 25px;
      display:flex;
      justify-content:space-between;
      border-bottom: 1px solid blue;
    }
`

function UserInfo() {
  const users = useSelector(state => state.data.users);
  const { id } = useParams();
  const singleUser = users.find((item) => item.id === Number(id));

  return (
    <Container>
      <Typography variant='h4'>User Info</Typography>
      <div>
        <Typography variant='h6'>Name:</Typography>
        <Typography variant='h6'>{singleUser.name}</Typography>
      </div>
      <div>
        <Typography variant='h6'>Username:</Typography>
        <Typography variant='h6'>{singleUser.username}</Typography>
      </div>
      <div>
        <Typography variant='h6'>Email:</Typography>
        <Typography variant='h6'>{singleUser.email}</Typography>
      </div>
      <div>
        <Typography variant='h6'>Phone:</Typography>
        <Typography variant='h6'>{singleUser.phone}</Typography>
      </div>
      <Button
        variant="contained"
        color="warning"
        fullWidth
        component={Link}
        to={`/`}
        style={{marginTop:'40px'}}
        >
          Home
      </Button>
    </Container>

  )
}

export default UserInfo