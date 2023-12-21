import React from "react";
import "../App.scss";
import NavigateNextIcon from '@mui/icons-material/NavigateNext';

export const CustomButton = ({ className, text, icon }) => {
    return (
        <div className={`custom-button ${className}`}>
            {text}
            {
                icon === "next" && <NavigateNextIcon className="next-icon" />
            }
        </div>
    )
}