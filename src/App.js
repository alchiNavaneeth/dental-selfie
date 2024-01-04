import React, { useState } from 'react';
import './App.scss';
import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import { Link } from 'react-router-dom';
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { useTheme } from "@mui/material/styles";
import Camera from "react-html5-camera-photo";
import 'react-html5-camera-photo/build/css/index.css';

const App = () => {

  const theme = useTheme();

  const [img, setImg] = useState(null);

  const handleTakePhoto = (dataUri) => {
    setImg(dataUri);
  }

  return (

    <Box className="App" height="100vh">

      <Stack
        alignItems="center"
        justifyContent="center"
        // height="100%"
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

      {/* <Camera
        onTakePhoto={(dataUri) => { handleTakePhoto(dataUri); }}
      /> */}

      {
        img && 
        <img src={img} alt="Taken Img" />
      }
    </Box>
  );
}

export default App;
