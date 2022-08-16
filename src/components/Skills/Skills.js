import React from 'react';
import { Typography, Container, ImageList,ImageListItem, Box } from '@mui/material';
import {iconData} from '../../data/iconData';
import Title from '../Title/Title';
import {TechImg, ImageContainer, ImageBox} from './SkillsStyle';

const Skills = () => {

    return (
    <Container>
        <Title title="Tech Stack"/>
        <Box
        elementType="div"
        sx={{
            position: "relative",
            width: "100%",
            overflow: "hidden",
        }}
        >
            <ImageContainer
            gap={10}
            >
                {
                    iconData.map((icon)=>{
                        return (
                        <ImageBox
                        key={icon.name}
                        >
                            <TechImg
                            src={icon.img}
                            alt={icon.name}
                            />
                        </ImageBox>
                        )
                    })
                }
                            {
                    iconData.map((icon)=>{
                        return (
                        <ImageBox
                        key={icon.name}
                        >
                            <TechImg
                            src={icon.img}
                            alt={icon.name}
                            />
                        </ImageBox>
                        )
                    })
                }
            </ImageContainer>
        </Box>
    </Container>
    )
}

export default Skills