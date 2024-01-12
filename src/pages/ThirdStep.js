import React, { useState } from "react";
import "../App.scss";
import { Header } from '../components/Header';
import { Pager } from '../components/Pager';
import { GoBack } from "../components/GoBack";
import { Content } from '../components/Content';
import { useImageData3 } from "../data/ImageData";

export const ThirdStep = () => {

    const { capturedImage3, handleImage3 } = useImageData3();
    const [cameraStatus, setCameraStatus] = useState(false);


    const handleCamera = (status) => {
        setCameraStatus(status);
    }

    return (
        <div>
            <Header />
            <GoBack />
            <Pager number="3" />
            <Content
                capturedImg={capturedImage3}
                handleImage={handleImage3}
                handleCamera={handleCamera}
                cameraStatus={cameraStatus}
                navigation="/output"
                heading="Upload left view"
                description="Let's see your top and bottom teeth from the left side."
            />
        </div>
    )
}