import React, { useState } from 'react'
import useForm from './Read'
import { Button, CircularProgress, Table, TableBody, TableCell, TableHead, TableRow, TextField, Typography } from '@material-ui/core'
import axios from 'axios'
const UpdateTodo = () => {

    var [value,setValue]=useForm({"title":""})
    var [value1,setValue1]=useForm({"title":"","description":"","remarks":"","date":""})
    var [todoData,changeTodoData]=useState([])


    const readData= ()=>{


        console.log(value)
axios.post("http://localhost:4000/searchsingle",value).then(
    (response)=>{
        console.log(response.data[0])

       changeTodoData(todoData=response.data)

    }

)

    }
    return (
        <div>
                      
<TextField onChange={setValue} name="title" value={value.title}  label="Enter title" margin="normal" variant="outlined" fullWidth />

<Button onClick={readData} fullWidth variant="contained" color="primary"> SEARCH </Button>



<Table style={{ marginTop:2}}>

<TableRow>
<TableCell>  Title </TableCell>
<TableCell>  <TextField onChange={setValue1} value={value1.title} name="title" margin="normal" fullWidth variant="outlined" /> </TableCell>
</TableRow>

<TableRow>
<TableCell>  Description </TableCell>
<TableCell>  <TextField onChange={setValue1} value={value1.description} name="description" margin="normal" fullWidth variant="outlined" /> </TableCell>
</TableRow>

<TableRow>
<TableCell>  Remarks </TableCell>
<TableCell>  <TextField onChange={setValue1} value={value1.remarks} name="remarks"  margin="normal" fullWidth variant="outlined" /> </TableCell>
</TableRow>

<TableRow>
<TableCell>  Date </TableCell>
<TableCell>  <TextField onChange={setValue1} value={value1.date} name="date"  type="date" margin="normal" fullWidth variant="outlined" /> </TableCell>
</TableRow>

<TableRow>
<TableCell>   </TableCell>
<TableCell>  <Button fullWidth color="secondary" variant="contained"> UPDATE</Button> </TableCell>
</TableRow>

</Table>

        </div>
    )
}

export default UpdateTodo



