// import React from 'react'
// import Layout from '../components/Layout'

// function aboutus() {
//   return (
//     <Layout>
//       <Grid component>
  
//        <Grid xs={6}>

//      Welcome to SENOC POINT OF SALE MARKETING your premier destination for high-quality heavy equipment machinery in the Philippines. With a steadfast commitment to excellence and reliability, we specialize in providing top-of-the-line equipment such as skid steers, backhoes, and more, catering to the diverse needs of our clientele.At SENOC POINT OF SALE MARKETING, we understand the significance of robust and dependable machinery in various industries, from construction and agriculture to landscaping and beyond. That's why we strive to offer a comprehensive range of products renowned for their durability, efficiency, and performance.
     
//      Backed by a team of seasoned professionals and industry experts, we pride ourselves on delivering unparalleled customer service and support at every step of your journey with us. Whether you're in search of cutting-edge equipment solutions, expert advice, or reliable maintenance services, we're here to exceed your expectations.With a steadfast dedication to quality craftsmanship and customer satisfaction, SENOC POINT OF SALE MARKETING stands as a trusted partner for all your heavy equipmen        t needs in the Philippines. Experience the difference with us today.
//        </Grid>

//       </Grid>
//     </Layout>
//   )
// }

// export default aboutus
import React from 'react'
import Layout from '../components/Layout'
import { Grid,
Card,
CardMedia, 
TextField,
Box,
} from '@material-ui/core'
import Image from 'next/image';
import { Typography } from '@mui/material';
import useStyles from '../utils/styles';
import ButtonM from '../components/button'
import PhoneInTalkSharpIcon from '@mui/icons-material/PhoneInTalkSharp';
import ForwardToInboxSharpIcon from '@mui/icons-material/ForwardToInboxSharp';
import FmdGoodSharpIcon from '@mui/icons-material/FmdGoodSharp';
function aboutus() {

    const classes = useStyles();
   
  return (
    <Layout>
     <Grid container item >
  
        <Grid xs={12} md={6} >
          <Typography className={classes.footertext}>
            Get In Touch
          </Typography> 

          When, while lovely valley teems with vapour around meand meridian the upper impenetrable .   
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

          <TextField 
            id="filled-basic"
            label="Phone number"
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
          <TextField 
            id="filled-basic"
            label="Phone number"
            variant="filled"
            fullWidth
            multiline
            rows={5}
            style={{
                backgroundColor:"#lightgray", 
                color:"white", 
                borderRadius:5,
                // border: '1px solid #000',
                marginTop:'0.5rem',
                marginBottom:'0.5rem',
            }}
          />
       <ButtonM>
        SUBMIT
       </ButtonM>
      </Grid>
        <Grid xs={12} md={6}>

        <Card>
         {/* <Image
                   component="img"
                   src={'/images/banner1.jpg'}
                   alt={"green iguana"}
                   width={50}
                   height={50}
          />     */}
        </Card>  

        </Grid>

      <Box sx={{
        marginTop:'3rem',
        // marginBottom:'2rem',
      }}>

      <Grid container item spacing={2}>
        <Grid  md={4} xs={12}>
         <ForwardToInboxSharpIcon
            style={{            
              color:"#FF730E",
            }}
         />
         Email:contact@senocpointofsalemarketing.com
        </Grid>

        <Grid md={4} xs={12}>
          <PhoneInTalkSharpIcon
            style={{            
              color:"#FF730E",
            }}
          />
         Phone:+63 920 142 7892
        </Grid>

        <Grid md={4} xs={12}>
          <FmdGoodSharpIcon 
            style={{            
              color:"#FF730E",
            }}
          />
         Address :63FJ+QUX, Terelay Industrial Estate, Bo. Pittland, Provincial Rd, Cabuyao, Laguna, Philippines   
        </Grid>
      </Grid>  
  
      </Box>  
  
     </Grid>
    </Layout>
  )
}

export default aboutus
