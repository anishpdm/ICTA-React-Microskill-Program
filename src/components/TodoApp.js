import { Button, Grid, TextField, Typography } from '@material-ui/core'
import React from 'react'
import Login from './Login'

const TodoApp = () => {
    return (
        <div>

           <Grid container style={{padding:40}} >

<Grid item xs={12} sm={6} md={6} style={{padding:10}}>

 <Login />

       </Grid>


<Grid item xs={12} sm={6} md={6} style={{padding:10}} >

         
<TextField
  variant="outlined"
  fullWidth
  label="Enter Name"
  margin="normal"
  />
    
         
<TextField
  variant="outlined"
  fullWidth
  label="Enter Mobile number"
  margin="normal"
  />
     
<TextField
  variant="outlined"
  fullWidth
  label="Enter Username"
  margin="normal"
  />

  <TextField
  type="password"
    margin="normal"
  variant="outlined"
  fullWidth
  label="Enter Password"
  />


  <Button
  variant="contained"
  color="secondary"
  fullWidth
  > REGISTER  </Button>
       </Grid>


           </Grid> 


        </div>
    )
}

export default TodoApp
