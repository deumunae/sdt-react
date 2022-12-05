import React, {useEffect, useState} from 'react'
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import footerlogo from '../assets/FooterImage.png';
import {useNavigate} from "react-router";
import Box from "@mui/material/Box";

export const Footer = () => {
    const [openModal, setOpenModal] = React.useState(false);
    const handleOpen = () => setOpenModal(true);
    const handleClose = () => setOpenModal(false);
    const [message, setMessage] = useState(null);
    const history = useNavigate();

    useEffect(()=>{
        setTimeout(()=>{setMessage(null)}, 2000)
    }, [message])

    return (
            <footer style={{display:'flex', justifyContent:'center', background:'#111111'}}>
                <div className='container'>
                    <AppBar position="static" sx={{background:'none', boxShadow: 'none'}}>
                        <Container maxWidth="xl">
                            <Toolbar disableGutters>


                                <Box sx={{height:{xs: '18px', md: '24px'}, mr: 3}}> <img style={{height:'100%'}} src={footerlogo} /></Box>
                                <Typography
                                    variant="h5"
                                    noWrap
                                    component="a"
                                    href=""
                                    sx={{
                                        mr: 2,
                                        display: 'flex',
                                        alignItems: 'center',
                                        flexGrow: 1,
                                        fontSize: {xs: '18px', md: '24px'},
                                        fontWeight: 700,
                                        color: '#FFFFFF',
                                        textDecoration: 'none',
                                    }}
                                >
                                    SDT INNOVATION CLUB
                                </Typography>

                            </Toolbar>

                            <div className="footer_links">
                                <div>
                                    <Typography variant="body2" sx={{}} align={'left'}>
                                        Almaty Managment University
                                        Rozybakieva 227, Almaty 050060
                                    </Typography>
                                </div>
                                <Box sx={{display:'flex', flexDirection:{xs:'column', md: 'row'}, mb:3}}>
                                    <Typography variant="body2" sx={{mr:3}} align={'left'}>
                                        All Rights Reserved,  SDT  Innovation Club
                                    </Typography>
                                    <Typography variant="body2" sx={{mr:3}} align={'left'} >
                                        <a style={{textDecoration:'none', color:'white'}} href = "mailto:info@sdt.bid?subject = Support&body = Message">info@std.bid</a>
                                    </Typography>

                                </Box>
                            </div>
                        </Container>
                    </AppBar>
                </div>
            </footer>
    );
}

