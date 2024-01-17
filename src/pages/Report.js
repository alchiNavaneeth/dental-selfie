import React from "react";

import { Header } from "../components/Header";
import { GoBack } from "../components/GoBack";
import { useImageData1, useImageData2, useImageData3, useNameData } from "../data/ImageData";

import {
    Box,
    Stack,
    Typography,
    useTheme,
    useMediaQuery,
} from "@mui/material";

import {
    Download,
} from "@mui/icons-material";



export const Report = () => {

    const theme = useTheme();
    const breakpointCheck = useMediaQuery(theme.breakpoints.up("md"));
    const extraBp = useMediaQuery(theme.breakpoints.up("lg"));
    const { capturedImage1, date1 } = useImageData1();
    const { capturedImage2, date2 } = useImageData2();
    const { capturedImage3, date3 } = useImageData3();
    const { username } = useNameData();

    const steps = [
        {
            key: 1,
            label: "Front side - oral prediction",
            imgPath: capturedImage1,
            date: date1
        },
        {
            key: 2,
            label: "Right side - oral prediction",
            imgPath: capturedImage2,
            date: date2
        },
        {
            key: 3,
            label: "Left side - oral prediction",
            imgPath: capturedImage3,
            date: date3
        }
    ];

    return (
        <Box
            className="report-wrapper"
        >
            <Header />
            <GoBack />

            <Box
                className="patient-details-wrapper"
                paddingInline={breakpointCheck ? 10 : "20px"}
            >
                <Stack
                    direction={breakpointCheck ? "row" : "column"}
                    alignItems="center"
                    justifyContent="space-between"
                    marginBottom={4}
                >
                    <Typography
                        order={!breakpointCheck && 2}
                        variant={breakpointCheck ? "h4" : "h6"}
                        color={theme.palette.primary.main}
                        fontWeight={500}
                    >
                        Patient No : A124-GD-9088
                    </Typography>
                    <Stack
                        className="pointer"
                        direction="row"
                        alignItems="center"
                        bgcolor={theme.palette.secondary.main}
                        color="white"
                        borderRadius="50px"
                        paddingInline={5}
                        paddingBlock={1}
                        mb={!breakpointCheck && 2}
                    >
                        <Typography variant="body1" marginRight={1} >
                            Download
                        </Typography>
                        <Download />
                    </Stack>
                </Stack>

                <Stack direction={breakpointCheck ? "row" : "column"} mb={4} >
                    <Stack direction="column" marginRight={(extraBp && 60) || (breakpointCheck && 30)} >
                        <Typography className="inline" variant={breakpointCheck ? "h6" : "body1"} fontWeight={500} color={theme.palette.dark.main} marginBottom={breakpointCheck ? 4 : 1}>
                            Patient Name:
                            <Typography className="inline" variant={breakpointCheck ? "h6" : "body1"} fontWeight={400} color={theme.palette.text.main} marginLeft={1} >
                                {username}
                            </Typography>
                        </Typography>
                        <Typography className="inline" variant={breakpointCheck ? "h6" : "body1"} fontWeight={500} color={theme.palette.dark.main} marginBottom={breakpointCheck ? 4 : 1}>
                            Age:
                            <Typography className="inline" variant={breakpointCheck ? "h6" : "body1"} fontWeight={400} color={theme.palette.text.main} marginLeft={1} >
                                33
                            </Typography>
                        </Typography>
                        <Typography className="inline" variant={breakpointCheck ? "h6" : "body1"} fontWeight={500} color={theme.palette.dark.main} marginBottom={!breakpointCheck && 1}>
                            Gender:
                            <Typography className="inline" variant={breakpointCheck ? "h6" : "body1"} fontWeight={400} color={theme.palette.text.main} marginLeft={1}>
                                Male
                            </Typography>
                        </Typography>
                    </Stack>

                    <Stack direction="column">
                        <Typography className="inline" variant={breakpointCheck ? "h6" : "body1"} fontWeight={500} color={theme.palette.dark.main} marginBottom={breakpointCheck ? 4 : 1}>
                            Blood Group:
                            <Typography className="inline" variant={breakpointCheck ? "h6" : "body1"} fontWeight={400} color={theme.palette.text.main} marginLeft={1} >
                                O+ve
                            </Typography>
                        </Typography>
                        <Typography className="inline" variant={breakpointCheck ? "h6" : "body1"} fontWeight={500} color={theme.palette.dark.main} marginBottom={breakpointCheck ? 4 : 1}>
                            Contact Details:
                            <Typography className="inline" variant={breakpointCheck ? "h6" : "body1"} fontWeight={400} color={theme.palette.text.main} marginLeft={1} >
                                +91 89765 56789
                            </Typography>
                        </Typography>
                        <Typography className="inline" variant={breakpointCheck ? "h6" : "body1"} fontWeight={500} color={theme.palette.dark.main}>
                            Address:
                            <Typography className="inline" variant={breakpointCheck ? "h6" : "body1"} fontWeight={400} color={theme.palette.text.main} marginLeft={1} >
                                33/90 Ground Street. Opposite
                            </Typography>
                        </Typography>
                    </Stack>
                </Stack>

                <hr color={theme.palette.grey.light} />
            </Box>


            <Box
                paddingInline={breakpointCheck ? 10 : "20px"}
                pb={4}
            >
                <Typography variant={breakpointCheck ? "h4" : "h6"} color={theme.palette.primary.main} mt={4} mb={2}>
                    Observations:
                </Typography>
                <Box ml={6} >
                    <ul>
                        <li>
                            <Typography variant="body1" color={theme.palette.text.main} mb={1} >
                                Mild to moderate gum inflammation: redness, swelling, tenderness.
                            </Typography>
                        </li>
                        <li>
                            <Typography variant="body1" color={theme.palette.text.main} mb={1} >
                                Bleeding from gums upon examination.
                            </Typography>
                        </li>
                        <li>
                            <Typography variant="body1" color={theme.palette.text.main} mb={1} >
                                Some area show deeper gum pockets (4mm to 6mm).
                            </Typography>
                        </li>
                        <li>
                            <Typography variant="body1" color={theme.palette.text.main} >
                                No dental cavities or decay were found.
                            </Typography>
                        </li>
                    </ul>
                </Box>


                <Typography variant={breakpointCheck ? "h4" : "h6"} color={theme.palette.primary.main} mt={4} mb={2}>
                    Diagnosis:
                </Typography>
                <Box ml={6} >
                    <ul>
                        <li>
                            <Typography variant="body1" color={theme.palette.text.main} mb={1} >
                                Diagnosis is mild to moderate gum disease (gingivitis) with early signs of periodontitis.
                            </Typography>
                        </li>
                    </ul>
                </Box>

                {
                    steps.map(step => {
                        return (
                            <Box key={step.key}>
                                <Typography variant={breakpointCheck ? "h4" : "h6"} color={theme.palette.primary.main} mt={4} mb={1}>
                                    {step.label}
                                </Typography>
                                <Typography variant="body1" color={theme.palette.text.main} ml={1}>
                                    You are showing some signs of gum disease. No signs of dental decay.
                                </Typography>

                                <Stack
                                    direction="row"
                                    alignItems="center"
                                    mt={3}
                                >
                                    <Box width="20px" height="20px" bgcolor={theme.palette.success.main} mr={1} ></Box>
                                    <Typography variant={breakpointCheck ? "body1" : "body2"} color={theme.palette.text.main}>
                                        Gum Disease
                                    </Typography>
                                </Stack>
                                <Stack
                                    direction="row"
                                    alignItems="center"
                                    mt={2}
                                >
                                    <Box width="20px" height="20px" bgcolor={theme.palette.warning.main} mr={1} ></Box>
                                    <Typography variant={breakpointCheck ? "body1" : "body2"} color={theme.palette.text.main}>
                                        Dental Decay
                                    </Typography>
                                </Stack>
                                <Box mt={4} overflow="hidden" width="100%">
                                    <img src={step.imgPath} alt="Captured" width="100%" style={{ borderRadius: "10px" }} height="100%" />
                                </Box>
                                <Typography variant={breakpointCheck ? "body2" : "caption"} color={theme.palette.text.main}>
                                    Captured on {step.date}
                                </Typography>
                            </Box>
                        )
                    })
                }

                <Typography variant={breakpointCheck ? "h4" : "h6"} color={theme.palette.primary.main} mt={4} mb={2}>
                    Recommendations:
                </Typography>
                <Box ml={6} >
                    <ul>
                        <li>
                            <Typography variant="body1" color={theme.palette.text.main} mb={1} >
                                Instructions on better oral care practices.
                            </Typography>
                        </li>
                        <li>
                            <Typography variant="body1" color={theme.palette.text.main} mb={1} >
                                Professional dental cleaning sessions.
                            </Typography>
                        </li>
                        <li>
                            <Typography variant="body1" color={theme.palette.text.main} mb={1} >
                                Possible treatment for gum disease.
                            </Typography>
                        </li>
                    </ul>
                </Box>
            </Box>
        </Box>
    )
}