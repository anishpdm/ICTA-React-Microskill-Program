import { Button, CircularProgress, Table, TableBody, TableCell, TableHead, TableRow, Typography } from '@material-ui/core'
import axios from 'axios'
import React, { useEffect, useState } from 'react'

const ViewCourses = () => {

var [courseData,changeData]=useState([])
var [isLoading,loadstatusChange]=useState(false)

 useEffect( ()=>{
 
    loadData()

 },[] )


 const loadData=()=>{

    loadstatusChange(isLoading=true)

    axios.get("https://mylinkurcodesapp.herokuapp.com/getcourses").then(
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
             <TableCell> Course Title </TableCell>
             <TableCell>  Description </TableCell>
             <TableCell>  Date  </TableCell>
             <TableCell>  Venue  </TableCell>
             <TableCell>  Duration  </TableCell>
         </TableRow>
     </TableHead>

     <TableBody>
         {courseData.map((value,index)=>{
return <TableRow> 
<TableCell> {value.courseTitle} </TableCell>
<TableCell> {value.courseDescription} </TableCell>
<TableCell> {value.courseDate} </TableCell>
<TableCell> {value.courseVenue} </TableCell>
<TableCell> {value.courseDuration} </TableCell>

</TableRow>

         } )}

     </TableBody>


 </Table>
}

 


        </div>
    )
}

export default ViewCourses
