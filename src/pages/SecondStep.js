import React, { useState } from "react";
import "../App.scss";
import { Header } from '../components/Header';
import { Pager } from '../components/Pager';
import { GoBack } from "../components/GoBack";
import { Content } from '../components/Content';
import { useImageData2 } from "../data/ImageData";

export const SecondStep = () => {

    const { capturedImage2, handleImage2 } = useImageData2();
    const [cameraStatus, setCameraStatus] = useState(false);


    const handleCamera = (status) => {
        setCameraStatus(status);
    }

    return (
        <div>
            <Header />
            <GoBack />
            <Pager number="2" />
            <Content
                capturedImg={capturedImage2}
                handleImage={handleImage2}
                handleCamera={handleCamera}
                cameraStatus={cameraStatus}
                navigation="/third"
                heading="Upload right view"
                description="Let's see your top and bottom teeth from the right side."
            />
        </div>
    )
}