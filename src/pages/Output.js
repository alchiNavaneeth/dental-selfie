import React from "react";
import "../App.scss";
import Box from "@mui/material/Box";
import Stack from "@mui/material/Stack";
import { Typography } from "@mui/material";
import { useTheme } from "@mui/material/styles";
import { useImageData1, useImageData2, useImageData3 } from "../data/ImageData";

export const Output = () => {
    const theme = useTheme();

    return (
        <Box
            display="flex"
            flexDirection="column"
            height="100vh"
            paddingInline="20px"
            marginBlock="20px"
        >
            <Stack
                className="captured-output"
                justifyContent="center"
                alignItems="center"
                bgcolor={theme.palette.grey.whiteShade}
                width={"100%"}
                height={"170px"}
                color={theme.palette.blueGrey.blueGrey2}
                marginBottom={"8px"}
            >
                <Stack className='pointer' flexDirection="column" alignItems="center">
                    <Typography variant="body2" marginTop={"4px"} fontWeight={600}>
                        Take a Picture
                    </Typography>
                </Stack>
            </Stack>
        </Box>
    )
}