import React, { useEffect, useState } from "react";
import Stack from "@mui/material/Stack";
import Box from "@mui/material/Box";
import "../App.scss";
import { useTheme } from "@mui/material/styles";

export const Pager = ({ number }) => {
    
    const theme = useTheme();
    const [selected, setSelected] = useState(null);

    useEffect(() => {
        if (number) {
            setSelected(number);
        }
    }, [number]);


    return (
        <Stack
            direction="row"
            justifyContent="space-around"
            marginBottom="20px"
            className="pager-wrapper"
        >
            <Box className={`number`}>
                <Box
                    className={`inside-number ${selected >= 1 && "selected"}`}
                    bgcolor={selected >= 1 ? theme.palette.success.main : theme.palette.grey.main}
                    color={selected >= 1 ? "white" : theme.palette.grey.variant3}
                >
                    1
                </Box>
            </Box>
            <Box className={`number ${selected >= 2 && "selected"}`}>
                <Box
                    className={`inside-number ${selected >= 2 && "selected"}`}
                    bgcolor={selected >= 2 ? theme.palette.success.main : theme.palette.grey.variant1}
                    color={selected >= 2 ? "white" : theme.palette.grey.variant3}
                >
                    2
                </Box>
            </Box>
            <Box className={`number ${selected >= 3 && "selected"}`}>
                <Box
                    className={`inside-number ${selected >= 3 && "selected"}`}
                    bgcolor={selected >= 3 ? theme.palette.success.main : theme.palette.grey.variant1}
                    color={selected >= 3 ? "white" : theme.palette.grey.variant3}
                >
                    3
                </Box>
            </Box>
        </Stack>
    )
}