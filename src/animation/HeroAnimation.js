import { keyframes } from "@mui/material";

export const bouncing = keyframes`
0% {
    transform: translateY(-20px);
}
50% {
    transform: translateY(20px);
}
100% {
    transform: translateY(-20px);
}
}
`;