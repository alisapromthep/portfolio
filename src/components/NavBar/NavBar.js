import React from 'react'
import { AppBar, Toolbar, Container, ListItem, Link, List } from '@mui/material';
import MyLinks from '../MyLinks/MyLinks';
import apLogo from '../../assets/logo/apb.png';
import './NavBar.scss';


const NavBar = ({scrollToProject}) => {

    return (
        <AppBar position="static">
            <Container>
                <Toolbar 
                sx={{paddingLeft: "0",}}
                className="navbar__container">
                    <img src={apLogo} alt="a.p."
                    className="navbar__logo"/>
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