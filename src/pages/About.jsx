import React from 'react';
import { Typography, Box, styled,Button } from '@mui/material';

const Container = styled(Box)`
    width:50%;
    margin:10% auto 0 auto; 
    & > div {
      margin-top: 25px;
      display:flex;
      justify-content:space-between;
      border: 2px solid magenta;
      padding:10px;
    }
`

function About() {

    return (
      <Container>
        <Typography variant='h4'>About</Typography>
        <div>
          <Typography variant='h6'>This is a Simple CRUD Application developed with the help of React, Redux-Saga, JSON Server and Material UI</Typography>
        </div>
      </Container>
  )
}

export default About