import React from 'react';
import './Projects.scss';
import Title from '../Title/Title';
import {Container, Typography, CardContent, Stack, Card, List} from '@mui/material';
import {projectData} from '../../data/projectData.js';
import {ProjectImg, ProjectButton, ProjectTech} from './ProjectsStyle';
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
                            </div>
                            <ProjectImg
                            component="img"
                            image={project.img}
                            alt={project.description}
                            />
                            <CardContent
                            className='project__label'
                            >
                                    <Typography 
                                    color="white"
                                    sx={{fontWeight:"700"}}>
                                        {project.name}
                                    </Typography>
                                    <Typography
                                    color="white">
                                        {project.description}
                                    </Typography>
                                    <div className='project__detail'>
                                    <List
                                    sx={{display: "flex"}}
                                    >
                                        {project.techstack.map((tech,index)=>{
                                            return (
                                                <ProjectTech
                                                key={index}
                                                >
                                                    <img src={tech}
                                                    className="project__techimg"/>
                                                </ProjectTech>
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