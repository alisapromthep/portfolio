import { createTheme } from "@mui/material/styles";

const Colors = {
    primary:"#339989",
    secondary:"#a0cfd3",
    
}

const theme =createTheme({
    palette: {
        primary:{
            main: Colors.primary
        },
        secondary: {
            main: Colors.secondary
        }
    },

    components: {
        MuiButton: {
            defaultProps: {
                disableRipple: true,
            }
        }
    }

});

export default theme;