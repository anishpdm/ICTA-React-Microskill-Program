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

    axios.get("https://newsapi.org/v2/top-headlines?country=in&apiKey=9b6ac262eea44bcbbf80ae1b064f631d").then(
        (response)=>{
    console.log(response.data.articles)
   
   changeData(
       courseData=response.data.articles
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
             <TableCell> News Title </TableCell>
             <TableCell>  Description </TableCell>
             <TableCell>  Date  </TableCell>
             <TableCell>  Venue  </TableCell>
             <TableCell>  Duration  </TableCell>
         </TableRow>
     </TableHead>

     <TableBody>
         {courseData.map((value,index)=>{
return <TableRow> 
<TableCell> {value.title} </TableCell>
<TableCell> {value.description} </TableCell>
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
