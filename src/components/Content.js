import React from "react";
import "../App.scss";
import { CaptureImage } from './CaptureImage';
import Camera from '@mui/icons-material/Camera';
import Box from "@mui/material/Box";
import Stack from "@mui/material/Stack";
import { CustomButton } from './CustomButton';

export const Content = ({ heading, description, capturedImg, handleCamera, cameraStatus, handleCapture }) => {
    return (
        <div className="content-wrapper">
            <h2>Upload atleast 3 photos of your teeth</h2>
            <p>Our AI will analyse the photos and give you a health rating based on the result</p>
            <Box
                className="content"
                display="flex"
                flexDirection="column"
                alignItems="center"
            >
                <div className="captured-output">
                    {
                        capturedImg ?
                            <div>
                                <img src={capturedImg} alt="Captured Img" />
                            </div>
                            :
                            <Stack className='pointer' flexDirection="column" alignItems="center">
                                <Camera
                                    className='camera-icon'
                                    onClick={() => handleCamera(true)}
                                />
                                Take a Picture
                            </Stack>
                    }
                </div>
                <h4>{heading}</h4>
                <p>{description}</p>
            </Box>

            <CustomButton
                className="primary"
                text="Next"
                icon="next"
            />

            {
                cameraStatus && <CaptureImage handleCamera={handleCamera} handleCapture={handleCapture} />
            }
        </div>
    )
}