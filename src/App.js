import React from 'react';
import './App.scss';
import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import { useNavigate } from 'react-router-dom';
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { useTheme } from "@mui/material/styles";
import 'react-html5-camera-photo/build/css/index.css';

const App = () => {

  const theme = useTheme();
  const navigate = useNavigate();

  return (

    <Box className="App" height="90vh">

      <Stack
        alignItems="center"
        justifyContent="center"
        height="100%"
        padding={"0 2rem"}
      >

        <Typography variant="h5" align="center" color={theme.palette.blueGrey.blueGrey2} fontWeight={600} marginBottom={"6px"}>
          Dental AI Observation
        </Typography>

        <Typography variant="body2" align="center" color={theme.palette.grey.variant3} marginBottom={"26px"}>
          Our AI will analyse the photos and give you a health rating based on the result.
        </Typography>

        <Button variant="contained" color='primary' onClick={() => navigate("first")}>Get Started</Button>
      </Stack>

    </Box>
  );
}

export default App;
