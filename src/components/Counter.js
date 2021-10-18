import { Button, Typography } from '@material-ui/core'
import React, { useState } from 'react'

const Counter = () => {

    var [counterValue,setCounterValue]=useState(0)

    const decrementCounterBtn=()=>{

        setCounterValue(
           counterValue=counterValue-1 
        )
    }

    const incrementCounterBtn=()=>{

        setCounterValue(
            counterValue=counterValue+1
        )      

    }

    return (
        <div>
            

<Typography variant="h2"> {counterValue} </Typography>
            <Button
            onClick={incrementCounterBtn}
            fullWidth
            color="secondary"
            variant="contained" > + </Button>


            <Button 
            onClick={decrementCounterBtn}
            variant="contained"
            fullWidth
            color="primary"
            >-</Button>

        </div>
    )
}

export default Counter
