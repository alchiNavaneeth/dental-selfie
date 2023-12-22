import React from "react";
import "../App.scss";
import { CaptureImage } from './CaptureImage';
import Camera from '@mui/icons-material/Camera';
import Stack from "@mui/material/Stack";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import NavigateNextIcon from '@mui/icons-material/NavigateNext';
import { useTheme } from "@mui/material/styles";
import { Typography } from "@mui/material";
import { Link } from "react-router-dom";


export const Content = ({ heading, description, capturedImg, setCapturedImg, handleCamera, cameraStatus, navigation }) => {

    const theme = useTheme();

    return (
        <Box padding={"0 1rem"} marginBottom={"1rem"} className="content-wrapper">

            <Typography variant="h5" align="center" color={theme.palette.grey.dark} fontWeight={600} gutterBottom>
                Upload atleast 3 photos of your teeth
            </Typography>

            <Typography variant="body2" align="center" color={theme.palette.grey.variant3} marginBottom={"36px"} >
                Our AI will analyse the photos and give you a health rating based on the result
            </Typography>

            <Box
                className="content"
                display="flex"
                flexDirection="column"
                alignItems="center"
                marginBottom={"48px"}
            >
                <Stack
                    className="captured-output"
                    justifyContent="center"
                    alignItems="center"
                    bgcolor={theme.palette.grey.whiteShade}
                    width={"100%"}
                    height={"200px"}
                    color={theme.palette.blueGrey.blueGrey2}
                    marginBottom={"8px"}
                >
                    {
                        capturedImg ?
                            <div>
                                <img src={capturedImg} alt="Captured Img" className="captured-image" />
                            </div>
                            :
                            <Stack className='pointer' flexDirection="column" alignItems="center">
                                
                                <Camera
                                    fontSize="large"
                                    onClick={() => handleCamera(true)}
                                />
                                <Typography variant="body2" marginTop={"4px"} fontWeight={600}>
                                    Take a Picture
                                </Typography>
                            </Stack>
                    }
                </Stack>

                <Typography variant="h6" align="center" color={theme.palette.secondary.main} fontWeight={600}>
                    {heading}
                </Typography>
                <Typography variant="body2" align="center" color={theme.palette.grey.variant3}>
                    {description}
                </Typography>
            </Box>

            <Link to={navigation} className="router-link">
                <Button variant="contained" color="primary" fullWidth endIcon={<NavigateNextIcon />}>
                    Next
                </Button>
            </Link>

            {
                cameraStatus && <CaptureImage handleCamera={handleCamera} setCapturedImg={setCapturedImg} />
            }
        </Box>
    )
}