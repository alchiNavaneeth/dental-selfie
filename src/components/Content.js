import React, { useEffect, useState } from "react";
import "../App.scss";
import { CaptureImage } from './CaptureImage';
import Camera from '@mui/icons-material/Camera';
import Stack from "@mui/material/Stack";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import NavigateNextIcon from '@mui/icons-material/NavigateNext';
import { useTheme } from "@mui/material/styles";
import { Typography } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { CropImage } from "./CropImage";
import RotateLeftIcon from '@mui/icons-material/RotateLeft';

export const Content = ({ heading, description, capturedImg, handleImage, handleCamera, cameraStatus, navigation }) => {

    const theme = useTheme();
    const navigate = useNavigate();
    const [showCrop, setShowCrop] = useState(false);
    const [error, setError] = useState(null);

    useEffect(() => {
        if (capturedImg) setError(null);
    }, [capturedImg, setError]);

    const handleNavigation = () => {
        if (!capturedImg) {
            setError("Please upload image first");
            return;
        }
        navigate(navigation);
        setError(null);
    }

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
                    height={"170px"}
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
                {
                    capturedImg &&
                    <Button
                        variant="outlined"
                        color="blueGrey"
                        endIcon={<RotateLeftIcon />}
                        onClick={() => handleCamera(true)}
                    >
                        Retake
                    </Button>
                }

                <Typography align="center" marginBottom={ error ? "16px" : "" } fontSize="12px" color={theme.palette.danger.main} fontWeight={600}>
                    {error}
                </Typography>

                <Typography variant="h6" align="center" marginTop={capturedImg ? "16px" : ""} color={theme.palette.secondary.main} fontWeight={600}>
                    {heading}
                </Typography>
                <Typography variant="body2" align="center" color={theme.palette.grey.variant3}>
                    {description}
                </Typography>
            </Box>

            <Button variant="contained" color="primary" fullWidth endIcon={<NavigateNextIcon />} onClick={handleNavigation} >
                Next
            </Button>

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