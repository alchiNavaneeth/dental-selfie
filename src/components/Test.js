import React, { useState } from "react";
import '../App.scss';
import Camera, { FACING_MODES, IMAGE_TYPES } from "react-html5-camera-photo";
import Box from "@mui/material/Box";


export const Test = ({ setTestOpen }) => {

    const [img, setImg] = useState(null);

    console.log(img);

    const handleTakePhoto = (dataUri) => {
        setImg(dataUri);
    }

    const handleCameraError = (error) => {
        console.log(error)
    }


    return (
        <Box
            position="absolute"
            top={0}
            left={0}
            // width="100%"
            // height="100vh"
            // overflow="hidden"
            zIndex={111}
        >
            <Box position="absolute" top={0} left="50%" zIndex={11} >
                <button onClick={() => setTestOpen(false)}>Close</button>
            </Box>

            <Box position="absolute" display="flex" alignItems="center" top={0} left={0} width="100%" height="95vh" bgcolor={"red"} >
                <Camera
                    // isFullscreen={true}
                    onCameraError = { error => handleCameraError(error) }
                    isDisplayStartCameraError={true}
                    imageType={IMAGE_TYPES.PNG}
                    idealFacingMode={FACING_MODES.USER}
                    onTakePhoto={(dataUri) => { handleTakePhoto(dataUri); }}
                />
            </Box>

            {/* {
                img &&
                <img src={img} alt="Taken Img" />
            } */}
        </Box>
    )
}