import React, { useState } from "react";
import "../App.scss";
import { Header } from '../components/Header';
import { Pager } from '../components/Pager';
import { Content } from '../components/Content';

export const ThirdStep = () => {

    const [capturedImg, setCapturedImg] = useState("");
    const [cameraStatus, setCameraStatus] = useState(false);


    const handleCamera = (status) => {
        setCameraStatus(status);
    }

    return (
        <div>
            <Header />
            <Pager number="3" />
            <Content
                capturedImg={capturedImg}
                handleCamera={handleCamera}
                cameraStatus={cameraStatus}
                navigation="/output"
                heading="Upload left view"
                description="Let's see your top and bottom teeth from the left side."
            />
        </div>
    )
}