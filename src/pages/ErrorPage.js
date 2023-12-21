import React from "react";
import Box from "@mui/material/Box";
import { useRouteError } from "react-router-dom";


export const ErrorPage = () => {
    const error = useRouteError();

    return (
        <Box
            display="flex"
            flexDirection="column"
            alignItems="center"
            justifyContent="center"
            height="100vh"
            className="error-page"
        >
            <h2>Oops!</h2>
            <p>Sorry, an unexpected error has occurred.</p>
            <p>
                <i>{error.statusText || error.message}</i>
            </p>
        </Box>
    )
}