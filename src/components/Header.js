import React from "react";
import Stack from "@mui/material/Stack";
import HomeIcon from '@mui/icons-material/Home';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import { useTheme } from "@mui/material/styles";
import { Typography } from "@mui/material";
import { useNavigate } from "react-router-dom";

export const Header = () => {

    const theme = useTheme();
    const history = useNavigate();

    const handleNavigateHome = () => {
        window.location.href = "/";
    }

    const handleBack = () => {
        history(-1);
    }

    return (
        <Stack
            direction="row"
            justifyContent="space-between"
            alignItems="center"
            useFlexGap
            className="header-wrapper"
            bgcolor={theme.palette.primary.main}
            padding={".25rem 1rem"}
            marginBottom={"30px"}
            color={"white"}
            height={50}
        >
            <ArrowBackIosIcon className="pointer reload-icon" onClick={handleBack} />
            <Typography className="center-text" variant="div" component="div" fontSize={20} fontWeight={600} >
                Dental AI Observation
            </Typography>
            <HomeIcon className="pointer home-icon" onClick={handleNavigateHome} />
        </Stack>
    )
}