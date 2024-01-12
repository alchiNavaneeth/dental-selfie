import React, {
    useCallback,
    useRef
} from "react";

import '../App.scss';
import Webcam from "react-webcam";

import {
    Box,
    Typography,
    useTheme,
    useMediaQuery,
} from "@mui/material";

import {
    Circle,
    Close
} from '@mui/icons-material';


export const CaptureImage = ({ handleCamera, handleImage, setShowCrop }) => {

    const theme = useTheme();
    const webcamRef = useRef(null);
    const breakpointCheck = useMediaQuery(theme.breakpoints.up("md"));

    const handleCapture = useCallback(() => {
        const outputImg = webcamRef.current.getScreenshot();

        handleImage(outputImg, null);
        setShowCrop(true);
        handleCamera(false);

    }, [webcamRef, handleImage, handleCamera, setShowCrop]);

    return (
        <Box
            display="flex"
            className="capture-image-wrapper"
            position="absolute"
            top={0}
            left={0}
            width="100%"
            height="100%"
            overflow="hidden"
            paddingTop="10px"
        >
            <Webcam
                className="webcam"
                ref={webcamRef}
                screenshotFormat="image/png"
                screenshotQuality={1}
                // facingMode="user"
                width="100%"
                height="100%"
                mirrored={true}
            />

            <Box
                className={breakpointCheck ? "desk-frame-wrapper" : "mob-frame-wrapper"}
                position="absolute"
                top={0}
                left={0}
                height="100%"
                width="100%"
            >
                <Box
                    className="frame"
                    position="absolute"
                    top={breakpointCheck ? "25%" : "30%"}
                    border={`5px dashed ${theme.palette.primary.main}`}
                    left={breakpointCheck ? "17.5%" : ""}
                    width={breakpointCheck ? "65%" : "100%"}
                    height={breakpointCheck ? "40%" : "26.5%"}
                ></Box>
            </Box>

            <Box
                className="frame-content"
                display="flex"
                flexDirection="column"
                alignItems="center"
                position="absolute"
                top={0}
                left={0}
                height="100%"
                width="100%"
            >
                <Close
                    className={`pointer ${breakpointCheck ? "close-icon-desk" : "close-icon-mob"}`}
                    htmlColor="white"
                    fontSize="large"
                    onClick={() => handleCamera(false)}
                />

                <Typography
                    variant={breakpointCheck ? "h5" : "h6"}
                    color={theme.palette.primary.main}
                    fontWeight={600}
                    position="absolute"
                    bottom={breakpointCheck ? "30%" : "38%"}
                >
                    Align your teeth inside the frame
                </Typography>
                <Box
                    className="outer-circle pointer"
                    display="flex"
                    justifyContent="center"
                    alignItems="center"
                    position="absolute"
                    bottom={"10%"}
                >
                    <Circle
                        className="circle-icon"
                        htmlColor="white"
                        onClick={handleCapture}
                    />
                </Box>
            </Box>


        </Box >
    )
} 