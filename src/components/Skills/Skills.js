import React from 'react';
import { Typography, Container, ImageList,ImageListItem } from '@mui/material';
import {iconData} from '../../data/iconData';
import Title from '../Title/Title';
import {TechImg} from './SkillsStyle';

const Skills = () => {

    return (
    <Container>
        <Title title="Tech Stack"/>
        <ImageList
        cols={6}
        >
            {
                iconData.map((icon)=>{
                    return (
                    <ImageListItem
                    key={icon.name}
                    >
                        <TechImg
                        src={icon.img}
                        alt={icon.name}
                        />
                    </ImageListItem>
                    )
                })
            }
        </ImageList>
    </Container>
    )
}

export default Skills