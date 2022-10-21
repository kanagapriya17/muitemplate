import { Box, Stack, Typography,Button } from '@mui/material'

import React from 'react'
import image1 from "../components/image1.jpg"
import image2 from "../components/image2.jpg"
import image3 from "../components/image3.jpg"

const Content = () => {
  return (
    <Box height="1000px" sx={{backgroundColor:"#eee",paddingTop:"20px"}}>

        <Typography variant="h3" sx={{marginLeft:"350px"}} >Revestimentos cerâmicos para pisos e paredes</Typography>
      
        <br/>
        <br/>

        <Stack display="flex" direction="row" height="1000" spacing={1}>

        <Box sx={{ borderRadius:"40px",height:500,width:"40%",backgroundColor:"white" ,marginleft:"50px"}} >
        <Box sx={{
            backgroundImage:`url(${image1})`,
            backgroundRepeat:"no-repeat",
            backgroundColor:"white",
            backgroundPosition:"center",
            backgroundSize:"cover",
            height:200,
            borderTopLeftRadius:"20px",
            borderTopRightRadius:"20px",
             width:"100%",
            display:"flex",
            justifyContent:"center",
            
           
        }}>
     </Box>
       <Typography variant="h2" sx={{color:"black",marginLeft:"160px",marginTop:"20px",fontStyle:"inherit"}}> Piscinas</Typography>
       <Button sx={{height:"60px",width:"300px",marginTop:"60px",marginLeft:"100px","&:hover":{backgroundColor:"orange"},borderRadius:"40px",border:"solid",borderColor:"orange"}}><Typography sx={{"&:hover":{color:"white"}}} textTransform='none' color="orange" >Conhea o reinvestments</Typography></Button>
     </Box>


     <Box sx={{ borderRadius:"40px",height:500,width:"40%",backgroundColor:"white" ,marginleft:"50px"}} >
        <Box sx={{
            backgroundImage:`url(${image2})`,
            backgroundRepeat:"no-repeat",
            backgroundColor:"white",
            backgroundPosition:"center",
            backgroundSize:"cover",
            height:200,
            borderTopLeftRadius:"20px",
            borderTopRightRadius:"20px",
            width:"100%",
            display:"flex",
            justifyContent:"center",
            
           
        }}>
     </Box>
       <Typography variant="h2" sx={{color:"black",marginLeft:"150px",marginTop:"20px",fontStyle:"inherit"}}> Supercias</Typography>
       <Button sx={{height:"60px",width:"300px",marginTop:"60px",marginLeft:"100px","&:hover":{backgroundColor:"orange"},borderRadius:"40px",border:"solid",borderColor:"orange"}}><Typography sx={{"&:hover":{color:"white"}}} textTransform='none' color="orange" >Conhea o reinvestments</Typography></Button>
       
     </Box>

    

        <Box sx={{ borderRadius:"40px",height:500,width:"40%",backgroundColor:"white" ,marginleft:"50px"}} >
        <Box sx={{
            backgroundImage:`url(${image3})`,
            backgroundRepeat:"no-repeat",
            backgroundColor:"white",
            backgroundPosition:"center",
            backgroundSize:"cover",
            height:200,
            borderTopLeftRadius:"20px",
            borderTopRightRadius:"20px",
            width:"100%",
            display:"flex",
            justifyContent:"center",
            
        }}>
        </Box>
        <Typography variant="h2" sx={{color:"black",marginLeft:"160px",marginTop:"20px",fontStyle:"inherit"}}> Filates</Typography>
        <Button sx={{height:"60px",
        width:"300px",
        marginTop:"60px",
        marginLeft:"100px",
        color:"orange",
        "&:hover":{backgroundColor:"orange",color:"white"},borderRadius:"40px",border:"solid",borderColor:"orange"}}>
          Conhea o reinvestments
          </Button>
        </Box>
        
         

        </Stack>

</Box>
  )
}

export default Content
