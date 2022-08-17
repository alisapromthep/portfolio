import React from 'react'
import { useTheme } from '@mui/material/styles';
import { useMediaQuery, AppBar, Toolbar, Container, Typography, Box, Button, Link, ListItem, List } from '@mui/material';
import MyLinks from '../MyLinks/MyLinks';
import { useState, useEffect } from 'react';
import apLogo from '../../assets/logo/ap.png';


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
                    <img src={apLogo} alt="a.p. with orange background"/>
                    <List
                    sx={{
                        display: 'flex'
                    }}
                    >
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
                    <MyLinks/>
                </Toolbar>
            </Container>
        </AppBar>
    )
}

export default NavBar