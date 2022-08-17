import React from 'react';
import { TextField, Box, Stack,Button } from '@mui/material';
import AirplaneTicketIcon from '@mui/icons-material/AirplaneTicket';


const Form = () => {
    return (
        <Box
        component="form"
        autoComplete="off"
        sx={{
        '& .MuiTextField-root': { m: 1, width: '25ch' },
        }}
        >
            <Stack>
                <TextField
                required
                id="name"
                label="Name"
                defaultValue={'Your name'}
                />
                <TextField
                required
                id="email"
                label="Email"
                defaultValue={'Your email'}
                />
                <TextField
                id="subjust"
                label="Subject Line"
                defaultValue={'Hey! I visited your site...'}
                />
                <TextField
                required
                id="message"
                label="Message"
                multiline
                rows={4}
                defaultValue={'Your message. . . '}
                />
                <Button variant="outlined" size="small"
                endIcon={<AirplaneTicketIcon />}
                sx={{
                    width: "8rem",
                    margin: "0 20%",
                }}>
                    Connect
                </Button>
            </Stack>


        </Box>

    )
}

export default Form