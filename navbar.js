import React, {  useState } from 'react'
import {Typography,styled,AppBar,Toolbar,Box,  } from "@mui/material"
import SearchIcon from '@mui/icons-material/Search';
import { useNavigate } from 'react-router-dom';
import MenuIcon from '@mui/icons-material/Menu';




const Navbar = () => {

 
  const [navbar, setNavbar] = useState(false);
  
  

  
    


  

  const changeBackground=()=>{
    if(window.scrollY >= 80)
    {
      setNavbar(true);
    }
    else{
      setNavbar(false);
    }
  };



 
  window.addEventListener("scroll",changeBackground);

    
  const navigate=useNavigate();
  function handle(){
    navigate("/s")
  }
  function handleMenu(){
    navigate("/m")
  }
    const StyledToolbar=styled(Toolbar)({
      display:"flex",
      fontVariant:"h6",
        justifyContent:"space-between",
        
      
    });
    const MenuBox=styled(Box)({
        display:"flex",
        gap:30,
        color:"white",
        marginLeft:"400px"
    });

    const SocialBox=styled(Box)({
      
    
      
     

        
    });

    const SearchBox=styled(Box)({
        display:"flex",
        gap:20,
        paddingBottom:"20px"
    });



    const MenuItems=[{Name:'Home',Link:'/'},
    {Name:'Products',Link:'#'},
    {Name:'PortFolio',Link:'#'},
    {Name:'blog',Link:'#'},
    {Name:'Contact Us',Link:'#'}
]
  return (
    
   <AppBar elevation={0} className={navbar? 'navbar active':'navbar'  } sx={{backgroundColor:"transparent",paddingTop:"30px"}} >
    <StyledToolbar   sx={{backgroundColor:"transparent"}} >


     <SocialBox  >
      <Typography variant="h3"  sx={{color:"orange",fontStyle:"italic"}} className={navbar? 'navbar active':'navbar'  }>
      POINTERS
      <img  src={'https://www.pointer.com.br/static/media/logo.a082fba7.svg'} alt='pointer'/>
  
        </Typography>
        
     </SocialBox>


        <MenuBox >
        {MenuItems.map((item) => (
       <Typography variant="h5" sx={{cursor:"pointer"}}>{item.Name}</Typography>
        ))}
    </MenuBox>


    <SearchBox>
    <SearchIcon sx={{marginTop:"20px" ,cursor:"pointer",color:"white",fontSize:"40px"}} onClick={handle}/>
    <MenuIcon sx={{marginTop:"20px" ,cursor:"pointer",color:"white",fontSize:"40px"}} onClick={handleMenu}/>
    </SearchBox>


    </StyledToolbar>
    </AppBar>
   
  )
}
export default Navbar
