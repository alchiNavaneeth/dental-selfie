import React from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import { useRouteError } from "react-router-dom";
import { useTheme } from "@mui/material/styles";


export const ErrorPage = () => {
    const error = useRouteError();
    const theme = useTheme();

    return (
        <Box
            margin={"3rem 0"}
        >
             <Typography variant="h3" align="center" color={theme.palette.blueGrey.medium} fontWeight={600} marginBottom={"6px"}>
                Oops!
            </Typography>

            <Typography variant="body2" align="center" color={theme.palette.grey.dark} marginBottom={"16px"} >
                Sorry, an unexpected error has occurred.
            </Typography>

            <Typography variant="body2" align="center" color={theme.palette.blueGrey.medium} >
                <i>{error.statusText || error.message}</i>
            </Typography>
        </Box>
    )
}