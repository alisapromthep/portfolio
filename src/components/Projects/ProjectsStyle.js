import { styled } from "@mui/material/styles";
import { CardMedia, CardContent, CardActionArea, Link} from "@mui/material";
import {slide_up} from './ProjectAnimation';


export const ProjectImg = styled(CardMedia)(({ src, theme }) => ({
    height: "25rem",
    borderRadius: "2rem",
    objectFit: "scale-down",

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

export const ProjectButton = styled(Link)({
    border: "1px solid cornflowerblue",
    borderRadius: "5px",
    padding: "1rem",
    margin: "0.5rem",
})
