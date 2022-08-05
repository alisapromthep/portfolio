import React from 'react';
import { Typography } from '@mui/material';

const Title = ({title}) => {
    return (
        <Typography variant='h2'
        align='center'
        sx={{
            fontSize: '2.5rem',
            fontWeight: '700',
        }}
        >{title}</Typography>
    )
}

export default Title