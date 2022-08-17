import React from 'react';
import { useState, useEffect } from 'react';
import { Container,Grid, Typography, Button } from '@mui/material';
import HeroImg from '../../assets/img/header-img.svg';
import { HeroImage } from './HeroStyle';
import FlightTakeoffIcon from '@mui/icons-material/FlightTakeoff';
import ConnectForm from '../ConnectForm/ConnectForm';

const Hero = () => {

    //lets connect pop up 
    const [contactOpen, setContactOpen] = useState(false);

    const [loopNum, setLoopNum] = useState(0);
    //whether the word is getting type or delete
    const [isDeleting, setIsDeleting] = useState(false);
    //list of words getting typed out
    const toRotate = [" a Developer.", " an Artist.", "a former Chemist.", "a Lifelong Learner."];
    const [text, setText] = useState('');
    const [index, setIndex] = useState(1);
    const [delta, setDelta] = useState(300 - Math.random() * 100);
    //time period between each letter getting typed out
    const period = 2000;


    useEffect(()=>{
        let ticker = setInterval(()=>{
            tick();

        }, delta)

        return ()=> {clearInterval(ticker)};
    }, [text])

    const tick = () => {
        let i = loopNum % toRotate.length;
        let fullText = toRotate[i];
        let updatedText = isDeleting ? fullText.substring(0,text.length-1): fullText.substring(0, text.length + 1)

        setText(updatedText);

        if(isDeleting){
            setDelta(prevDelta => prevDelta/2)
        }

        if(!isDeleting && updatedText === fullText){
            setIsDeleting(true);
            setDelta(period);
        } else if (isDeleting && updatedText === ''){
            setIsDeleting(false);
            setLoopNum(loopNum+1);
            setIndex(1);
            setDelta(500);
        } else {
            setIndex(prevIndex => prevIndex +1);
        }

    }

    return (
        <div>
            {contactOpen && <ConnectForm
                contactOpen={contactOpen}
                setContactOpen={setContactOpen}/>}

            <Container 
            sx={{
                padding: '4rem 0',
            }}
            >
                <Grid
                container
                direction="row"
                >
                    <Grid item xs={6}>
                        <Typography variant='h1'
                        sx={{
                            fontSize: '3rem',
                            fontWeight: '700',
                        }}
                        >Hi! I'm Alisa Promthep</Typography>
                        <Typography>{`I'm ${text}`}</Typography>
                        <Typography>Full-stack web developer, with a passion for art and design and the love for databases.</Typography>
                        <Typography display="block"></Typography>
                        <Button
                        variant="outlined"
                        endIcon={<FlightTakeoffIcon/>}
                        onClick={()=>{
                            setContactOpen(true);
                        }}
                        >
                            Let's connect
                        </Button>
                    </Grid>
                    <Grid item xs={6}>
                        <HeroImage src={HeroImg}/>
                    </Grid>
                </Grid>
            </Container>
        </div>
    )
}

export default Hero