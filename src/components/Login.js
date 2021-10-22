import { Button, TextField } from '@material-ui/core'
import React from 'react'
import Header from './Header'

const Login = () => {
    return (
        <div>
      
   
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
  > LOGIN  </Button>

        </div>
    )
}

export default Login
