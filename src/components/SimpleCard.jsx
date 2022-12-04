import React from 'react'
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";

const SimpleCard = ({ico, title, text}) => {
    return(
        <Box sx={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            padding: '24px',
            gap: '8px',
            background: '#FFFFFF',
            boxShadow: '0px 4px 24px rgba(0, 0, 0, 0.4)',
            borderRadius: '12px',
            maxWidth: '300px'
        }}>

            <img src={ico} alt={'ico related to content'} style={{height: '40px'}}/>
            <Typography variant={'subtitle1'}>
                {title}
            </Typography>
            <Typography variant={'body1'}>
                {text}
            </Typography>

        </Box>

    );

}

export default SimpleCard
