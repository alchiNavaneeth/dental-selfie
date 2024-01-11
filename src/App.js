import React, { useState } from 'react';
import './App.scss';
import { useNameData } from './data/ImageData';
import { Header } from './components/Header';
import { useNavigate } from 'react-router-dom';
import { KeyboardArrowRight } from '@mui/icons-material';
import {
  Box,
  Stack,
  Typography,
  useTheme,
  useMediaQuery,
  TextField
} from "@mui/material";
import HomeVector from "./assets/home-vector.svg";

const App = () => {

  const theme = useTheme();
  const navigate = useNavigate();
  const { username, handleUsername } = useNameData();
  const [name, setName] = useState(username ? username : "");
  const [error, setError] = useState(null);
  const breakpointCheck = useMediaQuery(theme.breakpoints.up('md'));

  const handleUsernameChange = (e) => {
    setError(null);
    setName(e.target.value);
  }

  const handleStart = () => {
    if ((name == null || name === "")) {
      setError("*Username is required");
      return
    }
    setError(null);
    handleUsername(name);
    navigate("first");
  }

  return (
    <Box height="100vh" width="100%">
      <Header />
      <Box
        display="flex"
        flexDirection={breakpointCheck ? "row" : "column"}
        justifyContent="space-around"
        alignItems="center"
        gap="20px"
        width="100%"
        height="88%"
        padding={"20px"}
      >
        <Box width={ breakpointCheck ? "40%" : "100%"} order={ breakpointCheck ? 1 : 2}>
          <Typography variant={ breakpointCheck ? 'h2' : 'h4' } fontWeight={600} color={theme.palette.dark.main} gutterBottom>
            Dental AI Observation
          </Typography>
          <Typography variant={ breakpointCheck ? 'h6' : 'body2'} color={theme.palette.text.main} marginBottom={ breakpointCheck ? "60px" : "30px"}>
            Our AI will analyse the photos and give you a health rating based on the results
          </Typography>

          <Box
            component={"form"}
          >
            <div>
              <TextField
                InputProps={{ sx: { borderRadius: "50px", padding: "0px 1rem" } }}
                InputLabelProps={{sx: { paddingLeft: "1rem" }}}
                fullWidth
                error={error ? true : false}
                id="outlined-error-helper-text"
                label="Username"
                onChange={handleUsernameChange}
                defaultValue={username ? username : name}
                helperText={error ? error : null}
              />
            </div>
          </Box>
          <Stack
            className="pointer"
            marginTop="20px"
            padding="1rem 2rem"
            direction="row"
            justifyContent="space-between"
            alignItems="center"
            borderRadius="50px"
            color="white"
            bgcolor={theme.palette.primary.main}
            onClick={handleStart}
          >
            Get Started
            <KeyboardArrowRight fontSize='medium' />
          </Stack>
        </Box>

        <Box order={ breakpointCheck ? 2 : 1}>
          <img width="100%" height={breakpointCheck ? "650px" : "300px"} src={HomeVector} alt="Home Vector" />
        </Box>
      </Box>

      {/* {
        !match &&
        <Box
          className="App"
          height="100vh"
          display="flex"
          flexDirection="column"
          alignItems="center"
        >

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

            <form>
              <label htmlFor="username">Enter your name</label>
              <input type="text" id='username' placeholder='username' value={username ? username : name} onChange={handleUsernameChange} required />
              {error && <p>{error}</p>}
              <Button className='submit-btn' variant="contained" fullWidth color='primary' onClick={handleStart}>Get Started</Button>
            </form>
          </Stack>
        </Box>
      } */}
    </Box>
  );
}

export default App;
