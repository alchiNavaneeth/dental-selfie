import React, { useState } from "react";
import "../App.scss";
import { Header } from '../components/Header';
import { Pager } from '../components/Pager';
import { Content } from '../components/Content';
import { useImageData1 } from "../data/ImageData";

export const FirstStep = () => {

    const { capturedImage1, handleImage1 } = useImageData1();
    const [cameraStatus, setCameraStatus] = useState(false);


    const handleCamera = (status) => {
        setCameraStatus(status);
    }

    return (
        <div>
            <Header />
            <Pager number="1" />
            <Content
                capturedImg={capturedImage1}
                handleImage={handleImage1}
                handleCamera={handleCamera}
                cameraStatus={cameraStatus}
                navigation="/second"
                heading="Upload front view"
                description="Let's see your top and bottom teeth front on."
            />
        </div>
    )
}