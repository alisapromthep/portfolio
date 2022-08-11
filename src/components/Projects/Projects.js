import React from 'react';
import Title from '../Title/Title';
import {Container, Paper, Typography, ImageListItem, ImageListItemBar, Stack } from '@mui/material';
// import Carousel from 'react-material-ui-carousel';
import {projectData} from '../../data/projectData.js';

const Projects = () => {
    return (
    <Container>
        <Title title="Projects" />
        <Stack>
            {
                projectData.map((project)=>{
                    return (
                        <Paper key={project.id}>
                            <Typography variant='h4'>{project.name}</Typography>
                            <ImageListItem>
                                <img src={project.img} alt={project.name}/>
                            </ImageListItem>
                            <ImageListItemBar
                            title={project.name}
                            subtitle={project.description}
                            />
                        </Paper>
                    )
                })
            }
        </Stack>
    </Container>
    )
}

export default Projects