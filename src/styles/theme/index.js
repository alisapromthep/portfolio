import { createTheme } from "@mui/material/styles";


const theme =createTheme({
    palette: {
        primary:{
            main: "#5F6CE8"
        },
        secondary: {
            main: '#7594EB'
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
                color: 'primary'
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
        },
        MuiImageList: {
            defaultProps: {
                display: 'flex',
            }
        },
        MuiToolbar:{
            defaultProps:{
                padding:'0',
            }
        }
    }

});

export default theme;