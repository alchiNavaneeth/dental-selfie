import React, { useState } from "react";
import "../App.scss";

import { useNavigate } from "react-router-dom";
import { Header } from '../components/Header';
import { GoBack } from "../components/GoBack";

import {
    Box,
    Stack,
    useTheme,
    Typography,
    useMediaQuery,
    darken
} from "@mui/material";

import {
    RestartAlt,
    KeyboardArrowLeft,
    KeyboardArrowRight,
    SummarizeOutlined,
} from '@mui/icons-material';

import { useImageData1, useImageData2, useImageData3, useNameData } from "../data/ImageData";


export const Output = () => {
    const theme = useTheme();
    const navigate = useNavigate();
    const breakpointCheck = useMediaQuery(theme.breakpoints.up('md'));

    const [activeStep, setActiveStep] = useState(0);
    const { capturedImage1, date1 } = useImageData1();
    const { capturedImage2, date2 } = useImageData2();
    const { capturedImage3, date3 } = useImageData3();
    const { username } = useNameData();

    const steps = [
        {
            label: "Front side - oral prediction",
            imgPath: capturedImage1,
            date: date1
        },
        {
            label: "Right side - oral prediction",
            imgPath: capturedImage2,
            date: date2
        },
        {
            label: "Left side - oral prediction",
            imgPath: capturedImage3,
            date: date3
        }
    ]

    const resetAll = () => {
        sessionStorage.clear();
        navigate("/");
    }

    const handlePrev = () => {
        if (activeStep <= 0) {
            setActiveStep(steps.length - 1);
            return
        }
        setActiveStep(prevActiveStep => prevActiveStep - 1);
    }

    const handleNext = () => {
        if (activeStep >= steps.length - 1) {
            setActiveStep(0);
            return
        }
        setActiveStep(nextActiveStep => nextActiveStep + 1);
    }

    return (
        <Box className="output-wrapper" paddingBottom={4} >
            <Header />
            <GoBack />

            <Stack
                direction="column"
                alignItems="center"
                paddingInline={breakpointCheck ? 0 : "20px"}
            >
                <Typography variant={breakpointCheck ? "h3" : "h5"} color={theme.palette.dark.main} gutterBottom>
                    Your Results
                </Typography>
                <Typography variant="body1" color={theme.palette.text.main}>
                    Hello {username}. We have analysed your images. Here are the results:
                </Typography>
            </Stack>

            <Box
                marginTop="20px"
                marginInline={breakpointCheck ? 30 : "20px"}
                padding={breakpointCheck ? 4 : 2}
                borderRadius={2}
                bgcolor={theme.palette.background.light}
            >
                <Typography variant={breakpointCheck ? "h4" : "h6"} color={theme.palette.primary.main} gutterBottom>
                    {steps[activeStep].label}
                </Typography>
                <Typography variant="body1" color={theme.palette.text.main} >
                    You are showing some signs of gum disease. No signs of dental decay.
                </Typography>

                <Stack
                    direction="row"
                    alignItems="center"
                    mt={4}
                >
                    <Box width="20px" height="20px" bgcolor={theme.palette.success.main} mr={1} ></Box>
                    <Typography variant="body1" color={theme.palette.text.main}>
                        Gum Disease
                    </Typography>
                </Stack>
                <Stack
                    direction="row"
                    alignItems="center"
                    mt={2}
                >
                    <Box width="20px" height="20px" bgcolor={theme.palette.warning.main} mr={1} ></Box>
                    <Typography variant="body1" color={theme.palette.text.main}>
                        Dental Decay
                    </Typography>
                </Stack>

                <Stack
                    className="nav-image"
                    flexDirection="row"
                    justifyContent="space-between"
                    alignItems="center"
                    position="relative"
                    marginTop={4}
                    width="100%"
                >
                    <Box
                        className="pointer"
                        position="absolute"
                        left={10}
                        display="flex"
                        justifyContent="center"
                        alignItems="center"
                        borderRadius="50px"
                        width="36px"
                        height="36px"
                        bgcolor={"rgba(0,0,0,.3)"}
                        sx={{
                            '&:hover': {
                                backgroundColor: "rgba(0,0,0,.5)",
                            }
                        }}
                        color="white"
                        onClick={handlePrev}
                    >
                        <KeyboardArrowLeft fontSize="medium" />
                    </Box>
                    <Box overflow="hidden" width="100%">
                        <img src={steps[activeStep].imgPath} alt="Captured" style={{ borderRadius: "10px" }} width="100%" height="100%" />
                    </Box>
                    <Box
                        className="pointer"
                        position="absolute"
                        right={10}
                        display="flex"
                        justifyContent="center"
                        alignItems="center"
                        borderRadius="50px"
                        width="36px"
                        height="36px"
                        bgcolor={"rgba(0,0,0,.3)"}
                        sx={{
                            '&:hover': {
                                backgroundColor: "rgba(0,0,0,.5)",
                            }
                        }}
                        color="white"
                        onClick={handleNext}
                    >
                        <KeyboardArrowRight fontSize="medium" />
                    </Box>
                </Stack>
                <Stack direction="row" justifyContent={breakpointCheck ? "flex-end" : "flex-start"} marginBlock={2} >
                    <Typography variant="body1" color={theme.palette.text.main}>
                        Captured on {steps[activeStep].date}
                    </Typography>
                </Stack>

                <Stack className="dot-indication" direction="row" justifyContent="center">
                    <div className={activeStep === 0 ? "selected" : ""} ></div>
                    <div className={activeStep === 1 ? "selected" : ""} ></div>
                    <div className={activeStep === 2 ? "selected" : ""} ></div>
                </Stack>
            </Box>
            <Stack
                direction={breakpointCheck ? "row" : "column"}
                justifyContent="center"
                alignItems="center"
                color="white"
                marginTop={4}
                marginInline={2}
            >
                <Stack
                    className="pointer"
                    direction="row"
                    justifyContent="center"
                    alignItems="center"
                    width={breakpointCheck ? "auto" : "100%"}
                    marginRight={breakpointCheck ? 4 : ""}
                    marginBottom={breakpointCheck ? "" : 2}
                    bgcolor={theme.palette.primary.main}
                    sx={{
                        '&:hover': {
                            backgroundColor: darken(theme.palette.primary.main, .2)
                        }
                    }}
                    paddingInline={4}
                    paddingBlock={1}
                    borderRadius="50px"
                    onClick={resetAll}
                >
                    <Typography variant="body1" marginRight={1}>
                        Reset All
                    </Typography>
                    <RestartAlt />
                </Stack>
                <Stack
                    className="pointer"
                    direction="row"
                    justifyContent="center"
                    alignItems="center"
                    width={breakpointCheck ? "auto" : "100%"}
                    bgcolor={theme.palette.primary.main}
                    sx={{
                        '&:hover': {
                            backgroundColor: darken(theme.palette.primary.main, .2)
                        }
                    }}
                    paddingInline={4}
                    paddingBlock={1}
                    borderRadius="50px"
                    onClick={() => navigate("/report")}
                >
                    <Typography variant="body1" marginRight={1}>
                        View Report
                    </Typography>
                    <SummarizeOutlined />
                </Stack>
            </Stack>
        </Box>
    )
}