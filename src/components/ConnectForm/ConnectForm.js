import React from 'react';
import Title from '../Title/Title';
import Form from '../Form/Form';
import { Container, Box, IconButton } from '@mui/material';
import MyLinks from '../MyLinks/MyLinks';
import HighlightOffIcon from '@mui/icons-material/HighlightOff';
import "./ConnectForm.scss";

const ConnectForm = ({contactOpen, setContactOpen}) => {
    return (
        <div className="contact">
            <Container
            sx={{
                width:"40rem",
                zIndex: "2",
                backgroundColor: "white",
                position: "absolute",
                top: "20%",
                left: "25%",
                animate: "translateY(20%) 5s linear",
                border: "solid 1px cornflowerblue",
                borderRadius: "2rem",
                backgroundImage: "linear-gradient(top, #f4f1ee, #fff)",
                boxShadow: "14px 18px 13px 4px rgba(0, 0, 0, .3), inset 0px 5px 4px 4px white, inset 0px -3px 2px 2px rgba(204,198,197,.5)",
            }}
            >
                <IconButton 
                color="primary"
                onClick={()=>{
                    setContactOpen(false)
                }}
                sx={{
                    position: "absolute",
                    top:"-6%",
                    right:"-4%",
                    zIndex: "2",
                }}>
                    <HighlightOffIcon/>
                </IconButton>
                <div className='contact__form'>
                    <Title title="Let's Connect"/>
                    <Box
                    sx={{
                        display: "flex",
                    }}>
                        <Form/>
                        <Box
                        className="contact__social"
                        >
                            <MyLinks/>
                        </Box>
                    </Box>
                </div>
            </Container>
        </div>
    )
}

export default ConnectForm