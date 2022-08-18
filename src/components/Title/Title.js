import React from 'react';
import { Typography } from '@mui/material';

const Title = ({title}) => {
    return (
        <Typography variant='h2'
        color="primary"
        fontWeight={700}
        align='center'
        sx={{
            fontSize: '2.5rem',
            fontWeight: '700',
            marginTop: '2rem',
        }}
        >{title}</Typography>
    )
}

export default Title