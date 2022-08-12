import React from 'react';
import Title from '../Title/Title';
import {Container, Typography, CardContent, Stack, Card, CardMedia, Box } from '@mui/material';
// import Carousel from 'react-material-ui-carousel';
import {projectData} from '../../data/projectData.js';
import {ProjectImg, ProjectContainer} from './ProjectsStyle';
import AirplaneTicketIcon from '@mui/icons-material/AirplaneTicket';


const Projects = () => {
    return (
    <Container>
        <Title title="Projects" />
        <Stack>
                {
                projectData.map((project)=>{
                    return (
                        <Card
                        sx={{
                            position: 'relative',
                        }}
                        >
                            <ProjectImg
                            component="img"
                            image={project.img}
                            alt={project.description}
                            />
                            <ProjectContainer key={project.id}>
                                <AirplaneTicketIcon
                                className= 'airplaneIcon'
                                sx={{
                                    position: "absolute",
                                    top: "26rem",
                                    height: "2rem",
                                    left: "30rem"
                                }}/>
                                <Typography>
                                    {project.name}
                                </Typography>
                                <Typography>
                                    {project.description}
                                </Typography>
                            </ProjectContainer>
                        </Card>
                    )
                })
                }
        </Stack>
    </Container>
    )
}

export default Projects