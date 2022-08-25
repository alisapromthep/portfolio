import React from 'react';
import './Projects.scss';
import Title from '../Title/Title';
import {Container, Typography, CardContent, Stack, Card, List, ListItem} from '@mui/material';
import {projectData} from '../../data/projectData.js';
import {ProjectImg, ProjectButton, ProjectTech} from './ProjectsStyle';


const Projects = () => {
    return (
    <Container>
        <Title title="Projects"/>
        <Stack
        spacing={4}
        justifyContent="center"
        alignItems="center"
        sx={{
            padding: {sm:"1rem 4rem"},
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
                                    sx={{fontWeight:"700",
                                    fontSize:{ xs:"1.2rem",sm:"1.75rem"}
                                    }}>
                                        {project.name}
                                    </Typography>
                                    <Typography
                                    color="white">
                                        {project.description}
                                    </Typography>
                                    <div className='project__detail'>
                                        <Typography color="white">
                                            {project.techstack}
                                        </Typography>
                                    <List
                                    sx={{
                                        display: "flex",
                                        justifyContent: "center"
                                    }}
                                    >
                                        {project.links.map((link,index)=>{
                                            return (
                                                <ListItem
                                                sx={{
                                                    maxWidth:{sm:"12rem"},
                                                    height: {sm:"3rem"},
                                                }}
                                                key={index}>
                                                    <ProjectButton
                                                    href={link.url}
                                                    variant="button"
                                                    target="_blank"
                                                    rel="noopener">{link.name}
                                                    </ProjectButton>
                                                </ListItem>
                                            )
                                        })}
                                    </List>
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