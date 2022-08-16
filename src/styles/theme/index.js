import { createTheme } from "@mui/material/styles";


const theme =createTheme({
    palette: {
        primary:{
            main: "#7594EB"
        },
        secondary: {
            main: '#FF9770'
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
                color: 'secondary'
            }
        },

        MuiLink: {
            defaultProps: {
                underline: 'none',
                color: 'secondary',
            }
        },
        MuiListItem: {
            defaultProps: {
                color:'primary',
            }
        },
        MuiImageList: {
            defaultProps: {
                display: 'flex',
            }
        }
    }

});

export default theme;