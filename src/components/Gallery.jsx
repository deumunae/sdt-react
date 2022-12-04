import React, {useRef} from 'react';
import Box from "@mui/material/Box";
import Table1 from "../assets/table1.jpg"
import Table2 from "../assets/table2.jpg"
import Table3 from "../assets/table3.jpg"
import Typography from "@mui/material/Typography";

const Gallery = () => {
    const imgBase = useRef()


    function handleChangeImage(e){
        if(imgBase.current.src===e.target.src)return;

        imgBase.current.style.opacity = 0;
        setTimeout(()=>{
            imgBase.current.src = e.target.src;
            imgBase.current.style.opacity = 1;
        }, 300)
    }

    function handleResize(e){
        console.log(e)
        if(e.type === 'mousedown'|| e.type === 'onmouseenter'){
            imgBase.current.style.position = 'relative';
            imgBase.current.style.zIndex = '1px';
            imgBase.current.style.transform = "scale(1.6)";
        }else{
            imgBase.current.style.transform = "scale(1)";
        }


    }
    return(
        <Box sx={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            borderRadius: '24px',
            width: '100vw',
            p: 3,
            mt: 3,
        }}>
            <Box className={'container'} sx={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                gap: '20px',
            }}>
                <Typography variant={'h4'} sx={{color: '#191F28', fontSize: '28px', fontWeight:'700', fontFamily:'Poppins'}}>
                    We provide a free interface to track income on your website
                </Typography>
                <img ref={imgBase} src={Table1} style={{width: '90%', maxWidth:'700px', borderRadius: '12px', transition: '0.3s all ease 0s'}}
                     onMouseDown={handleResize}
                     onMouseUp={handleResize}
                     onMouseEnter={handleResize}
                ></img>

                <Box sx={{display: 'flex', gap: '20px', overflow: 'scroll', maxWidth:'90%', width:'700px', justifyContent:'space-between'}}>
                    <img id='1' src={Table1} style={{width: '200px', borderRadius: '12px'}} onClick={handleChangeImage}></img>
                    <img id='2' src={Table2} style={{width: '200px', borderRadius: '12px'}} onClick={handleChangeImage}></img>
                    <img id='3' src={Table3} style={{width: '200px', borderRadius: '12px'}} onClick={handleChangeImage}></img>
                </Box>
            </Box>


        </Box>

    );

}

export default Gallery
