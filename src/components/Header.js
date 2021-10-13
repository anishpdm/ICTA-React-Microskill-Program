import { AppBar, Toolbar, Typography } from '@material-ui/core'
import React from 'react'

const Header = () => {
    return (
        <div>

 <AppBar position="static"> 
     
     <Toolbar>
        <Typography variant="h5"> ICT Academy </Typography>
          </Toolbar>
     </AppBar>  
        </div>
    )
}

export default Header
