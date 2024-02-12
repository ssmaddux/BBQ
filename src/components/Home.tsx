import {Container} from '@mui/material';
import {AppBar} from '@mui/material';
import TourCard from '../components/TourCard';
import {Grid} from '@mui/material';
import SearchAppBar from '../components/AppBar';
import DrawerAppBar from '../components/AppBar';
import ToTop from './ToTop';
import BackToTop from './ToTop';



function App() {


  return (
    <>
    <DrawerAppBar/>
    <Container maxWidth="md" >
      <Grid container spacing={1}>
        <TourCard/>
        <TourCard/>
        <TourCard/>
        <TourCard/>
        <TourCard/>
        <TourCard/>
        <TourCard/>
        <TourCard/>
        <TourCard/>
        <TourCard/>
        <TourCard/>
        <TourCard/>
        <TourCard/>
        <TourCard/>
        <TourCard/>
        <TourCard/>
        <BackToTop/>
      </Grid>
      {/* <Button variant="contained">Hello world</Button> */}
    </Container>
    </>
  )
}

export default App