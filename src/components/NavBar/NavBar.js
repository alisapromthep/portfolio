import React from 'react'
import { AppBar, Toolbar, Container, ListItem, Link, List, Typography } from '@mui/material';
import MyLinks from '../MyLinks/MyLinks';
import './NavBar.scss';


const NavBar = () => {

    return (
        <AppBar position="static">
            <Container>
                <Toolbar 
                className="navbar__container">
                    <Typography
                    color="primary"
                    sx={{
                        fontSize: '2rem',
                        fontWeight: '700',
                        textShadow: " 1.5px 1.5px 0 #1E2CAB",
                    }}
                    
                    >A.P.</Typography>
                    <div className="navbar__right">
                        <List
                        sx={{
                            display: 'flex'
                        }}
                        >
                            <ListItem>
                                <Link href="https://docs.google.com/document/d/e/2PACX-1vSE8GB9wynWs1sdh-r0mueZmOwiHMzscNesOOJChC4kMtlIJkeT_kravPNAwASnqcSS1SLA8gimdiZ0/pub"
                                target="_blank"
                                rel="noopener"
                                >Resume</Link>
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