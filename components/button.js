import * as React from 'react';
// import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';

export default function BasicButtons({children}) {
  return (
    <div>
      <Button 
        style={{
          backgroundColor:"#FF730E",
          color:"white",
          borderRadius:20,
          paddingRight:"1rem",
          paddingLeft:"1rem",
          paddingTop:"0.5rem",
          paddingBottom:"0.5rem",
          // '&:hover': {
          //   backgroundColor: 'red',
          //   boxShadow: 'none',
          // },
          // '&:active': {
          //   boxShadow: 'none',
          //   backgroundColor: '#3c52b2',
          // },
          // margin:"0.1rem",

        }}
        variant="contained">
            {children}
   {/* aaaa    */}
      </Button>
    </div>
  );
}