import React, {
    useState,
} from "react";

import "../App.scss";
import { CaptureImage } from './CaptureImage';
import { useNavigate } from "react-router-dom";
import { CropImage } from "./CropImage";

import {
    Camera,
    RotateLeft,
    NavigateNext,
} from '@mui/icons-material';

import {
    Stack,
    Box,
    Button,
    useTheme,
    Typography,
    useMediaQuery,
} from "@mui/material";

export const Content = ({ heading, description, capturedImg, handleImage, handleCamera, cameraStatus, navigation }) => {

    const theme = useTheme();
    const navigate = useNavigate();
    const breakpointCheck = useMediaQuery(theme.breakpoints.up("md"));

    const [showCrop, setShowCrop] = useState(false);

    
    return (
        <Box padding={"0 1rem"} marginBottom={".5rem"} className="content-wrapper">

            <Typography variant={breakpointCheck ? "h4" : "h5"} align="center" color={theme.palette.dark.main} fontWeight={600} gutterBottom>
                {heading}
            </Typography>

            <Typography variant="body1" align="center" color={theme.palette.text.main} marginBottom={"30px"} >
                {description}
            </Typography>

            <Box
                className="content"
                display="flex"
                flexDirection="column"
                alignItems="center"
                marginBottom={"20px"}
            >
                <Stack
                    className="captured-output"
                    border={`3px dashed ${theme.palette.text.main}`}
                    justifyContent="center"
                    alignItems="center"
                    bgcolor={theme.palette.background.light}
                    width={breakpointCheck ? "60%" : "100%"}
                    height={breakpointCheck ? "400px" : "170px"}
                    color={theme.palette.text.main}
                    marginBottom={"8px"}
                >
                    {
                        capturedImg ?
                            <div>
                                <img src={capturedImg} alt="Captured Img" className="captured-image" />
                            </div>
                            :
                            <Stack className='pointer' flexDirection="column" alignItems="center" onClick={() => handleCamera(true)}>
                                <Camera
                                    className={breakpointCheck ? "camera-icon" : ""}
                                    fontSize="large"
                                />
                                <Typography variant="caption" marginTop={"10px"} fontWeight={500}>
                                    Tap here to take a picture
                                </Typography>
                            </Stack>
                    }
                </Stack>
                {
                    capturedImg &&
                    <Button
                        variant="outlined"
                        color="blueGrey"
                        endIcon={<RotateLeft />}
                        onClick={() => handleCamera(true)}
                    >
                        Retake
                    </Button>
                }
            </Box>

            <Stack direction="row" justifyContent="center" width="100%">
                <Button
                    sx={{ width: breakpointCheck ? "30%" : "100%", textTransform: "capitalize", fontSize: "16px" }}
                    variant="contained"
                    color="primary"
                    size="large"
                    endIcon={<NavigateNext />}
                    disabled={capturedImg ? false : true}
                    onClick={() => navigate(navigation)}
                >
                    Go To Next View
                </Button>
            </Stack>

            {
                cameraStatus && <CaptureImage handleCamera={handleCamera} handleImage={handleImage} setShowCrop={setShowCrop} />
            }

            {
                showCrop &&
                <CropImage
                    capturedImg={capturedImg}
                    handleCamera={handleCamera}
                    setShowCrop={setShowCrop}
                    handleImage={handleImage}
                />
            }

        </Box>
    )
}