import React, {useState} from 'react';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import Button from '@mui/material/Button';
import MenuItem from '@mui/material/MenuItem';
import {ReactComponent as LogoIcon} from "../assets/LogoIcon.svg";
import LoginIcon from '@mui/icons-material/Login';
import {Checkbox, CircularProgress, Dialog, FormControlLabel, LinearProgress} from "@mui/material";
import CloseIcon from '@mui/icons-material/Close';
import {useNavigate} from "react-router";
import axios from "axios";



const pages = [
    {title: 'Home', link: '/'},
    {title: 'Things we do', link: '/#advantages'},
    {title: 'Our Initatives', link: '/#howitworks'},];

export const Header = () => {
    const history = useNavigate();
    const [open, setOpen] = useState(false);
    const [enter, setEnter] = useState(localStorage.getItem('STDAccessToken') ? (localStorage.getItem('STDAccessToken')): null);
    const [open2, setOpen2] = useState(false);
    const [error, setError] = useState('123');
    const [error2, setError2] = useState('123');
    const [loading, setLoading] = useState(false);

    const [data, setData] = useState(
        {
            email:'',
            password:''
        }
    )
    const [data2, setData2] = useState(
        {
            email:'',
            password:'',
            password_verification:''
        }
    )

    const changeHandler = event =>{
        setData({...data, [event.target.name]: event.target.value});
        setError('123');
    }
    const changeHandler2 = event =>{
        setData2({...data2, [event.target.name]: event.target.value});
        setError2('123');
    }

    const [anchorElNav, setAnchorElNav] = React.useState(null);

    const handleOpenNavMenu = (event) => {
        setAnchorElNav(event.currentTarget);
    };

    const handleCloseNavMenu = () => {
        setAnchorElNav(null);
    };

    const login = () => {
        if(!data.email.includes('@')){
            setError('invalid email');
        }
        else if(data.password.length < 6){
            setError('invalid password');
        }else{
            setError('123');
            setLoading(true);
            axios.post(`http://testtds.jcloud.kz/login/`, {username: data.email, password : data.password}).then(res=>{
                setOpen(false)
                setLoading(false);
                const accessToken = res?.data?.token;
                localStorage.setItem('STDAccessToken', accessToken);
                setEnter(accessToken)
                axios.defaults.headers.common['Authorization'] = `Token ${accessToken}`;

            }).catch(
                err=>{

                    setLoading(false);
                    setError(err.message);
                    // if(err.response.status === 401){
                    //     handleClickOpen();
                    // }
                }
            )
            // setLoading(true);
            // setError('123');
            // setTimeout(() => {
            //     setLoading(false);
            //     setError('account do not exist, please contact us');
            // }, 3000);
        }
    }

    const register = () => {
        if(!data2.email.includes('@')){
            setError2('invalid email');
        }
        else if(data2.password.length < 6){
            setError2('invalid password');
        }else if(data2.password_verification !== data2.password){
            setError2('password doesnt match');
        }else{
            setError2('123');
            setLoading(true);
            axios.post(`http://testtds.jcloud.kz/register/`, {username: data2.email, password : data2.password}).then(res=>{
                setOpen2(false)
                setLoading(false);
                const accessToken = res?.data?.token;
                localStorage.setItem('STDAccessToken', accessToken);
                setEnter(accessToken)
                axios.defaults.headers.common['Authorization'] = `Token ${accessToken}`;

            }).catch(
                err=>{
                    setLoading(false);
                    setError2(err.message);
                }
            )
            // setLoading(true);
            // setError('123');
            // setTimeout(() => {
            //     setLoading(false);
            //     setError('account do not exist, please contact us');
            // }, 3000);
        }
    }




    return (
        <header className='header'>
            <div className='container'>
                <Container disableGutters maxWidth="xl" sx={{width:{xs: 'none', md:'80%'}, padding:{xs: '0 12px 0 12px', md:'0'}}}>
                    <Toolbar disableGutters>
                        <LogoIcon onClick={()=>{history('/')}}/>
                        <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' }, justifyContent: 'flex-end', alignItems:'center'}}>
                            {enter === null ? (
                                <>
                                    <Button className={'filled'} sx={{mr: 2}}
                                            endIcon={<LoginIcon />}
                                            onClick={()=>{setOpen(!open)}}
                                    >
                                        Login

                                    </Button>
                                    <Button className={'filled'} sx={{mr: 2}}
                                            endIcon={<LoginIcon />}
                                            onClick={()=>{setOpen2(!open2)}}
                                    >
                                        Register

                                    </Button>
                                </>
                            ):(
                                <Button className={'filled'} sx={{mr: 2}}
                                onClick={()=>{localStorage.removeItem('STDAccessToken'); setEnter(null)}}
                                >
                                Sign out
                                </Button>
                            )}
                            <IconButton
                                size="large"
                                aria-label="account of current user"
                                aria-controls="menu-appbar"
                                aria-haspopup="true"
                                onClick={handleOpenNavMenu}
                                color="inherit"
                                sx={{border: 'none',}}
                            >
                                <MenuIcon />
                            </IconButton>
                            <Menu
                                id="menu-appbar"
                                anchorEl={anchorElNav}
                                anchorOrigin={{
                                    vertical: 'bottom',
                                    horizontal: 'right',
                                }}
                                keepMounted
                                transformOrigin={{
                                    vertical: 'top',
                                    horizontal: 'right',
                                }}
                                open={Boolean(anchorElNav)}
                                onClose={handleCloseNavMenu}
                                sx={{
                                    display: { xs: 'block', md: 'none' },
                                }}
                            >
                                {pages.map((page, index) => (
                                    <Typography key={index} href={page.link} component={'a'} variant={'subtitle2'}
                                    sx={{textDecoration: 'none', }}>
                                        <MenuItem sx={{fontFamily: 'Poppins, serif!important'}} onClick={handleCloseNavMenu}>
                                            {page.title}
                                        </MenuItem>
                                    </Typography>
                                ))}
                            </Menu>
                        </Box>
                        <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' }, justifyContent: 'flex-end', gap:'16px'}}>
                            {pages.map(({title, link}, index) => (
                                <a key={index} href={link} style={{display:'flex', alignContent:'center', textDecoration:'none'}}>
                                    <Button
                                        style={{textTransform:'none', color: "#111111"}}
                                        onClick={handleCloseNavMenu}
                                        className="button-transparent">
                                        {title}
                                    </Button>
                                </a>
                            ))}
                            {enter === null ? (
                                <>
                                    <Button className={'filled'} endIcon={<LoginIcon />} onClick={()=>{setOpen(!open)}} >
                                        Login
                                    </Button>
                                    <Dialog onClose={()=>{setOpen(!open)}} open={open} PaperProps={{style:{ borderRadius: 12, width:'100%'}}}>
                                        <div className='dialog-own'>
                                            {
                                               loading && <LinearProgress />
                                            }
                                            <div style={{display:'flex', flexDirection:'column', alignItems:'center'}}>
                                                <div style={{display:'flex', justifyContent:'space-between', width:'100%'}}>
                                                    <Typography variant='h5'>Sign in</Typography>
                                                    <span onClick={()=>{setOpen(!open); setData({email: '', password:''}); setError('123')}}><CloseIcon/></span>
                                                </div>
                                                <span style={error === '123' ? {color:'red', width:'100%', marginTop:10, opacity:0} : {color:'red', width:'100%', marginTop:10, opacity:1}}>{error}</span>
                                                <input style={{width:'98%'}} className='textfield' placeholder='email' type='email' required onChange={changeHandler} name='email' value={data.email}/>
                                                <input style={{width:'98%', marginTop:24}} className='textfield' placeholder='password' type='password' required onChange={changeHandler} name='password' value={data.password}/>
                                                <FormControlLabel
                                                    style={{marginTop:24}}
                                                    value="start"
                                                    control={<Checkbox />}
                                                    label={<Typography>Remember me</Typography>}
                                                    labelPlacement="start"
                                                />
                                            </div>


                                            <div style={{display: 'flex', alignItems:'center', alignSelf:'center'}}>
                                                <Button onClick={login} className={'filled'} sx={{padding:'4px 48px!important'}}>Enter</Button>
                                            </div>

                                        </div>
                                    </Dialog>
                                    <Button className={'filled'} endIcon={<LoginIcon />} onClick={()=>{setOpen2(!open2)}} >
                                        Register
                                    </Button>
                                    <Dialog onClose={()=>{setOpen2(!open2)}} open={open2} PaperProps={{style:{ borderRadius: 12, width:'100%'}}}>
                                        <div className='dialog-own'>
                                            {
                                                loading && <LinearProgress />
                                            }
                                            <div style={{display:'flex', flexDirection:'column', alignItems:'center'}}>
                                                <div style={{display:'flex', justifyContent:'space-between', width:'100%'}}>
                                                    <Typography variant='h5'>Sign up</Typography>
                                                    <span onClick={()=>{setOpen2(!open2); setData2({email: '', password:''}); setError2('123')}}><CloseIcon/></span>
                                                </div>
                                                <span style={error2 === '123' ? {color:'red', width:'100%', marginTop:10, opacity:0} : {color:'red', width:'100%', marginTop:10, opacity:1}}>{error2}</span>
                                                <input style={{width:'98%'}} className='textfield' placeholder='email' type='email' required onChange={changeHandler2} name='email' value={data2.email}/>
                                                <input style={{width:'98%', marginTop:24}} className='textfield' placeholder='password' type='password' required onChange={changeHandler2} name='password' value={data2.password}/>
                                                <input style={{width:'98%', marginTop:24}} className='textfield' placeholder='password verification' type='password' required onChange={changeHandler2} name='password_verification' value={data2.password_verification}/>
                                                <FormControlLabel
                                                    style={{marginTop:24}}
                                                    value="start"
                                                    control={<Checkbox />}
                                                    label={<Typography>Remember me</Typography>}
                                                    labelPlacement="start"
                                                />
                                            </div>


                                            <div style={{display: 'flex', alignItems:'center', alignSelf:'center'}}>
                                                <Button onClick={register} className={'filled'} sx={{padding:'4px 48px!important'}}>Enter</Button>
                                            </div>

                                        </div>
                                    </Dialog>
                                </>
                            ): (
                                <>
                                    <Button className={'filled'} onClick={() => {localStorage.removeItem('STDAccessToken'); setEnter(null)}} >
                                        Sign out
                                    </Button>
                                </>
                                )}

                        </Box>
                    </Toolbar>
                </Container>

            </div>
        </header>
    );
}

