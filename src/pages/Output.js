import React, { useState } from "react";
import "../App.scss";
import { Header } from '../components/Header';
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";
import Stack from "@mui/material/Stack";
import RestartAltIcon from '@mui/icons-material/RestartAlt';
import { useTheme } from "@mui/material/styles";
import { useImageData1, useImageData2, useImageData3, useNameData } from "../data/ImageData";
import Typography from '@mui/material/Typography';
import KeyboardArrowLeftIcon from '@mui/icons-material/KeyboardArrowLeft';
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';


export const Output = () => {
    const theme = useTheme();
    const [activeStep, setActiveStep] = useState(0);

    const { capturedImage1, date1 } = useImageData1();
    const { capturedImage2, date2 } = useImageData2();
    const { capturedImage3, date3 } = useImageData3();
    const { username } = useNameData();

    const steps = [
        {
            label: "Right side - oral prediction",
            imgPath: capturedImage1,
            date: date2
        },
        {
            label: "Front side - oral prediction",
            imgPath: capturedImage2,
            date: date1
        },
        {
            label: "Left side - oral prediction",
            imgPath: capturedImage3,
            date: date3
        }
    ]

    const resetAll = () => {
        sessionStorage.clear();
        window.location.replace("/");
    }

    const handlePrev = () => {
        if (activeStep <= 0) {
            return
        }
        setActiveStep(prevActiveStep => prevActiveStep - 1);
    }

    const handleNext = () => {
        if (activeStep >= steps.length - 1) {
            return
        }
        setActiveStep(nextActiveStep => nextActiveStep + 1);
    }

    return (
        <Box className="output-wrapper">
            <Header />

            <Box paddingInline="20px" paddingBottom="20px">

                <Stack
                    justifyContent="center"
                    width={"100%"}
                    marginBottom="32px"
                    overflow="hidden"
                >
                    <Typography variant="h4" align="center" color={theme.palette.grey.dark} marginBottom="8px" >
                        Your Results
                    </Typography>
                    <Typography variant="body2" align="center" color={theme.palette.grey.variant2} fontWeight={600} marginBottom="20px" >
                        Hi {username}. We analyzed your images. Here are the results:
                    </Typography>
                    <Typography variant="body1" align="center" color={theme.palette.secondary.main} fontWeight={500} marginBottom="32px" >
                        You are showing some signs of gum disease. No signs of dental decay. You can scroll through your images.
                    </Typography>

                    <Typography variant="caption" align="center" color={theme.palette.grey.variant3}>
                        {steps[activeStep].label}
                    </Typography>

                    <Stack
                        className="nav-image"
                        flexDirection="row"
                        justifyContent="space-between"
                        alignItems="center"
                        width="100%"
                    >
                        <KeyboardArrowLeftIcon className="pointer" fontSize="medium" htmlColor={theme.palette.blueGrey.blueGrey2} onClick={handlePrev} />
                        <div>
                            <img src={steps[activeStep].imgPath} alt="Captured" width="100%" />
                        </div>
                        <KeyboardArrowRightIcon className="pointer" fontSize="medium" htmlColor={theme.palette.blueGrey.blueGrey2} onClick={handleNext} />
                    </Stack>
                    <Box
                        display="flex"
                        alignItems="center"
                        justifyContent="center"
                        marginBottom="20px"
                    >
                        <Stack
                            flexDirection="row"
                            alignItems="center"
                            marginRight="20px"
                        >
                            <Typography variant="caption" color={theme.palette.grey.variant3} marginRight="3px">
                                Dental Decay
                            </Typography>
                            <Box width="10px" height="10px" bgcolor={theme.palette.success.main}></Box>
                        </Stack>
                        <Stack
                            flexDirection="row"
                            alignItems="center"
                        >
                            <Typography variant="caption" color={theme.palette.grey.variant3} marginRight="3px">
                                Gum Disease
                            </Typography>
                            <Box width="10px" height="10px" bgcolor={theme.palette.warning.main}></Box>
                        </Stack>
                    </Box>
                    <Typography variant="body2" color={theme.palette.grey.variant3} align="center">
                        Captured on { steps[activeStep].date }
                    </Typography>
                </Stack>




                {/*                 
                <Stack
                    className="captured-output"
                    justifyContent="center"
                    alignItems="center"
                    bgcolor={theme.palette.grey.whiteShade}
                    width={"100%"}
                    height={"170px"}
                    color={theme.palette.blueGrey.blueGrey2}
                    marginBottom={date1 ? "" : "32px"}
                >
                    {
                        capturedImage1 ?
                            <div>
                                <img src={capturedImage1} alt="Captured Img" className="captured-image" />
                            </div>
                            :
                            <div>No Image Found</div>
                    }
                </Stack>

                {
                    date1 && <Box marginTop="6px" marginBottom="20px" fontSize="14px" color={theme.palette.blueGrey.blueGrey2} textAlign="center">{date1}</Box>
                }

                <Stack
                    className="captured-output"
                    justifyContent="center"
                    alignItems="center"
                    bgcolor={theme.palette.grey.whiteShade}
                    width={"100%"}
                    height={"170px"}
                    color={theme.palette.blueGrey.blueGrey2}
                    marginBottom={date2 ? "" : "32px"}
                >
                    {
                        capturedImage2 ?
                            <div>
                                <img src={capturedImage2} alt="Captured Img" className="captured-image" />
                            </div>
                            :
                            <div>No Image Found</div>
                    }
                </Stack>

                {
                    date2 && <Box marginTop="6px" marginBottom="20px" fontSize="14px" color={theme.palette.blueGrey.blueGrey2} textAlign="center">{date2}</Box>
                }
                <Stack
                    className="captured-output"
                    justifyContent="center"
                    alignItems="center"
                    bgcolor={theme.palette.grey.whiteShade}
                    width={"100%"}
                    height={"170px"}
                    color={theme.palette.blueGrey.blueGrey2}
                    marginBottom={date3 ? "" : "32px"}
                >
                    {
                        capturedImage3 ?
                            <div>
                                <img src={capturedImage3} alt="Captured Img" className="captured-image" />
                            </div>
                            :
                            <div>No Image Found</div>
                    }
                </Stack>

                {
                    date3 && <Box marginTop="6px" marginBottom="20px" fontSize="14px" color={theme.palette.blueGrey.blueGrey2} textAlign="center">{date3}</Box>
                } */}

                <Button variant="outlined" fullWidth endIcon={<RestartAltIcon />} onClick={resetAll} >Reset all</Button>
            </Box>
        </Box>
    )
}