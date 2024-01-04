import { useState } from "react";


export const useImageData1 = () => {
    const [capturedImage1, setCapturedImage1] = useState(null);

    const handleImage1 = (image) => {
        setCapturedImage1(image);
    }

    return { capturedImage1, handleImage1 }
}

export const useImageData2 = () => {
    const [capturedImage2, setCapturedImage2] = useState(null);

    const handleImage2 = (image) => {
        setCapturedImage2(image);
    }

    return { capturedImage2, handleImage2 }
}

export const useImageData3 = () => {
    const [capturedImage3, setCapturedImage3] = useState(null);

    const handleImage3 = (image) => {
        setCapturedImage3(image);
    }

    return { capturedImage3, handleImage3 }
}

