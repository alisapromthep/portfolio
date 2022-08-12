import { keyframes } from "@mui/material";

export const slide_right = keyframes`

0% {
    -webkit-transform: translateX(-1000px);
            transform: translateX(-1000px);
    opacity: 0;
    }
    100% {
        -webkit-transform: translateX(0);
                transform: translateX(0);
        opacity: 1;
    }
}
`