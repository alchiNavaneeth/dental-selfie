// import React from "react";

import {
    Stack,
    useTheme,
} from "@mui/material";

import {
    KeyboardArrowLeft
} from '@mui/icons-material';

import { useNavigate } from "react-router-dom";

export const GoBack = () => {

    const theme = useTheme();
    const navigate = useNavigate();

    const goBack = () => {
        navigate(-1);
    }

    return (
        <div>
            <Stack
                display="flex"
                justifyContent="center"
                alignItems="center"
                className="pointer"
                width="36px"
                height="36px"
                color="white"
                borderRadius={50}
                marginLeft={2}
                marginBlock={2}
                bgcolor={theme.palette.secondary.main}
                onClick={goBack}
            >
                <KeyboardArrowLeft />
            </Stack>
        </div>
    )
}