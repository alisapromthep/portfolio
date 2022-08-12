import { styled } from "@mui/material/styles";
import { CardMedia, CardContent, Box } from "@mui/material";
import {slide_right} from './ProjectAnimation';


export const ProjectImg = styled(CardMedia)(({ src, theme }) => ({
    padding: "0 1rem",
    width: "40rem",
    background: 'transparent',
}));

export const ProjectContainer = styled(CardContent)({
    width: "30rem",
    height: "40rem",
    padding: "0 1rem",
    color: 'white',
    position: 'absolute',
    bottom: '0.5rem',
    left: '12rem',
    backgroundColor: 'lightblue',
    animation: `${slide_right}`,
    transition: `2s ease-in-out`,
    
    '&:hover':{
        left:'40rem',
        cursor: "pointer",
    }
});
