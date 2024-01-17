import React, { useRef, useState } from "react";
import '../App.scss';
import setCanvasPreview from "./previewCanvas";
import moment from "moment";

import {
    Box,
    useTheme,
    Button,
    Typography,
    useMediaQuery
} from "@mui/material";

import ReactCrop, {
    centerCrop,
    convertToPixelCrop
} from 'react-image-crop';
import 'react-image-crop/src/ReactCrop.scss';

import {
    Close,
    Check,
    RotateLeft
} from '@mui/icons-material';


export const CropImage = ({ capturedImg, setShowCrop, handleImage, handleCamera }) => {

    const theme = useTheme();
    const breakpointCheck = useMediaQuery(theme.breakpoints.up("md"));

    const [crop, setCrop] = useState({
        unit: "%",
        width: breakpointCheck ? 55 : 95,
        height: breakpointCheck ? 35 : 40
    });
    const imageRef = useRef(null);
    const previewCanvasRef = useRef(null);

    const onImageLoaded = (e) => {
        const { width, height } = e.currentTarget;

        const centeredCrop = centerCrop(crop, width, height);
        setCrop(centeredCrop);
    }

    const handleGetDate = () => {
        let currentDate = moment().format('MMMM Do YYYY, h:mm:ss a');
        return currentDate;
    }

    return (
        <Box
            className="crop-image-wrapper"
            position="absolute"
            top={0}
            left={0}
            width="100vw"
            height={breakpointCheck ? "100vh" : "100%"}
            overflow="hidden"
            display="flex"
            flexDirection="column"
            justifyContent="center"
        >
            <Close
                className={`pointer ${breakpointCheck ? "close-icon-desk" : "close-icon-mob"}`}
                htmlColor="white"
                fontSize="large"
                onClick={() => {
                    setShowCrop(false);
                    handleCamera(false);
                    handleImage(null, null);
                }}
            />

            <ReactCrop
                crop={crop}
                keepSelection
                locked
                renderSelectionAddon={() => {
                    return (
                        <Box display="flex" justifyContent="center" position="absolute" width="100%" top="100%">
                            <Typography variant={breakpointCheck ? "h5" : "body1"} align="center" color={"white"}>
                                Adjust if needed
                            </Typography>
                        </Box>
                    )
                }}
                onChange={(pixelCrop, percentCrop) => setCrop(percentCrop)}
            >
                <img
                    ref={imageRef}
                    src={capturedImg}
                    onLoad={onImageLoaded}
                    alt="Img"
                    width="100%"
                />
            </ReactCrop>

            <Box
                position="absolute"
                bottom={breakpointCheck ? "10%" : "6%"}
                display="flex"
                justifyContent="space-around"
                alignItems="center"
                width="100%"
            >
                <Button
                    sx={{
                        width: breakpointCheck ? "10%" : "auto",
                        borderRadius: "50px",
                    }}
                    variant="contained"
                    size="large"
                    endIcon={<RotateLeft />}
                    onClick={() => {
                        setShowCrop(false);
                        handleImage(null, null);
                        handleCamera(true);
                    }}
                >
                    Retake
                </Button>
                <Button
                    sx={{
                        width: breakpointCheck ? "10%" : "auto",
                        borderRadius: "50px",
                    }}
                    className="retake-btn"
                    variant="contained"
                    size="large"
                    endIcon={<Check />}
                    onClick={() => {
                        setCanvasPreview(
                            imageRef.current,
                            previewCanvasRef.current,
                            convertToPixelCrop(
                                crop,
                                imageRef.current.width,
                                imageRef.current.height
                            ));

                        const dataUrl = previewCanvasRef.current.toDataURL();
                        handleImage(dataUrl, handleGetDate());
                        setShowCrop(false);
                    }}
                >
                    Done
                </Button>
            </Box>

            {
                crop &&
                <canvas
                    className="hidden"
                    style={{
                        border: "1px solid black",
                        marginTop: 20,
                        width: 350,
                        height: 200,
                    }}
                    ref={previewCanvasRef}
                ></canvas>
            }
        </Box>
    )
}