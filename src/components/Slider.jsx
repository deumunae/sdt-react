import React from "react";
// Import Swiper React components
import {Swiper, SwiperSlide} from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

// import required modules
import {Pagination} from "swiper";
import SimpleCard from "./SimpleCard";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";

const Slider = () => {
    return (

                    <Box style={{
                        position: 'relative',
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'center',
                        justifyContent: 'center',
                        marginTop: '42px',
                        width: {xs: '100%', md: '80%'},
                    }}>
                        <Swiper pagination={{ clickable: true }} modules={[Pagination]}
                                style={{
                                    position: 'relative',
                                    display: 'flex',
                                    flexDirection: 'column',
                                    alignItems: 'center',
                                    justifyContent: 'center',
                                    padding: '24px 16px',
                                    gap: '12px',
                                    background: '#FFFFFF',
                                    boxShadow: '0px 0px 24px rgba(2, 100, 80, 0.25)',
                                    borderRadius: '24px',
                                    width: '100%',
                                    maxWidth: '800px',
                                    // width: {xs: '100%', md: '80%'},
                                }}
                                className="mySwiper">
                            <SwiperSlide>

                                <Box sx={{
                                    position: 'relative',
                                    display: 'flex',
                                    flexDirection: 'column',
                                    alignItems: 'center',
                                    justifyContent: 'center',
                                    maxWidth: '600px'
                                }}>
                                    <Box sx={{display: 'flex', alignItems: 'center', gap: 1}}>
                                        <Typography variant={'subtitle1'}>
                                            1
                                        </Typography>
                                        <Typography variant={'body1'}>
                                            The ad server’s tag on page, bound by a timer, can be paused
                                        </Typography>
                                    </Box>
                                    <img style={{width:400, height:400,}}/>
                                </Box>

                            </SwiperSlide>

                            <SwiperSlide>

                                <Box sx={{
                                    position: 'relative',
                                    display: 'flex',
                                    flexDirection: 'column',
                                    alignItems: 'center',
                                    justifyContent: 'center',
                                    maxWidth: '600px'
                                }}>
                                    <Box sx={{display: 'flex', alignItems: 'center', gap: 1}}>
                                        <Typography variant={'subtitle1'}>
                                            1
                                        </Typography>
                                        <Typography variant={'body1'}>
                                            The ad server’s tag on page, bound by a timer, can be paused
                                        </Typography>
                                    </Box>
                                    <img style={{width:400, height:400,}}/>
                                </Box>
                            </SwiperSlide>

                            <SwiperSlide>

                                <Box sx={{
                                    position: 'relative',
                                    display: 'flex',
                                    flexDirection: 'column',
                                    alignItems: 'center',
                                    justifyContent: 'center',
                                    maxWidth: '600px'
                                }}>
                                    <Box sx={{display: 'flex', alignItems: 'center', gap: 1}}>
                                        <Typography variant={'subtitle1'}>
                                            1
                                        </Typography>
                                        <Typography variant={'body1'}>
                                            The ad server’s tag on page, bound by a timer, can be paused
                                        </Typography>
                                    </Box>
                                    <img style={{width:400, height:400,}}/>
                                </Box>
                            </SwiperSlide>

                        </Swiper>
                    </Box>



    );

}
export default Slider
