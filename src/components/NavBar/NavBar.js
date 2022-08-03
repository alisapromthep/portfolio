import React from 'react'
import { useTheme } from '@mui/material/styles';
import { useMediaQuery, AppBar, Toolbar, Container, Typography, Box, Button } from '@mui/material';
import ColorLensIcon from '@mui/icons-material/ColorLens';

const NavBar = () => {

    const sections = ['About Me', 'Resume', 'Projects'];


    return (
        <AppBar position="static">
            <Container maxWidth="xl">
                <Toolbar>
                    <ColorLensIcon sx={{ display: "flex", mr: 1 }}/>
                    <Typography
                        variant="h6"
                        noWrap
                        component="a"
                        href="/"
                        sx={{
                        mr: 2,
                        display: "flex",
                        fontFamily: 'monospace',
                        fontWeight: 700,
                        letterSpacing: '.3rem',
                        color: 'white',
                        textDecoration: 'none',
                        }}
                    >
                        LOGO
                    </Typography>
                    <Box sx={{ flexGrow: 3, display:'flex' }}>
                        {sections.map((section) => (
                        <Button
                            key={section}
                            onClick={()=>{}}
                            sx={{ my: 2, color: 'white', display: 'block' }}
                        >
                            {section}
                        </Button>
                        ))}
                    </Box>


                </Toolbar>
            </Container>
        </AppBar>
    )
}

export default NavBar