import { styled } from "@mui/material/styles";
import { CardMedia, CardContent, CardActionArea, Link} from "@mui/material";
import {slide_up} from './ProjectAnimation';


export const ProjectImg = styled(CardMedia)(({ src, theme }) => ({
    height: "35rem",
    "&:hover .project__detail": {
        animation: `${slide_up} 2s ease-in-out`,
        left:'20rem',
        cursor: "pointer",
        height:"10rem",
    }
}));


export const ProjectDetail = styled(CardActionArea)({
    height: "2rem",

})
