import React, {
    useEffect,
    useState
} from "react";

import {
    useTheme,
    Box,
    useMediaQuery,
} from "@mui/material";

import "../App.scss";
import FrontImage from "../assets/front.svg";
import RightImage from "../assets/right.svg";
import LeftImage from "../assets/left.svg";

export const Pager = ({ number }) => {

    const theme = useTheme();
    const [selected, setSelected] = useState(null);
    const breakpointCheck = useMediaQuery(theme.breakpoints.up('md'));

    useEffect(() => {
        if (number) {
            setSelected(number);
        }
    }, [number]);

    return (
        <Box
            display="flex"
            flexDirection="row"
            justifyContent="space-around"
            marginBottom={ breakpointCheck ? "40px" : "30px"}
            className="pager-wrapper"
        >
            <Box
                className="checkpoint"
                width={breakpointCheck ? "100px" : "60px"} height={breakpointCheck ? "100px" : "60px"}
            >
                <img src={FrontImage} alt="Front View" width="100%" height="100%" />
            </Box>

            <Box
                className={`checkpoint ${selected > 1 && "selected"}`}
                border={selected > 1 && `2px solid ${theme.palette.primary.main}`}
                width={breakpointCheck ? "100px" : "60px"} height={breakpointCheck ? "100px" : "60px"}
                borderRadius="50%"
            >
                <img src={RightImage} alt="Right View" width="100%" height="100%" />
            </Box>
            
            <Box
                className={`checkpoint ${selected > 2 && "selected"}`}
                border={selected > 2 && `2px solid ${theme.palette.primary.main}`}
                width={breakpointCheck ? "100px" : "60px"} height={breakpointCheck ? "100px" : "60px"}
                borderRadius="50%"
            >
                <img src={LeftImage} alt="Left View" width="100%" height="100%" />
            </Box>


            {/* <Box className={`number`}>
                <Box
                    className={`inside-number ${selected >= 1 && "selected"}`}
                    bgcolor={selected >= 1 ? theme.palette.success.main : theme.palette.grey.main}
                    color={selected >= 1 ? "white" : theme.palette.grey.main}
                >
                    1
                </Box>
            </Box>
            <Box className={`number ${selected >= 2 && "selected"}`}>
                <Box
                    className={`inside-number ${selected >= 2 && "selected"}`}
                    bgcolor={selected >= 2 ? theme.palette.success.main : theme.palette.grey.main}
                    color={selected >= 2 ? "white" : theme.palette.grey.main}
                >
                    2
                </Box>
            </Box>
            <Box className={`number ${selected >= 3 && "selected"}`}>
                <Box
                    className={`inside-number ${selected >= 3 && "selected"}`}
                    bgcolor={selected >= 3 ? theme.palette.success.main : theme.palette.grey.main}
                    color={selected >= 3 ? "white" : theme.palette.grey.main}
                >
                    3
                </Box>
            </Box> */}
        </Box>
    )
}