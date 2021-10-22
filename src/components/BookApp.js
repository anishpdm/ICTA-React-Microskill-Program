import { Button, TextField, Typography } from '@material-ui/core'
import React, { useEffect, useState } from 'react'
import useForm from './Read'

const BookApp = () => {
    
    
var [value,setValue]=useForm({title:"",author:"",price:0,publishedYear:""})

const readFn=()=>{
 
    console.log(value)
}

useEffect(()=>{
    console.log("Hello")
},[])

    return (
        <div>
            
<TextField
name="title"
onChange={setValue}
value={value.title}
 margin="normal"
  label="Book Title"
   variant="outlined" 
   fullWidth  />

 
<TextField
name="author"
onChange={setValue}
value={value.author}
 margin="normal"
  label="Book Author"
   variant="outlined" 
   fullWidth  /> 


   
<TextField
name="price"
onChange={setValue}
value={value.price}
 margin="normal"
  label="Book Price"
   variant="outlined" 
   fullWidth  /> 

<TextField
name="publishedYear"
onChange={setValue}
value={value.publishedYear}
 margin="normal"
  label="Book published Year"
   variant="outlined" 
   fullWidth  /> 



   <Button onClick={readFn} fullWidth color="secondary" variant="contained"> SUBMIT </Button>


<Typography>{value.title} </Typography>

        </div>
    )
}

export default BookApp
