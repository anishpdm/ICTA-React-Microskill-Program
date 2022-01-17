import { AppBar, Toolbar, Typography } from '@material-ui/core'
import React from 'react'
import { Link } from 'react-router-dom'

const Header = () => {

const style={
width:"100px",
height:"200px"
}

    return (
        <div>

 <AppBar position="static"> 
     
     <Toolbar >
        <Typography variant="h5"> ICT Academy </Typography>

        <Link style={{margin:10}}    to="/">  <Typography style={{color:"#ffffff"}} variant="h6"> Todo Search </Typography> </Link>
        <Link style={{margin:10}}  to="/update">  Todo Update </Link>
        <Link style={{margin:10}}  to="/delete">  Todo Delete </Link>

        
          </Toolbar>
     </AppBar>  
        </div>
    )
}

export default Header
