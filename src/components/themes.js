import { createTheme } from "@mui/material/styles";
import { blue, pink, green, red, grey } from "@mui/material/colors";

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
        grey: {
            variant1: grey[300],
            variant2: grey[400],
            main: grey[500],
            variant3: grey[600],
        }
    },
});