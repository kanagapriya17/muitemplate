import { AppBar, styled, TextField, Toolbar} from '@mui/material'
import React from 'react'
import SearchIcon from '@mui/icons-material/Search';
import CloseIcon from '@mui/icons-material/Close';
import { useNavigate } from 'react-router-dom';
import { Box } from '@mui/system';
import office from "../components/office.jpg"


const Search = () => {


    const navigate=useNavigate();
  function handle(){
    navigate("/")
  }
    const StyledToolbar=styled(Toolbar)({
        display:"flex",
       
        color:"white"
    });
    

  return (
    <Box sx={{
      backgroundImage:`url(${office})`,
      backgroundPosition:"center",
      backgroundColor:"black",
      backgroundSize:"cover",
      height:800,
      width:"100%",
      display:"flex"}}>   
    <AppBar sx={{backgroundColor:"transparent"}} >
<StyledToolbar sx={{height:"80px" ,width:"97%}"}} >
<SearchIcon sx={{margintop:"20px"}}/>
<TextField placeholder="Search input" sx={{width:"100%"}} variant="outlined"  />
<CloseIcon  sx={{cursor:"pointer","&:hover":{color:"pink"}}} onClick={handle}/>
</StyledToolbar>
</AppBar>
</Box>



  )
}

export default Search
