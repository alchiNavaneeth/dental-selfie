import React, { useCallback, useRef, useState } from "react";
import '../App.scss';
import Webcam from "react-webcam";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import CircleIcon from '@mui/icons-material/Circle';
import { useTheme } from "@mui/material/styles";

export const CaptureImage = ({ handleCamera, setCapturedImg }) => {

    const theme = useTheme();
    const webcamRef = useRef(null);

    // const [capturedImage, setCapturedImage] = useState(null);

    const handleCapture = useCallback((target) => {
        const outputImg = webcamRef.current.getScreenshot();
        setCapturedImg(outputImg);
    }, [webcamRef]);

    return (
        <Box
            display="flex"
            className="capture-image-wrapper"
            position="absolute"
            top={0}
            left={0}
            width="100vw"
            height="100%"
        >
            <Webcam
                className="webcam"
                ref={webcamRef}
                screenshotFormat="image/png"
                screenshotQuality={1}
                facingMode="user"
            />

            <Box
                className="frame-wrapper"
                position="absolute"
                top={0}
                left={0}
                zIndex={999}
                display="flex"
                flexDirection="column"
                alignItems="center"
                height="100%"
                width="100%"
            >
                <Typography variant="h6" color="white" fontWeight={600} position="absolute" bottom={"32%"} >
                    Align your teeth inside the frame
                </Typography>

                <div className="frame"></div>

                <Typography variant="h6" color="white" fontWeight={600} fontSize={16} position="absolute" bottom={"16%"} >
                    Capture
                </Typography>
                <Box
                    className="outer-circle"
                    display="flex"
                    justifyContent="center"
                    alignItems="center"
                    position="absolute"
                    bottom={"20%"}
                >
                    <CircleIcon
                        htmlColor={theme.palette.grey.whiteShade}
                        fontSize="large"
                        onClick={() => {
                            handleCamera(false);
                            handleCapture();
                        }}
                    />
                </Box>

                {/*  .. .....  Old  . ....  .. ..... */}
                {/* <div className="frame">
                    <Webcam
                        ref={webcamRef}
                        screenshotFormat="image/png"
                        screenshotQuality={1}
                        videoConstraints={videoConstraints}
                        onUserMediaError={(error) => {
                            console.log(error);
                        }}
                    />
                </div>
                <Box
                    className="outer-circle"
                    display="flex"
                    justifyContent="center"
                    alignItems="center"
                >
                    <CircleIcon
                        htmlColor={theme.palette.grey.whiteShade}
                        fontSize="large"
                        onClick={() => handleCamera(false)}
                    />
                </Box> */}
            </Box>
        </Box>
    )
} 