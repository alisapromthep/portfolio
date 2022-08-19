import React from 'react';
import { TextField, Box, Stack,Button } from '@mui/material';
import RocketLaunchIcon from '@mui/icons-material/RocketLaunch';

const Form = ({handleSubmit}) => {
    return (
        <Box
        component="form"
        onSubmit={handleSubmit}
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
                placeholder={'Your name'}
                />
                <TextField
                required
                id="email"
                label="Email"
                placeholder={'Your email'}
                />
                <TextField
                required
                id="message"
                label="Message"
                multiline
                rows={4}
                placeholder={'Your message. . . '}
                />
                <Button variant="outlined" size="small"
                endIcon={<RocketLaunchIcon />}
                sx={{
                    width: "8rem",
                    margin: "0 20%",
                }}
                type="submit"
                >
                    Connect
                </Button>
            </Stack>


        </Box>

    )
}

export default Form