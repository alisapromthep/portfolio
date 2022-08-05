import React from 'react';
import { Typography, Container, ImageList,ImageListItem } from '@mui/material';
import {iconData} from '../../data/iconData';


const Skills = () => {

    return (
    <Container>
        <Typography variant='h2'
        align='center'
        sx={{
            fontSize: '2.5rem',
            fontWeight: '700',
        }}
        >Tech Stack</Typography>
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