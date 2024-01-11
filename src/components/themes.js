import { createTheme } from "@mui/material/styles";
import { green, red, grey, blueGrey, orange } from "@mui/material/colors";

export const theme = createTheme({
    typography: {
        "fontFamily": `"Poppins", sans-serif`,
        "fontSize": 14,
        "fontWeightLight": 300,
        "fontWeightRegular": 400,
        "fontWeightMedium": 500,
        "fontWeightSemibold": 600,
        "fontWeightBold": 700,
    },

    palette: {
        primary: {
            main: "#567CF0",
        },

        secondary: {
            main: "#292E86",
        },

        text: {
            main: "#656A7D",
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
        
        background: {
            main: "#FFFFFF",
            light: "#F5F5F5"
        },
        
        dark: {
            main: "#1E1E1E",
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
    },
});