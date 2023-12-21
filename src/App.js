import React from 'react';
import './App.scss';
import Stack from '@mui/material/Stack';
import { Link} from 'react-router-dom';
import Button from "@mui/material/Button";

const App = () => {

  return (

    <div className="App">
      <Stack
        alignItems="center"
        justifyContent="center"
        spacing={2}
        height={"85vh"}
      >
        <h2>Dental AI Observation</h2>

        <Link to={"/first"} className='router-link' >
          <Button variant="contained" color='primary'>Get Started</Button>
        </Link>
      </Stack>
    </div>
  );
}

export default App;
