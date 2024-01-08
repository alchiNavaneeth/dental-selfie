import React, { useState } from 'react';
import './App.scss';
import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import { useNavigate } from 'react-router-dom';
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { useTheme } from "@mui/material/styles";
import 'react-html5-camera-photo/build/css/index.css';
import { useNameData } from './data/ImageData';

const App = () => {

  const theme = useTheme();
  const navigate = useNavigate();
  const { username, handleUsername } = useNameData();
  const [name, setName] = useState(username);
  const [error, setError] = useState(null);

  const handleUsernameChange = (e) => {
    setName(e.target.value);
  }

  const handleStart = () => {
    if (name == null || name === "") {
      setError("*Username is required");
      return
    }
    setError(null);
    handleUsername(name);
    navigate("first");
  }

  return (

    <Box className="App" height="90vh" width="100%" >

      <Stack
        alignItems="center"
        justifyContent="center"
        height="100%"
        padding={"0 2rem"}
      >

        <Typography variant="h5" align="center" color={theme.palette.blueGrey.blueGrey2} fontWeight={600} marginBottom={"6px"}>
          Dental AI Observation
        </Typography>

        <Typography variant="body2" align="center" color={theme.palette.grey.variant3} marginBottom={"60px"}>
          Our AI will analyse the photos and give you a health rating based on the result.
        </Typography>

        <form style={{ width: "100%" }} >
          <label htmlFor="username">Enter your name</label>
          <input type="text" id='username' placeholder='username' value={username ? username : ""} onChange={handleUsernameChange} required />
          {error && <p>{error}</p>}
          <Button className='submit-btn' variant="contained" fullWidth color='primary' onClick={handleStart}>Get Started</Button>
        </form>

      </Stack>

    </Box>
  );
}

export default App;
