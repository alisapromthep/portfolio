import React from 'react';
import './Projects.scss';
import Title from '../Title/Title';
import {Container, Typography, CardContent, Stack, Card, CardMedia, Button, CardActions, CardActionArea, Box, Link , List, ListItem} from '@mui/material';
import {projectData} from '../../data/projectData.js';
import {ProjectImg, ProjectButton} from './ProjectsStyle';
import AirplaneTicketIcon from '@mui/icons-material/AirplaneTicket';


const Projects = () => {
    return (
    <Container>
        <Title title="Projects" />
        <Stack
        spacing={4}
        sx={{
            padding: "1rem 4rem",
        }}>
                {
                projectData.map((project)=>{
                    return (
                        <Card
                        key={project.id}
                        className='project__container'
                        elevation= {2}
                        sx={{
                            borderRadius: "2rem",
                            position: "relative",
                        }}
                        >   
                        <div className="project__cover">
                                <ProjectImg
                                component="img"
                                image={project.img}
                                alt={project.description}
                                />
                            </div>
                            <CardContent
                            className='project__label'
                            >
                                    <Typography sx={{fontWeight:"700"}}>
                                        {project.name}
                                    </Typography>
                                    <Typography>
                                        {project.description}
                                    </Typography>
                                    <div className='project__detail'>
                                    <List
                                    sx={{display: "flex"}}
                                    >
                                        {project.techstack.map((tech,index)=>{
                                            return (
                                                <ListItem
                                                alignItems='flex-start'
                                                key={index}
                                                >
                                                    <img src={tech}
                                                    className="project__techimg"/>
                                                </ListItem>
                                            )
                                        })
                                    }
                                    </List>
                                        {project.links.map((link)=>{
                                            return (
                                                <ProjectButton
                                                key={link.name}
                                                href={link.url}
                                                variant="button"
                                                target="_blank"
                                                rel="noopener">{link.name}
                                                </ProjectButton>
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