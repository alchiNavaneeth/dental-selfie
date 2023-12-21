import React, { useRef } from "react";
import '../App.scss';
import Webcam from "react-webcam";
import Box from "@mui/material/Box";
import CameraAlt from "@mui/icons-material/CameraAlt";

export const CaptureImage = ({ handleCamera }) => {

    const webcamRef = useRef(null)

    return (
        <div className="capture-image-wrapper">
            <Box
                className="frame-wrapper"
                display="flex"
                flexDirection="column"
                height="100%"
                width="100%"
                justifyContent="center"
                alignItems="center"
            >
                <div className="frame">
                    <Webcam
                        disablePictureInPicture={true}
                        ref={webcamRef}
                        screenshotFormat="image/png"
                        height={400}
                        width={400}
                        minScreenshotHeight={300}
                        minScreenshotWidth={300}
                        onUserMediaError={(error) => {
                            console.log(error);
                        }}
                    />
                </div>
                <CameraAlt
                    className="pointer camera-icon"
                    fontSize="large"
                    onClick={() => handleCamera(false)}
                />
            </Box>
        </div>
    )
} 