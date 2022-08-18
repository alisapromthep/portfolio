import { styled } from "@mui/material/styles";
import { CardMedia, CardContent, CardActionArea, Link, ListItem} from "@mui/material";
import {slide_up} from './ProjectAnimation';


export const ProjectImg = styled(CardMedia)(({ src, theme }) => ({
    height: "25rem",
    borderRadius: "2rem",
    objectFit: "contain",

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
    borderRadius: "5px",
    padding: "0.5rem",
    margin: "0.5rem",
    border: "1px solid white",
    color: "white",
})

export const ProjectTech = styled(ListItem)({
    width: "4rem",
    height: "4rem",
    margin: "1rem 0.2rem",
    backgroundColor: "white",
    borderRadius: "50%",


})