import React from 'react';
import Title from '../Title/Title';
import {Container, Paper, Typography} from '@mui/material';
import Carousel from 'react-material-ui-carousel';
import {projectData} from '../../data/projectData.js';

const Projects = () => {
    return (
    <Container>
        <Title title="Projects" />
        <Carousel
        height="30rem"
        animation='slide'
        navButtonsAlwaysVisible='true'
        >
            {
                projectData.map((project)=>{
                    return (
                        <Paper key={project.id}>
                            <Typography variant='h4'>{project.name}</Typography>
                            <img src={project.img} alt={project.name}/>
                        </Paper>
                    )
                })
            }
        </Carousel>

    </Container>
    )
}

export default Projects