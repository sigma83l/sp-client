import React from 'react'
import { Grid,
    Card,
    CardMedia, 
    TextField, 
    } from '@material-ui/core'
    
function textfield() {
  return (
    <div>
      <TextField 
                  id="filled-basic"
                  label="Your E-mail"
                  variant="filled"
                  fullWidth
                  style={{
                      backgroundColor:"#lightgray", 
                      color:"white", 
                      borderRadius:5,
                      // border: '1px solid #000',
                      marginTop:'0.5rem'
                  }}
       />
    </div>
  )
}

export default textfield
