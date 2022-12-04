import React from 'react';
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import SimpleCard from "../components/SimpleCard";
import Gallery from "../components/Gallery";
import Button from "@mui/material/Button";
import Logo1 from "../assets/companies/logo-openx-dark.svg"
import Logo2 from "../assets/companies/iExchange.svg"
import Logo3 from "../assets/companies/googleAd.png"
import Logo4 from "../assets/companies/ttd-logo.svg"
import Logo5 from "../assets/companies/xandr.svg"
import Logo6 from "../assets/companies/pubmatic-black.svg"
import {OrderForm} from "../components/OrderForm";
import Mock from "../assets/howitworks_mock.png"
import Transparent from "../assets/icons/transparent.svg"
import Config from "../assets/icons/configurable.svg"
import Trusted from "../assets/icons/trusted.svg"
import Profitable from "../assets/icons/profit.svg"
import Suite from "../assets/icons/suite.svg"
import FullAd from "../assets/icons/ad.svg"
import Gallery2 from "../components/Gallery2";
import Hiw1 from "../assets/howitwork/hiw1.svg"
import Hiw2 from "../assets/howitwork/hiw2.svg"
import Hiw3 from "../assets/howitwork/hiw3.svg"
import Hiw4 from "../assets/howitwork/hiw4.svg"
import Hiw5 from "../assets/howitwork/hiw5.svg"

import Num1 from "../assets/numbers/1.svg"
import Num2 from "../assets/numbers/2.svg"
import Num3 from "../assets/numbers/3.svg"
import Num4 from "../assets/numbers/4.svg"
import Num5 from "../assets/numbers/5.svg"

import Img1 from "../assets/howitworks_decoration/1img.svg"
import Img2 from "../assets/howitworks_decoration/2img.svg"
import Img3 from "../assets/howitworks_decoration/3img.svg"
import Lines from "../assets/howitworks_decoration/lines.svg"
import event1 from '../assets/image 2.png';
import event2 from '../assets/image 2-2.png';
import event3 from '../assets/image 2-3.png';

export const Home = () => {
    const logos = [Logo1, Logo2, Logo3, Logo4, Logo5, Logo6]
    const advantages = [
        {ico: Profitable, title: 'Networking', text:'Unite young, creative,innovative like-minded people.',},
        {ico: Trusted, title: 'Experience Exchange', text:'exchange of experience and impressions with pros and beginners. getting new skills, new look at the world trough the experience of other people.',},
        {ico: Transparent, title: 'Development', text:'provide the knowledge and skills for the development of startup,multiply the number of young generation in startup and enterpreneurs.',},
    ]
    const howitworks = [
        {num: Num1, img: Hiw1, text:'Establish communication between students and build skills in the implementation of ideas and project management.\n' +
                '\n' +
                'Gather teams of young people who are ready to help and solve problems.'},
        {num: Num2, img: Hiw2, text:'Provide a forum for interaction between students and startup founders. Exchange of skills, buildings, ideas with people who already have experience and completed projects.'},
        {num: Num3, img: Hiw3, text:'To give SDT students a chance to use their skills and abilities in addition to studying for self-development and creating their own projects.'},
    ]
    const reports = [
        {name: 'Successful startup', img: event1, text: 'Amet, viverra nec sed in massa nibh. Magna dapibus auctor velit, est, mattis urna. Malesuada amet nisi libero, urna tristique aliquam. '},
        {name: 'Generation The Flow', img: event2, text: 'Amet, viverra nec sed in massa nibh. Magna dapibus auctor velit, est, mattis urna. Malesuada amet nisi libero, urna tristique aliquam. '},
        {name: 'Hackaton 2022', img: event3, text: 'Amet, viverra nec sed in massa nibh. Magna dapibus auctor velit, est, mattis urna. Malesuada amet nisi libero, urna tristique aliquam. '},
    ];
    return(
        <>
            <Box
                sx={{display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                    flexDirection: 'column',
                    width: '100%',
                }}>
                {/*<Gallery2/>*/}
                <Box className='container'>
                    <Box
                        sx={{display: 'flex',
                            justifyContent: 'center',
                            alignItems: 'center',
                            flexDirection: 'column',
                            width: '100%',
                        }}>
                        <Typography
                            variant={"h1"}
                            sx={{mt: 15}}>
                            SDT Innovation club
                        </Typography>
                        <Typography
                            variant={"body1"}
                            sx={{mt: 3}}>
                            Expand your horizons, gain knowledge, and create future with us.
                        </Typography>

                        <Button className={'filled'} sx={{mt: 4}} href={'#bidding_form'}>
                            Join
                        </Button>
                        {/*<Typography*/}
                        {/*    variant={"subtitle1"}*/}
                        {/*    sx={{mt: 6,}}>*/}
                        {/*    Prebid works with:*/}
                        {/*</Typography>*/}

                        {/*<Box sx={{*/}
                        {/*    display: 'flex',*/}
                        {/*    flexDirection:'row',*/}
                        {/*    alignItems: 'center',*/}
                        {/*    justifyContent: {xs: 'flex-start', md: 'center'},*/}
                        {/*    gap: 2,*/}
                        {/*    mt:3,*/}
                        {/*    maxWidth: '90%',*/}
                        {/*    overflowX: 'scroll',*/}
                        {/*}}>*/}
                        {/*    {logos.map((logo, index)=>(*/}
                        {/*            <Box key={index} sx={{*/}
                        {/*                height: '30px',*/}

                        {/*            }}>*/}
                        {/*                <img src={logo} style={{height:'100%'}} alt={"Digital marketer"}/>*/}
                        {/*            </Box>*/}

                        {/*        )*/}
                        {/*    )}*/}
                        {/*</Box>*/}

                    </Box>
                    <Typography variant={'h2'} sx={{mt:9,}} id='advantages'>
                        Things we do
                    </Typography>
                    <Box sx={{
                        display:{ xs: 'flex' , md: 'grid' },
                        width: { xs: 'none' , md: '80%' },
                        maxWidth: '90%',
                        gridTemplateColumns: { xs: 'none' , md: 'repeat(3, 1fr)' },
                        flexDirection: { xs: 'column' , md: 'none' },
                        alignSelf: 'center',
                        gap: 4,
                        mt:6,
                    }}>
                        {advantages.map(({ico, title, text}, index)=>(
                            <SimpleCard key={index} title={title} text={text} ico={ico}></SimpleCard>
                        ))}
                    </Box>
                </Box>
                <section id={'report_section'}>
                    <main className={'container-reports'}>
                        <h3 className={'font-48 w700'} style={{marginBottom: 16, textAlign: "center"}}>
                            Events
                        </h3>

                        <div className={'reports'}>
                            {reports.map((report, index) => (
                                <a key={index} download>
                                    <figure style={{position: 'relative'}}>
                                        <img src={report.img} loading={'lazy'} />
                                        <p style={{maxWidth:380}}>
                                            {report.text}
                                        </p>
                                        <figcaption>
                                            <Button
                                                className={'button-filled font-24 w700'}
                                                sx={{padding: '8px 16px!important'}}
                                            >
                                                Know More ->
                                            </Button>
                                        </figcaption>
                                    </figure>
                                </a>
                            ))}
                        </div>
                    </main>
                </section>
                    <Box sx={{mt: 5, backgroundColor:'#191F28', width:'100vw', display: 'flex', flexDirection:'column', justifyContent:'center', alignItems:'center'}}>
                        <Box className={'container'} sx={{display: 'flex', flexDirection:'column', justifyContent:'center', alignItems:'center', gap: 6,  mb:6, position:'relative' }}>
                            <Typography variant={'h2'} sx={{mt:5, color:'#FFFFFF'}} id='howitworks' >
                                How it works
                            </Typography>

                            <img src={Img1} style={{position:'absolute', top:'5%', right:'10%'}} className={'decoration'}></img>
                            <img src={Img2} width={160} style={{position:'absolute', top:'60%', left:'10%'}} className={'decoration'}></img>
                            <img src={Img3} style={{position:'absolute', top:'90%', right:'5%'}} className={'decoration'}></img>
                            <img src={Lines} style={{position:'absolute', top:'25%'}} className={'decoration'}></img>


                            <Box sx={{display:'flex', justifyContent:{xs:'center', md: 'flex-start'},width: {xs: '95%', md: '90%'}}}>
                                <Box sx={{display: 'flex', flexDirection: 'row',  justifyContent:'center', alignItems:'center', gap:'20px', width: {xs: '90%', md: '100%'}}}>
                                    <Box sx={{width:'100%'}}>
                                        <img src={howitworks[0].img}/>
                                    </Box>
                                    <Box sx={{display:'flex', flexDirection:'row', gap: '10px', alignItems: 'flex-start'}}>
                                        <img src={howitworks[0].num}  style={{transform: 'translateY(-40%)'}}/>
                                        <Typography
                                            variant={"subtitle1"}
                                            align={'left'}
                                            sx={{color:'#FFFFFF'}}
                                        >
                                            {howitworks[0].text}
                                        </Typography>
                                    </Box>
                                </Box>
                            </Box>
                            <Box sx={{display:'flex', justifyContent:{xs:'center', md: 'flex-end'}, width: {xs: '95%', md: '90%'}}}>
                                <Box sx={{display: 'flex', flexDirection: 'row',  justifyContent:'center', alignItems:'center', gap:'20px', width: {xs: '90%', md: '100%'}}}>
                                    <Box sx={{display:'flex', flexDirection:'row', gap: '10px', alignItems: 'flex-start'}}>
                                        <Typography
                                            variant={"subtitle1"}
                                            align={'left'}
                                            sx={{color:'#FFFFFF'}}
                                        >
                                            {howitworks[1].text}
                                        </Typography>
                                        <img src={howitworks[1].num}  style={{transform: 'translateY(-40%)'}}/>

                                    </Box>
                                    <Box sx={{width:'100%'}}>
                                        <img src={howitworks[1].img}/>
                                    </Box>
                                </Box>
                            </Box>


                            <Box sx={{display:'flex', justifyContent:{xs:'center', md: 'flex-start'}, width: {xs: '95%', md: '90%'}}}>
                                <Box sx={{display: 'flex', flexDirection: 'row',  justifyContent:'center', alignItems:'center', gap:'20px', width: {xs: '90%', md: '100%'}}}>
                                    <Box sx={{width:'100%'}}>
                                        <img src={howitworks[2].img}/>
                                    </Box>
                                    <Box sx={{display:'flex', flexDirection:'row', gap: '10px', alignItems: 'flex-start'}}>
                                        <img src={howitworks[2].num}  style={{transform: 'translateY(-40%)'}}/>
                                        <Typography
                                            variant={"subtitle1"}
                                            align={'left'}
                                            sx={{color:'#FFFFFF'}}
                                        >
                                            {howitworks[2].text}
                                        </Typography>
                                    </Box>
                                </Box>
                            </Box>
                            {/*<Box sx={{display:'flex', justifyContent:{xs:'center', md: 'flex-end'}, width: {xs: '95%', md: '80%'}}}>*/}
                            {/*    <Box sx={{display: 'flex', flexDirection: 'column',  justifyContent:'center', alignItems:'center', gap:'20px', width: {xs: '90%', md: '60%'}}}>*/}
                            {/*        <Box sx={{width:'100%'}}>*/}
                            {/*            <img style={{width: "100%"}} src={howitworks[3].img}/>*/}
                            {/*        </Box>*/}
                            {/*        <Box sx={{display:'flex', flexDirection:'row', gap: '10px', alignItems: 'flex-start'}}>*/}
                            {/*            <img src={howitworks[3].num}  style={{transform: 'translateY(-40%)'}}/>*/}
                            {/*            <Typography*/}
                            {/*                variant={"subtitle1"}*/}
                            {/*                align={'left'}*/}
                            {/*                sx={{color:'#FFFFFF'}}*/}
                            {/*            >*/}
                            {/*                {howitworks[3].text}*/}
                            {/*            </Typography>*/}
                            {/*        </Box>*/}
                            {/*    </Box>*/}
                            {/*</Box>*/}


                            {/*<Box sx={{display:'flex', justifyContent:{xs:'center', md: 'flex-start'}, width: {xs: '95%', md: '80%'}}}>*/}
                            {/*    <Box sx={{display: 'flex', flexDirection: 'column',  justifyContent:'center', alignItems:'center', gap:'20px', width: {xs: '90%', md: '60%'}}}>*/}
                            {/*        <Box sx={{width:'100%'}}>*/}
                            {/*            <img style={{width: "100%"}} src={howitworks[4].img}/>*/}
                            {/*        </Box>*/}
                            {/*        <Box sx={{display:'flex', flexDirection:'row', gap: '10px', alignItems: 'flex-start'}}>*/}
                            {/*            <img src={howitworks[4].num}  style={{transform: 'translateY(-40%)'}}/>*/}
                            {/*            <Typography*/}
                            {/*                variant={"subtitle1"}*/}
                            {/*                align={'left'}*/}
                            {/*                sx={{color:'#FFFFFF'}}*/}
                            {/*            >*/}
                            {/*                {howitworks[4].text}*/}
                            {/*            </Typography>*/}
                            {/*        </Box>*/}
                            {/*    </Box>*/}
                            {/*</Box>*/}

                        </Box>

                    </Box>


                {/*<Slider/>*/}

                <Box sx={{display: {xs: 'initial', md: 'none'}}}>
                    <Gallery/>
                </Box>
                <Box sx={{display: {xs: 'none', md: 'initial'}}}>
                    <Gallery2/>
                </Box>



                <OrderForm/>
            </Box>
        </>

    )
}
