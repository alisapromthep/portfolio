import React from 'react';
import {Container, Typography} from '@mui/material';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import aplogo from '../../assets/logo/apb.png';
import './Footer.scss';

const Footer = () => {
    return (
        <Container
        sx={{
            backgroundColor: "rgba(255,255,255,0.6)",
            borderRadius: "1rem",
            marginTop: "1.5rem",
            padding: ""
        }}
        >
            <div className='footer__container'>
            <Typography>
                This portfolio is my exploration of front-end design using material ui, and css animation. 
                
            </Typography>
            <img className="footer__logo"
            src={aplogo}/>

            </div>

        </Container>
    )
}

export default Footer