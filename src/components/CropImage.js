import React, { useRef, useState } from "react";
import Box from "@mui/material/Box";
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import CancelIcon from '@mui/icons-material/Cancel';
import { useTheme } from "@mui/material/styles";
import '../App.scss';
import ReactCrop, { centerCrop, convertToPixelCrop } from 'react-image-crop';
import 'react-image-crop/src/ReactCrop.scss';
import setCanvasPreview from "./previewCanvas";

export const CropImage = ({ capturedImg, setShowCrop, handleImage }) => {

    const theme = useTheme();
    const [crop, setCrop] = useState({
        unit: "%",
        width: 95,
        // height: 43
        height: 30
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
            <ReactCrop
                className="crop-component"
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
                bottom={"10%"}
                display="flex"
                justifyContent="space-around"
                alignItems="center"
                width="100%"
            >
                <CancelIcon
                    className="icon pointer"
                    htmlColor={theme.palette.danger.main}
                    onClick={() => setShowCrop(false)}
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
                        handleImage(dataUrl);
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