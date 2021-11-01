import { Button, TextField } from '@material-ui/core'
import axios from 'axios'
import React from 'react'
import useForm from './Read'

const AddCourse = () => {

    var [value,setValue]=useForm({courseTitle:"",courseDescription:"",courseDate:"",courseDuration:"",courseVenue:""})



    const readValues=()=>{
        console.log(value)
axios.post("https://mylinkurcodesapp.herokuapp.com/addcourse",value).then(
    (response)=>{

        console.log(response.data)

        if(response.data.status=="success")
        {
             alert("Succesfully  Added")
        }
        else{
            alert("Error. Something went wrong ")

        }


    }
)
        



    }

    return (
        <div>
            
            <TextField margin="normal"  onChange={setValue} value={value.courseTitle} variant="outlined" fullWidth label="course Title" name="courseTitle" />
            <TextField margin="normal" onChange={setValue} value={value.courseDescription} label="course Description" variant="outlined" fullWidth name="courseDescription" />
            <TextField margin="normal" onChange={setValue} value={value.courseDate} type="date" label="course Date" variant="outlined" fullWidth name="courseDate" />
            <TextField margin="normal" onChange={setValue} value={value.courseDuration} label="course Duration" variant="outlined" fullWidth name="courseDuration" />
            <TextField  margin="normal" onChange={setValue} value={value.courseVenue} label="course Venue" variant="outlined" fullWidth name="courseVenue" />
            <Button onClick={readValues} fullWidth color="primary" variant="contained"> SUBMIT </Button>

        </div>
    )
}

export default AddCourse
