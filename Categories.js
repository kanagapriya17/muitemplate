import { Stack, styled, Typography } from '@mui/material'
import React from 'react'
import {Box} from "@mui/material"
import CloseIcon from '@mui/icons-material/Close';
import { useNavigate } from 'react-router-dom';
import { Facebook, Instagram, Pinterest } from '@mui/icons-material';
import office from "../components/office.jpg"

const Categories = () => {

const ContentBox=styled(Box)({
  justifyContent:"space-between",
  display:"flex",
  height:"10px"
  

})
const Socialbox=styled(Box)({
  gap:20,
  display:"flex",

  
})


  const navigate=useNavigate();
  function handle(){
    navigate("/")
  }
  return (
    <Box sx={{backgroundColor:"#808080",height:"800px", backgroundImage:`url(${office})`,  backgroundRepeat:"no-repeat",backgroundSize:"cover"}}>

      <Box sx={{display:"flex",justifyContent:"space-between"}}>
      <Typography variant="h3" >welcome</Typography>
      <CloseIcon  sx={{cursor:"pointer","&:hover":{color:"pink"}}} onClick={handle}/>
      </Box>


     <Stack direction="row"  >
      <Box   sx={{padding:"150px",paddingTop:"40px",color:"#cccccc"}} flex={10}>
          <Typography fontFamily={"Garamond,serif"} variant="h3" color="blueviolet">Function
            </Typography> <br/>
            <Typography fontFamily={"Garamond,serif"} variant="h3" color="blueviolet">Function
            </Typography> <br/>
            <Typography fontFamily={"Garamond,serif"} variant="h3" color="blueviolet">Function
            </Typography> <br/>
            <Typography fontFamily={"Garamond,serif"} variant="h3" color="blueviolet">Function
            </Typography>  
      </Box>
      
      <Box   sx={{padding:"150px",paddingTop:"40px",color:"#cccccc"}} flex={10}>
          <Typography fontFamily={"Garamond,serif"} variant="h3" color="darkmagenta">Function
            </Typography> <br/>
            <Typography fontFamily={"Garamond,serif"} variant="h3" color="darkmagenta">Function
            </Typography> <br/>
            <Typography fontFamily={"Garamond,serif"} variant="h3" color="darkmagenta">Function
            </Typography> <br/>
            <Typography fontFamily={"Garamond,serif"} variant="h3" color="darkmagenta">Function
            </Typography>  
      </Box>
      </Stack> 



<br/>
<br/>
<br/>
<br/>
<hr/>
<ContentBox>
  <Typography variant="h4"color="darkgreen">for queries contact us...</Typography>
  <Socialbox>
    <Facebook sx={{"&:hover":{color:"pink"}}}/>
    <Instagram sx={{"&:hover":{color:"pink"}}}/>
    <Pinterest sx={{"&:hover":{color:"pink"}}}/>

  </Socialbox>
</ContentBox>


      </Box>




   
  )
}

export default Categories
