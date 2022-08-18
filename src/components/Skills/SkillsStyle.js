import { ImageList, ImageListItem } from "@mui/material";
import { styled } from "@mui/material/styles";
import { marquee } from "./SkillsAnimation"; 

export const TechImg = styled("img")(({src, theme})=>({
    src: `url(${src})`,
    padding: "0.6rem",
    width: "4rem",
    height: "4rem",

    
}))

export const ImageBox = styled(ImageListItem)({
    width: "100%",
    margin: "1rem 0.2rem",
    backgroundColor: "white",
    backgroundImage: "linear-gradient(top, #f4f1ee, #fff)",
    borderRadius:"1rem",
    boxShadow: "0px 8px 10px 0px rgba(0, 0, 0, .3), inset 0px 4px 1px 1px white, inset 0px -3px 1px 1px rgba(204,198,197,.5)",
    transition: "all 0.5s cubic-bezier(0.19, 1,0.22,1) ",
})

export const ImageContainer = styled(ImageList)({
    display: "flex",
    overflow: "hidden",
    width: "200%", 
    position: "inherit",
    left: "0",
    animation: `${marquee} 20s linear infinite`,
})

