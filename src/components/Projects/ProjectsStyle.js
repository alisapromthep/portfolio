import { styled } from "@mui/material/styles";
import { CardMedia, CardActionArea, Link, ListItem} from "@mui/material";



export const ProjectImg = styled(CardMedia)(({ src, theme }) => ({
    height: "25rem",
    borderRadius: "2rem",
    objectFit: "contain",
    cursor: "pointer",

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
    backgroundColor: "white",
    borderRadius: "50%",
    xs:{
        width: "2rem",
        height: "2rem"
    },
    
    width: "4rem",
    height: "4rem",
    marginRight: "0.5rem"


})