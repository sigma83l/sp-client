import React from 'react'
import Layout from '../components/Layout'
import { Grid, Card, TextField, Box } from '@material-ui/core'
import { Typography } from '@mui/material';
import useStyles from '../utils/styles';
import ButtonM from '../components/button'
import PhoneInTalkSharpIcon from '@mui/icons-material/PhoneInTalkSharp';
import ForwardToInboxSharpIcon from '@mui/icons-material/ForwardToInboxSharp';
import FmdGoodSharpIcon from '@mui/icons-material/FmdGoodSharp';

function AboutUs() {  // Updated component name to uppercase

  const classes = useStyles();
  
  return (
    <Layout>
      <Grid container item >
        <Grid xs={12} md={6} >
          <Typography className={classes.footertext}>
            Get In Touch
          </Typography> 
          When, while lovely valley teems with vapour around me and meridian the upper impenetrable.
          
          <TextField 
            id="filled-basic"
            label="Your E-mail"
            variant="filled"
            fullWidth
            style={{
                backgroundColor:"#lightgray", 
                color:"white", 
                borderRadius:5,
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
                marginTop:'0.5rem'
            }}
          />
          <TextField 
            id="filled-basic"
            label="Message"
            variant="filled"
            fullWidth
            multiline
            rows={5}
            style={{
                backgroundColor:"#lightgray", 
                color:"white", 
                borderRadius:5,
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
            {/* <Image component="img" src={'/images/banner1.jpg'} alt="green iguana" width={50} height={50} /> */}
          </Card>
        </Grid>

        <Box sx={{ marginTop: '3rem' }}>
          <Grid container item spacing={2}>
            <Grid md={4} xs={12}>
              <ForwardToInboxSharpIcon style={{ color:"#FF730E" }} />
              Email: contact@senocpointofsalemarketing.com
            </Grid>

            <Grid md={4} xs={12}>
              <PhoneInTalkSharpIcon style={{ color:"#FF730E" }} />
              Phone: +63 920 142 7892
            </Grid>

            <Grid md={4} xs={12}>
              <FmdGoodSharpIcon style={{ color:"#FF730E" }} />
              Address: 63FJ+QUX, Terelay Industrial Estate, Bo. Pittland, Provincial Rd, Cabuyao, Laguna, Philippines   
            </Grid>
          </Grid>
        </Box>
      </Grid>
    </Layout>
  );
}

export default AboutUs;  // Updated component name to uppercase
