import { styled } from "@mui/material/styles";

export const TechImg = styled("img")(({src, theme})=>({
    src: `url(${src})`,
    padding: "0 0.2rem",
    width: "5rem",
    height: "5rem",
}))  
