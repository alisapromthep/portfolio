import { styled } from "@mui/material/styles";
import { bouncing } from './HeroAnimation';
import {Container} from "@mui/material";

export const HeroImage = styled("img")(({ src, theme }) => ({
    src: `url(${src})`,
    padding: "0 3rem",
    width: "20rem",
    [theme.breakpoints.down("md")]: {
        width: "20rem",
    },
    [theme.breakpoints.down("sm")]: {
        width: "15rem",
        height: "15rem",
    },
    animation: `${bouncing} 5s linear infinite`,
    }));

