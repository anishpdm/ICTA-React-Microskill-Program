import { Button, CircularProgress, Table, TableBody, TableCell, TableHead, TableRow, Typography } from '@material-ui/core'
import axios from 'axios'
import React, { useEffect, useState } from 'react'

const ViewCrses = () => {

var [courseData,changeData]=useState([])
var [isLoading,loadstatusChange]=useState(false)

 useEffect( ()=>{
 
    loadData()

 },[] )

 const deleteAction=(x)=>{

    console.log(x)
    const data={"_id":x}

    axios.post("http://3.15.250.92:5000/delete",data).then(
        (response)=>{
    console.log(response.data)
   
   
        }
    )

 }

 const loadData=()=>{

    loadstatusChange(isLoading=true)

    axios.get("http://3.15.250.92:5000/view").then(
        (response)=>{
    console.log(response.data)
   
   changeData(
       courseData=response.data
   )

   loadstatusChange(isLoading=false)

   
        }
    )

    
 }


    return (
        <div>


{ isLoading ? <CircularProgress color="primary" />  : 


<Table style={{ marginTop:2}}>
     <TableHead>
         <TableRow>
             <TableCell>  Title </TableCell>
             <TableCell>  Description </TableCell>
            
             <TableCell>  Delete  </TableCell>
         </TableRow>
     </TableHead>

     <TableBody>
         {courseData.map((value,index)=>{
return <TableRow> 
<TableCell> {value.title} </TableCell>
<TableCell> {value.description} </TableCell>

<TableCell> <Button onClick={ ()=>deleteAction(value._id) }> Delete </Button> </TableCell>

</TableRow>

         } )}

     </TableBody>


 </Table>
}

 


        </div>
    )
}

export default ViewCrses
