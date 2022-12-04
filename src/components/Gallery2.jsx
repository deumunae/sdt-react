import React, {useEffect, useRef, useState} from 'react'
import Box from "@mui/material/Box";
import Table1 from "../assets/table1.jpg"
import Table2 from "../assets/table2.jpg"
import Table3 from "../assets/table3.jpg"
import Typography from "@mui/material/Typography";

const Gallery = () => {
    const img1 = useRef()
    const img2 = useRef()
    const img3 = useRef()
    const [active_id, setActiveID] = useState(1);
    let arr = [0, 1, 2]

    function init(){
        img1.current.style.transform = 'translate3d(50%, 0, 0) scale(0.6)'
        img2.current.style.transform = 'translate3d(0, 0, 10px) scale(1)'
        img3.current.style.transform = 'translate3d(-50%, 0, 0) scale(0.6)'
        img1.current.style.filter = 'blur(2px) brightness(50%)'
        img3.current.style.filter = 'blur(2px) brightness(50%)'
        img2.current.style.zIndex = 2
    }
    useEffect(()=>{
        init()
    }, [])
    function handleChangeImage(e){
        if(e.target.id===img2.current.id)return


        e.target.style.transform += 'scale(0.1)'
        img2.current.style.transform += 'scale(0.1)'
        setTimeout(()=>{
            let temp = arr[e.target.id]
            let newMain = e.target.src;
            arr[e.target.id] = arr[img2.current.id]
            e.target.src = img2.current.src;
            arr[img2.current.id] = temp
            img2.current.src = newMain;
            setActiveID(arr[1])
            console.log(arr)
            console.log(arr[1])
            console.log(active_id)
            init();
        }, 400)


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
                <Typography variant={'h4'} sx={{color: '#191F28', fontSize: '28px', fontWeight:'700', fontFamily:'Poppins', mb: 7}}>
                    We provide a free interface to track income on your website
                </Typography>

                <Box sx={{display: 'flex', maxWidth:'90%', height:'350px', justifyContent:'center', position:'relative'}}>
                    <img ref={img1} id='0' src={Table1} style={{transition: '0.7s all ease 0s', height: '100%', borderRadius: '12px', top:0}} onClick={handleChangeImage}></img>
                    <img ref={img2} id='1' src={Table2} style={{transition: '0.7s all ease 0s', height: '100%', borderRadius: '12px', top:0}} onClick={handleChangeImage}></img>
                    <img ref={img3} id='2' src={Table3} style={{transition: '0.7s all ease 0s', height: '100%', borderRadius: '12px', top:0}} onClick={handleChangeImage}></img>
                </Box>

                <Box sx={{display:'flex', gap: '5px', alignItems:'center'}}>
                    <Box sx={{backgroundColor:'#D9D9D9', height:'12px', width:'12px', borderRadius:'50%'}} className={active_id===0?'active':null}/>
                    <Box sx={{backgroundColor:'#D9D9D9', height:'12px', width:'12px', borderRadius:'50%'}} className={active_id===1?'active':null}/>
                    <Box sx={{backgroundColor:'#D9D9D9', height:'12px', width:'12px', borderRadius:'50%'}} className={active_id===2?'active':null}/>
                </Box>
            </Box>
        </Box>
    );
}
export default Gallery
