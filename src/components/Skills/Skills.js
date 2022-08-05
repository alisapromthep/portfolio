import React from 'react';
import { Typography, Container, ImageList,ImageListItem } from '@mui/material';
import {iconData} from '../../data/iconData';
import Title from '../Title/Title';

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
                    sx={{
                        height: '2rem',
                    }}
                    >
                        <img
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