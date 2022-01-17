import { Button, Table, TableBody, TableCell, TableHead, TableRow } from '@material-ui/core'
import axios from 'axios'
import React, { useEffect, useState } from 'react'

const DeleteCourse = () => {

var [courseData,setCourseData]=useState([])


useEffect(
    ()=>{
        fetchData()   

    },[]
)

const fetchData=()=>{
    axios.get("http://3.15.250.92:5000/view").then(
        (response)=>{
            console.log(response.data)

            setCourseData(
                courseData=response.data
            )

        }
    )
}


const deleteAction=(id)=>{
    const data={"_id":id}
axios.post("http://3.15.250.92:5000/delete",data).then(
    (response)=>{
        console.log(response.data.status)
        alert(response.data.status)
        fetchData()

    }
)


}

    return (
        <div>
            <Table>

                <TableHead>
                    <TableRow>
                        

                        <TableCell> Title </TableCell>
                        <TableCell> Description </TableCell>
                        <TableCell> Date </TableCell>
                    </TableRow>
                    </TableHead>


                    <TableBody>
                        {courseData.map(
                            (value,index)=>{
                                return <TableRow>
                                    <TableCell> {value.title}</TableCell>
                                    <TableCell> {value.description}</TableCell>
                                    <TableCell> {value.date}</TableCell>
                                    <TableCell> <Button onClick={ ()=>{deleteAction(value._id)} }  variant="contained" color="secondary"  > Delete</Button> </TableCell>

                                     </TableRow>
                            } 
                        )}
                    </TableBody>
            </Table>
            
        </div>
    )
}

export default DeleteCourse
