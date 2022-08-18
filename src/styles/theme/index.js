import { createTheme } from "@mui/material/styles";
import LilitaOneWoff from '../../assets/font/LilitaOne.woff';
import LilitaOneWoff2 from '../../assets/font/LilitaOne.woff2';


const theme =createTheme({
    palette: {
        primary:{
            main: "#6A58CA"
        },
        secondary: {
            main: '#7594EB'
        }
    },

    typography: {
        frontFamily: 'Lilita One',
    },

    components: {
        MuiCssBaseline:{
            styleOverrides: `
            @font-face {
                font-family: 'Lilita One';
                src: local('Lilita One'), url(${LilitaOneWoff2}) format('woff2'),
                    url(${LilitaOneWoff}) format('woff');
                font-weight: 400;
                font-style: normal;
                font-display: swap;
            }`
        },
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
        }
    }

});

export default theme;