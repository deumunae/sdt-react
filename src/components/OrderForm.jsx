import React, {useState} from 'react';
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import {LinearProgress} from "@mui/material";

export const OrderForm = () => {


    const [error, setError] = useState('123');
    const [success, setSuccess] = useState('123');

    const [loading, setLoading] = useState(false);
    const [data, setData] = useState(
        {
            name:'',
            site:'',
            email:'',
            phone:'',
            message:'',
        }
    )

    const changeHandler = event =>{
        setData({...data, [event.target.name]: event.target.value});
        setError('123');
        setSuccess('123')
    }

    const login = () => {
        if(!data.email || !data.name || !data.site || !data.phone ){
            setError('All fields are required!');
        }else if(!data.email.includes('@')){
            setError('Invalid email!');
        }
        else if(data.phone.length < 10){
            setError('Invalid phone number!');
        }else{
            setError('123');
            setLoading(true);
            setTimeout(() => {
                setLoading(false);
                setError('123');
                setSuccess('Sent successfully!')
            }, 2000);
        }
    }


    return(

        <Box id={'bidding_form'} sx={{display:'flex', justifyContent:'center', mb: '56px', mt: 3}}>
            <div className='container'>
                <Box sx={{display:'flex', width:'100%', alignItems:{xs: 'center', md: 'initial'}, justifyContent:{xs: 'none', md: 'space-between'}, flexDirection: {xs: 'column', md: 'row'}}}>
                    <form style={{display:'flex', flexDirection:'column', width:'90%', maxWidth:500}}>

                        <Typography variant='h5' sx={{fontFamily:'Poppins, serif', fontSize:'26px', fontWeight:'700'}}>Order setup and connection Prebid</Typography>
                        {
                            loading && <LinearProgress />
                        }
                        <span style={error === '123' ? {color:'red', width:'100%', marginTop:10, opacity:0} : {color:'red', width:'100%', marginTop:10, opacity:1}}>{error}</span>
                        <span style={success === '123' ? {color:'green', width:'100%', marginTop:10, display:'none'} : {color:'green', width:'100%', marginTop:10, display:'initial'}}>{success}</span>

                        <input name='name' onChange={changeHandler} value={data.name} className='textfield' placeholder='Name' style={{marginTop:20}}/>
                        <input name='email' onChange={changeHandler} value={data.email} className='textfield' placeholder='Email'/>
                        <input name='site' onChange={changeHandler} value={data.site} className='textfield' placeholder='Web-site'/>
                        <input name='phone' onChange={changeHandler} value={data.phone} className='textfield' placeholder='Phone'/>
                        <textarea name='message' onChange={changeHandler} value={data.message} className='textfield' placeholder='Ad networks you using' style={{height:100}}/>
                        <Button onClick={login} variant='filled' className={'filled'} style={{marginTop:10, textTransform:'none', fontWeight:800}}>Send</Button>
                    </form>
                </Box>
            </div>
        </Box>

    )
}
