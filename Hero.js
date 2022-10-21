import { Box, Button, Typography} from '@mui/material'
import React from 'react'
import office2 from "../components/office2.jpg"
import Navbar from "./navbar"
import Content from "./Content"
import ArrowDownwardOutlined from '@mui/icons-material/ArrowDownwardOutlined';
import { useNavigate } from 'react-router-dom'



const Hero = () => {


  const navigate=useNavigate();
  function handle(){
    navigate("/c")
  }
  return (
    <>
   
     <Navbar />
   
   
   <Box sx={{
        backgroundImage:`url(${office2})`,
        backgroundRepeat:"no-repeat",
        backgroundColor:"black",
      
        
        backgroundSize:"cover",
        height:800,
        width:"100%",
        display:"flex",
        justifyContent:"center",
}}>
    
<Box >
<Typography sx={{marginTop:"200px",fontSize:"80px"}} textTransform={"none"} variant="h2"  color="white" >GRAND FORMENTOS</Typography>
  <Box sx={{marginTop:"100px",marginLeft:"250px"}}>
        <Button sx={{height:"60px",width:"200px",backgroundColor:"dimgray","&:hover":{backgroundColor:"orange"},borderRadius:"40px"}}><Typography textTransform={"none"} variant="h5" color="white" >Lacamentos</Typography></Button>
        </Box>
        <ArrowDownwardOutlined sx={{cursor:"pointer",color:"white",marginTop:"90px",marginLeft:"330px"}} onClick={handle}/>
 
 </Box>

        </Box>
        
        
      
    
 
      <Content/>
      </>
  )
}

export default Hero
