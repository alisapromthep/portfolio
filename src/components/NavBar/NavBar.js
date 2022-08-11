import React from 'react'
import { useTheme } from '@mui/material/styles';
import { useMediaQuery, AppBar, Toolbar, Container, Typography, Box, Button, Link, ListItem, List } from '@mui/material';
import AirplaneTicketIcon from '@mui/icons-material/AirplaneTicket';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import { useState, useEffect } from 'react';


const NavBar = () => {

    const [activeLink, setActiveLink] = useState('home');
    const [scrolled, setScrolled] = useState(false);

    useEffect(()=>{
        const onScroll = ()=>{
            if (window.scrollY > 50) {
                setScrolled(true);
            } else {
                setScrolled(false);
            }
        }

        return () => window.removeEventListener("scrolled", onScroll);
    }, [])

    return (
        <AppBar position="static" className={scrolled? "scrolled": ""}>
            <Container>
                <Toolbar>
                    <AirplaneTicketIcon sx={{ display: "flex", mr: 1 }}/>
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
                        color: 'primary',
                        textDecoration: 'none',
                        }}
                    >
                        Alisa
                    </Typography>
                    <List
                    sx={{
                        display: 'flex'
                    }}
                    >
                        <ListItem>
                            <Link href="#home">About Me</Link>
                        </ListItem>
                        <ListItem>
                            <Link href="#skills">Skills</Link>
                        </ListItem>
                        <ListItem>
                            <Link href="#projects">Projects</Link>
                        </ListItem>
                        <ListItem>
                            <Link hred="#resume">Resume</Link>
                        </ListItem>
                    </List>
                    <Box
                    sx={{
                        display: "flex"
                    }}
                    >
                        <Link
                        href="https://www.linkedin.com/in/alisa-promthep/"
                        target="_blank"
                        rel="noopener"
                        color="inherit"
                        >
                            <LinkedInIcon/>
                        </Link>
                        <Link
                        href="https://github.com/alisapromthep"
                        target="_blank"
                        rel="noopener"
                        color="inherit"
                        >
                            <GitHubIcon/>
                        </Link>
                    </Box>


                </Toolbar>
            </Container>
        </AppBar>
    )
}

export default NavBar