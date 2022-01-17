import { Button, CircularProgress, Table, TableBody, TableCell, TableHead, TableRow, TextField, Typography } from '@material-ui/core'
import axios from 'axios'
import React, { useState } from 'react'
import useForm from './Read'

const SearchTodo = () => {

    var [value,setValue]=useForm({"title":""})
    var [todoData,changeTodoData]=useState([])


    const readData= ()=>{

       console.log(value) 
axios.post("http://3.15.250.92:5000/search",value).then(
    (response)=>{
        console.log(response.data)

        changeTodoData(
            todoData= response.data
        )
    }

)

    }

    return (
        <div>
            
<TextField onChange={setValue} name="title" value={value.title}  label="Enter title" margin="normal" variant="outlined" fullWidth />

<Button onClick={readData} fullWidth variant="contained" color="primary"> SEARCH </Button>



<Table style={{ marginTop:2}}>
     <TableHead>
         <TableRow>
             <TableCell>  Title </TableCell>
             <TableCell>  Description </TableCell>
             <TableCell>  Date  </TableCell>
             <TableCell>  Remarks  </TableCell>
         </TableRow>
     </TableHead>

     <TableBody>
         {todoData.map((value,index)=>{
return <TableRow> 
<TableCell> {value.title} </TableCell>
<TableCell> {value.description} </TableCell>
<TableCell> {value.date} </TableCell>
<TableCell> {value.remarks} </TableCell>

<TableCell> <Button variant="contained" color="primary"> Delete </Button>  </TableCell>

</TableRow>

         } )}

     </TableBody>


 </Table>



        </div>
    )
}

export default SearchTodo
