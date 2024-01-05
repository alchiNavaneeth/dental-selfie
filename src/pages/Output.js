import React from "react";
import "../App.scss";
import { Header } from '../components/Header';
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";
import Stack from "@mui/material/Stack";
import RestartAltIcon from '@mui/icons-material/RestartAlt';
import { useTheme } from "@mui/material/styles";
import { useImageData1, useImageData2, useImageData3 } from "../data/ImageData";

export const Output = () => {
    const theme = useTheme();

    const { capturedImage1, date1 } = useImageData1();
    const { capturedImage2, date2 } = useImageData2();
    const { capturedImage3, date3 } = useImageData3();

    const resetAll = () => {
        sessionStorage.clear();
        window.location.replace("/");
    }

    return (
        <Box className="output-wrapper">
            <Header />

            <Box paddingInline="20px" paddingBottom="20px">

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
                    date2 && <Box marginTop="6px" marginBottom="20px" fontSize="14px" color={theme.palette.blueGrey.blueGrey2} textAlign="center">{date1}</Box>
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
                    date3 && <Box marginTop="6px" marginBottom="20px" fontSize="14px" color={theme.palette.blueGrey.blueGrey2} textAlign="center">{date1}</Box>
                }

                <Button variant="outlined" fullWidth endIcon={<RestartAltIcon />} onClick={resetAll} >Reset all</Button>
            </Box>
        </Box>
    )
}