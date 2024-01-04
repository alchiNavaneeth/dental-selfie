import React, { useCallback, useRef } from "react";
import '../App.scss';
import Webcam from "react-webcam";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import { useTheme } from "@mui/material/styles";
import CircleIcon from '@mui/icons-material/Circle';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';


export const CaptureImage = ({ handleCamera, handleImage, setShowCrop }) => {

    const theme = useTheme();
    const webcamRef = useRef(null);

    const handleCapture = useCallback(() => {
        const outputImg = webcamRef.current.getScreenshot();
        handleImage(outputImg);
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
        >
            <Webcam
                className="webcam"
                ref={webcamRef}
                screenshotFormat="image/png"
                screenshotQuality={1}
                facingMode="user"
                width="100%"
                height="100%"
                mirrored={true}
            />

            <Box
                className="frame-wrapper"
                position="absolute"
                top={0}
                left={0}
                height="100%"
                width="100%"
            >
                <div className="frame"></div>
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
                <Box
                    className="pointer"
                    height="30px"
                    width="45px"
                    display="flex"
                    justifyContent="center"
                    alignItems="center"
                    borderRadius="50px"
                    bgcolor={theme.palette.grey.whiteShade}
                    position={"absolute"}
                    top={20}
                    left={20}
                    onClick={() => {
                        handleCamera(false);
                    }}
                >
                    <ChevronLeftIcon
                        className="go-back-icon"
                        htmlColor={theme.palette.blueGrey.main}
                        fontSize="medium"
                    />
                </Box>


                <Typography variant="h6" color="white" fontWeight={600} position="absolute" bottom={"38%"}  >
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
                    <CircleIcon
                        className="circle-icon"
                        htmlColor={theme.palette.grey.whiteShade}
                        onClick={handleCapture}
                    />
                </Box>

                <Typography color="white" fontWeight={600} fontSize={16} position="absolute" bottom={"6%"} >
                    Capture
                </Typography>
            </Box>

        </Box>
    )
} 