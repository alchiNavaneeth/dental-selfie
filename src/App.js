import React from 'react';
import './App.scss';
import Stack from '@mui/material/Stack';
import { Link } from 'react-router-dom';
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import {useTheme} from "@mui/material/styles";

const App = () => {

  const theme = useTheme();

  return (

    <div className="App">
      <Stack
        alignItems="center"
        justifyContent="center"
        height={"85vh"}
        padding={"0 2rem"}
      >

        <Typography variant="h5" align="center" color={theme.palette.blueGrey.blueGrey2} fontWeight={600} marginBottom={"6px"}>
          Dental AI Observation
        </Typography>

        <Typography variant="body2" align="center" color={theme.palette.grey.variant3} marginBottom={"26px"}>
          Our AI will analyse the photos and give you a health rating based on the result.
        </Typography>

        <Link to={"/first"} className='router-link'>
          <Button variant="contained" color='primary'>Get Started</Button>
        </Link>
      </Stack>
    </div>
  );
}

export default App;
