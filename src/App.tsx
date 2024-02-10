import { useState } from 'react'
import * as React from 'react';
import Button from '@mui/material/Button';
import {Container} from '@mui/material';
import TourCard from './components/TourCard';
import {Grid} from '@mui/material';




function App() {


  return (
    <>
    <Container maxWidth="sm">
      <Grid container spacing={4}>
        <TourCard/>
        <TourCard/>
        <TourCard/>
        <TourCard/>
      </Grid>
      {/* <Button variant="contained">Hello world</Button> */}
    </Container>
    </>
  )
}

export default App
