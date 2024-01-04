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
            whiteShade: grey[100],
            variant1: grey[300],
            variant2: grey[400],
            main: grey[500],
            variant3: grey[600],
            variant4: grey[700],
            dark: grey[800],
        },
        blueGrey: {
            main: blueGrey[500],
            blueGrey1: blueGrey[600],
            blueGrey2: blueGrey[700],
        }
    },
});