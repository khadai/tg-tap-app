import {createTheme} from "@mui/material";

export const theme = createTheme({
    palette: {
        mode: 'dark',
        background: {default: '#0C1615'},
        primary: {
            main: '#03DAB8',
        },
        text: {
            primary: '#fff',
            secondary:'#7B7B7B'
        }
    },
    typography:{
        fontFamily:'"Montserrat", sans-serif'
    }
});