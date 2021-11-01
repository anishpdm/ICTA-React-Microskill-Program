import { Grid } from '@material-ui/core'
import React from 'react'
import AddCourse from './AddCourse'
import ViewCourses from './ViewCourses'

const Course = () => {
    return (
        <div>

            <Grid container style={{padding:30}}>

                <Grid style={{padding:10}} item xs={12} sm={6} md={6}  > <AddCourse /> </Grid>
                <Grid style={{padding:10}} item xs={12} sm={6} md={6}  > <ViewCourses /> </Grid>

            </Grid>
            
        </div>
    )
}

export default Course
