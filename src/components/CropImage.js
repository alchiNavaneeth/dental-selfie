import React, { useRef, useState } from "react";
import Box from "@mui/material/Box";
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import CachedIcon from '@mui/icons-material/Cached';
import { useTheme } from "@mui/material/styles";
import '../App.scss';
import ReactCrop, { centerCrop, convertToPixelCrop } from 'react-image-crop';
import 'react-image-crop/src/ReactCrop.scss';
import setCanvasPreview from "./previewCanvas";
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';


export const CropImage = ({ capturedImg, setShowCrop, handleImage, handleCamera }) => {

    const theme = useTheme();
    const date = new Date();

    const [crop, setCrop] = useState({
        unit: "%",
        width: 95,
        height: 40
    });
    const imageRef = useRef(null);
    const previewCanvasRef = useRef(null);

    const onImageLoaded = (e) => {
        const { width, height } = e.currentTarget;

        const centeredCrop = centerCrop(crop, width, height);
        setCrop(centeredCrop);
    }

    return (
        <Box
            className="crop-image-wrapper"
            position="absolute"
            top={0}
            left={0}
            width="100%"
            height="100%"
            overflow="hidden"
            display="flex"
            flexDirection="column"
            justifyContent="center"
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
                    setShowCrop(false);
                    handleCamera(false);
                    handleImage(null);
                }}
            >
                <ChevronLeftIcon
                    className="go-back-icon"
                    htmlColor={theme.palette.blueGrey.main}
                    fontSize="medium"
                />
            </Box>

            <ReactCrop
                crop={crop}
                keepSelection
                onChange={(pixelCrop, percentCrop) => setCrop(percentCrop)}
            >
                <img
                    ref={imageRef}
                    src={capturedImg}
                    onLoad={onImageLoaded}
                    alt="Img"
                />
            </ReactCrop>

            <Box
                position="absolute"
                bottom={"8%"}
                display="flex"
                justifyContent="space-around"
                alignItems="center"
                width="100%"
            >
                <CachedIcon
                    className="icon pointer"
                    htmlColor={theme.palette.warning.main}
                    onClick={() => {
                        setShowCrop(false);
                        handleImage(null);
                        handleCamera(true);
                    }}
                />
                <CheckCircleIcon
                    className="icon pointer"
                    htmlColor={theme.palette.success.main}
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
                        console.log(dataUrl);
                        handleImage(dataUrl, date.toUTCString());
                        setShowCrop(false);
                    }}
                />
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