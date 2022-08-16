import { keyframes } from "@mui/material";

export const slide_up = keyframes`

0% {
    -webkit-transform: translateY(0);
            transform: translateY(0);
    opacity: 0;
    }
    100% {
        -webkit-transform: translateY(20rem);
                transform: translateY(20rem);
        opacity: 1;
    }
}
`