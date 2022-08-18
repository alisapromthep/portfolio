import React from 'react';
import Title from '../Title/Title';
import Form from '../Form/Form';
import { Box, IconButton } from '@mui/material';
import MyLinks from '../MyLinks/MyLinks';
import HighlightOffIcon from '@mui/icons-material/HighlightOff';
import "./ConnectForm.scss";
import emailjs from 'emailjs-com';
import FormSubmit from '../FormSubmit/FormSubmit';


const ConnectForm = ({contactOpen, setContactOpen, formSubmit, setFormSubmit, }) => {

    const handleSubmit = (event)=>{
        event.preventDefault()

        const name = event.target.name.value;
        const email = event.target.name.value;
        const message = event.target.name.value;

        const serviceId = `${process.env.REACT_APP_EMAILJS_SERVICE_ID}`;
        const templateId= `${process.env.REACT_APP_EMAILJS_TEMPLATE_ID}`;
        const userId = `${process.env.REACT_APP_EMAILJS_PUBLIC_KEY}`;
        const templateParams = {
            name,
            email,
            message
        }

        emailjs.send(serviceId, templateId, templateParams, userId)
            .then((response)=> setFormSubmit(true) )
            .catch((err)=>console.log(err))
    }


    return (
        <div className="contact">
            <div
            className="contact__modalcontainer"
            >
                <IconButton 
                color="primary"
                onClick={()=>{
                    setContactOpen(false)
                }}
                sx={{
                    position:"absolute",
                    top:"1%",
                    right:"2%",
                    zIndex:"2",
                }}>
                    <HighlightOffIcon/>
                </IconButton>
                <div className='contact__form'>
                    <Title title="Let's Connect"/>
                    <Box
                    sx={{
                        display: "flex",
                    }}>
                        {formSubmit ? <FormSubmit/>:<Form handleSubmit={handleSubmit}/>}
                        <Box
                        className="contact__social"
                        >
                            <MyLinks/>
                        </Box>
                    </Box>
                </div>
            </div>
        </div>
    )
}

export default ConnectForm