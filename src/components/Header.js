import React from "react";
import {
    Stack,
    Typography,
    useMediaQuery,
} from "@mui/material";

import HomeIcon from '@mui/icons-material/Home';
// import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import { useTheme } from "@mui/material/styles";
// import { Typography } from "@mui/material";
import { useNavigate } from "react-router-dom";

export const Header = () => {

    const theme = useTheme();
    const navigate = useNavigate();
    const breakpointCheck = useMediaQuery(theme.breakpoints.up('md'));

    const handleNavigateHome = () => {
        navigate("/");
    }

    return (
        <Stack
            direction="row"
            justifyContent="space-between"
            alignItems="center"
            className="header-wrapper"
            bgcolor={theme.palette.primary.main}
            padding={".25rem 1rem"}
            marginBottom={"30px"}
            color="white"
            width="100%"
            height={60}
        >
            <Stack direction="row" alignItems="center" >
                <svg width="27" height="30" viewBox="0 0 27 30" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M10.9043 3.05078C9.91992 2.28906 8.71289 1.87305 7.4707 1.87305C4.37695 1.87305 1.875 4.375 1.875 7.46875V7.83203C1.875 8.75781 2.0918 9.66602 2.50195 10.498L3.87891 13.2578C4.14258 13.7793 4.32422 14.3359 4.42969 14.9102L6.58008 26.9688C6.69727 27.625 7.25977 28.1055 7.92188 28.1289C8.58398 28.1523 9.17578 27.6953 9.32812 27.0508L11.0215 19.9434C11.2617 18.9648 12.1289 18.2793 13.125 18.2793C14.1211 18.2793 14.9883 18.9648 15.2227 19.9375L16.916 27.0449C17.0684 27.6953 17.6602 28.1465 18.3223 28.123C18.9844 28.0996 19.5469 27.6191 19.6641 26.9629L21.8145 14.9043C21.9199 14.3301 22.1016 13.7734 22.3652 13.252L23.7422 10.4922C24.1582 9.66602 24.3691 8.75195 24.3691 7.82617V7.70313C24.3691 4.48047 21.7559 1.86719 18.5332 1.86719C17.1211 1.86719 15.7559 2.38281 14.6895 3.30859L14.502 3.47266L15.6445 4.36328C16.0547 4.67969 16.125 5.27148 15.8086 5.68164C15.4922 6.0918 14.9004 6.16211 14.4902 5.8457L13.0605 4.73242L10.8926 3.04492L10.9043 3.05078Z" fill="white" />
                </svg>
                <Typography marginLeft={2} fontSize={breakpointCheck ? 20 : 16} fontWeight={600} fontFamily="'Syne', sans-serif">
                    DENTAL AI OBSERVATION
                </Typography>
            </Stack>
            <Stack>
                <HomeIcon className="pointer home-icon" fontSize="medium" onClick={handleNavigateHome} />
            </Stack>

        </Stack>
    )
}