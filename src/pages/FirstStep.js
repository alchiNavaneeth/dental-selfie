import React, { useState } from "react";
import "../App.scss";
import { Header } from '../components/Header';
import { Pager } from '../components/Pager';
import { Content } from '../components/Content';

export const FirstStep = () => {

    const [capturedImg, setCapturedImg] = useState("");
    const [cameraStatus, setCameraStatus] = useState(false);


    const handleCamera = (status) => {
        setCameraStatus(status);
    }

    return (
        <div>
            <Header />
            <Pager number="1" />
            <Content
                capturedImg={capturedImg}
                setCapturedImg={setCapturedImg}
                handleCamera={handleCamera}
                cameraStatus={cameraStatus}
                navigation="/second"
                heading="Upload front view"
                description="Let's see your top and bottom teeth front on."
            />
        </div>
    )
}