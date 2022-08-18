import React from 'react'
import { useTheme } from '@mui/material/styles';
import { useMediaQuery, AppBar, Toolbar, Container, Typography, Box, Button, Link, ListItem, List } from '@mui/material';
import MyLinks from '../MyLinks/MyLinks';
import { useState, useEffect } from 'react';
import apLogo from '../../assets/logo/apb.png';
import './NavBar.scss';

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

    const newEntry = React.createRef();
    
    

    return (
        <AppBar position="static" className={scrolled? "scrolled": ""}>
            <Container>
                <Toolbar className="navbar__container">
                    <img src={apLogo} alt="a.p. with orange background"
                    className="navbar__logo"/>
                    <div className="navbar__right">
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
                    </div>
                </Toolbar>
            </Container>
        </AppBar>
    )
}

export default NavBar