import { createTheme } from "@mui/material/styles";
import { blue, pink, green, red, grey, blueGrey, orange } from "@mui/material/colors";

export const theme = createTheme({
    palette: {
        primary: {
            main: blue[500],
        },
        secondary: {
            main: pink[500],
        },
        success: {
            main: green[500],
        },
        danger: {
            main: red[500],
        },
        warning: {
            main: orange[500],
        },
        grey: {
            light: grey[300],
            main: grey[500],
            medium: grey[700],
            dark: grey[900],
        },
        blueGrey: {
            light: blueGrey[300],
            main: blueGrey[500],
            medium: blueGrey[700],
            dark: blueGrey[800],
        },
        white: {
            main: "#ffffff",
            light: grey[100],
            dark: grey[200]
        }
    },
});