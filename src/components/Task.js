import { Button, TextField, Typography } from '@material-ui/core'
import React, { useEffect, useState } from 'react'

const Task = () => {

  var [usertask,setuserTask]=useState("")

  var [myTask,setmyTask]=useState([])  
   

const addtoTask=()=>{
setmyTask(

myTask=>[...myTask,usertask]

    )
    
}
  const myTaskHandle=(event)=>{

    console.log(myTask)
    setuserTask(
    usertask=event.target.value
    )

  }



  return (
        <div>

            <TextField
            value={usertask}
            onChange={myTaskHandle}
            label="Enter  a Task"
            margin="normal"
            fullWidth
             variant="outlined"
            
             />

             <Button
             onClick={addtoTask}
             variant="contained"
             fullWidth
             color="primary"> Submit</Button>



           <ul>
              {myTask.map( (value,index)=>{
                  return <div>
                      <li key={index}>  {value} </li>
                  </div>

              } )}
           </ul>
            
        </div>
    )
}

export default Task
