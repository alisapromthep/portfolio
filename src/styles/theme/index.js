import { Link } from "@mui/material";
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
        MuiAppBar: {
            defaultProps: {
                color: 'transparent',
                elevation: 0,
            }

        },

        MuiButton: {
            defaultProps: {
                disableRipple: true,
            }
        },

        MuiLink: {
            defaultProps: {
                underline: 'none',
                color: 'primary',
            }
        },
        MuiListItem: {
            defaultProps: {
                color:'primary',
            }
        }
    }

});

export default theme;