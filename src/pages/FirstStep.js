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

    const handleCapture = (target) => {
        if (target.files) {
            if (target.files.length !== 0) {
                const img = target.files[0];
                const imgUrl = URL.createObjectURL(img);
                setCapturedImg(imgUrl);
            }
        }
    }

    return (
        <div>
            <Header />
            <Pager number="1" />
            <Content
                capturedImg={capturedImg}
                handleCamera={handleCamera}
                cameraStatus={cameraStatus}
                handleCapture={handleCapture}
                heading="Upload front view"
                description="Let's see your top and bottom teeth front on."
            />
        </div>
    )
}