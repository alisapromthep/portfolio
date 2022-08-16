import React from 'react';
import './Projects.scss';
import Title from '../Title/Title';
import {Container, Typography, CardContent, Stack, Card, CardMedia, Button, CardActions, CardActionArea, Box, Link } from '@mui/material';
// import Carousel from 'react-material-ui-carousel';
import {projectData} from '../../data/projectData.js';
import {ProjectImg, ProjectDetail} from './ProjectsStyle';
import AirplaneTicketIcon from '@mui/icons-material/AirplaneTicket';


const Projects = () => {
    return (
    <Container>
        <Title title="Projects" />
        <Stack
        sx={{
            padding: '1rem 4rem',
        }}>
                {
                projectData.map((project)=>{
                    return (
                        <Card
                        key={project.id}
                        className='project__container'
                        elevation= {0}
                        sx={{
                            position: 'relative',
                            padding: '2rem 0'
                        }}
                        >
                            <ProjectImg
                            component="img"
                            image={project.img}
                            alt={project.description}
                            />
                            <CardContent
                            className='project__label'
                            >
                                    <Typography>
                                        {project.name}
                                    </Typography>
                                    <div className='project__detail'>
                                    <Typography>
                                        {project.description}
                                    </Typography>
                                    <Typography>
                                        {`Technology: ${project.techstack}`}
                                    </Typography>
                                        {project.links.map((link)=>{
                                            return (
                                                <Link
                                                key={link.name}
                                                href={link.url}
                                                variant="button"
                                                target="_blank"
                                                rel="noopener">{link.name}
                                                </Link>
                                            )
                                        })}
                                    </div>
                            </CardContent>
                        </Card>
                    )
                })
                }
        </Stack>
    </Container>
    )
}

export default Projects