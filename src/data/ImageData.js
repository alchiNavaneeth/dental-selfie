import { useState } from "react";


export const useImageData1 = () => {
    const [capturedImage1, setCapturedImage1] = useState(JSON.parse(sessionStorage.getItem("image1")));
    const [date1, setDate1] = useState(JSON.parse(sessionStorage.getItem("date1")));

    const handleImage1 = (image, date) => {
        setCapturedImage1(image);
        setDate1(date);
        sessionStorage.setItem("image1", JSON.stringify(image));
        sessionStorage.setItem("date1", JSON.stringify(date));
    }

    return { capturedImage1, date1, handleImage1 }
}

export const useImageData2 = () => {
    const [capturedImage2, setCapturedImage2] = useState(JSON.parse(sessionStorage.getItem("image2")));
    const [date2, setDate2] = useState(JSON.parse(sessionStorage.getItem("date2")));

    const handleImage2 = (image, date) => {
        setCapturedImage2(image);
        setDate2(date);
        sessionStorage.setItem("image2", JSON.stringify(image));
        sessionStorage.setItem("date2", JSON.stringify(date));
    }

    return { capturedImage2, date2, handleImage2 }
}

export const useImageData3 = () => {
    const [capturedImage3, setCapturedImage3] = useState(JSON.parse(sessionStorage.getItem("image3")));
    const [date3, setDate3] = useState(JSON.parse(sessionStorage.getItem("date3")));

    const handleImage3 = (image, date) => {
        setCapturedImage3(image);
        setDate3(date);
        sessionStorage.setItem("image3", JSON.stringify(image));
        sessionStorage.setItem("date3", JSON.stringify(date));
    }

    return { capturedImage3, date3, handleImage3 }
}

