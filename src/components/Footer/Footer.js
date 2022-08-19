import React from 'react';
import {Container, Typography} from '@mui/material';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import aplogo from '../../assets/logo/apb.png';
import './Footer.scss';

const Footer = () => {
    return (
        <Container>
            <div className='footer__container'>
            <Typography sx={{color:"#5F6CE8"}}>
                This portfolio is made with ReactJs, and Material UI.
            </Typography>
            <img className="footer__logo"
            src={aplogo}/>

            </div>

        </Container>
    )
}

export default Footer