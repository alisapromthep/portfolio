import { styled } from "@mui/material/styles";
import { bouncing } from './HeroAnimation';
import {Button} from "@mui/material";

export const HeroImage = styled("img")(({ src, theme }) => ({
    src: `url(${src})`,
    paddingLeft: "4rem",
    width: "23rem",
    [theme.breakpoints.down("md")]: {
        width: "20rem",
    },
    [theme.breakpoints.down("sm")]: {
        width: "15rem",
        height: "15rem",
    },
    animation: `${bouncing} 5s linear infinite`,
    }));

export const HeroButton = styled(Button)({
    marginTop: "1rem",
    backgroundImage: "linear-gradient(top, #f4f1ee, #fff)",
    boxShadow: "0px 8px 10px 0px rgba(0, 0, 0, .3), inset 0px 1px 1px 1px white, inset 0px -3px 1px 1px rgba(204,198,197,.5)",

})