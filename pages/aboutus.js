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
import { Grid } from '@material-ui/core'
import ButtonM from '../components/button'
import styles from '../styles/Home.module.css';


function aboutus() {
  return (
    <Layout>
     <Grid container item   direction="row-reverse"     >

      <Grid sm={6} xs={12} >
                   <div className={styles.square}>
                      <div className={styles.content}>
                      <img
                        className={styles.transition}
                        alt="dw"
                        src='/images/abus.webp'
                        style={{
                          width: '100%',
                          height: '100%',
                          borderRadius: 20,
                        }}
                      />
                      </div>
                    </div>
        {/* <Card>
         <Image
                   component="img"
                   src={'/images/banner1.jpg'}
                   alt={"green iguana"}
                   width={'100%'}
                   height={'100%'}
          />    
        </Card>   */}

        </Grid>
        <Grid sm={6} xs={12}>
         Welcome to SENOC POINT OF SALE MARKETING your premier destination for high-quality heavy equipment machinery in the Philippines. With a steadfast commitment to excellence and reliability, we specialize in providing top-of-the-line equipment such as skid steers, backhoes, and more, catering to the diverse needs of our clientele.At SENOC POINT OF SALE MARKETING, we understand the significance of robust and dependable machinery in various industries, from construction and agriculture to landscaping and beyond. That is why we strive to offer a comprehensive range of products renowned for their durability, efficiency, and performance.
       
         Backed by a team of seasoned professionals and industry experts, we pride ourselves on delivering unparalleled customer service and support at every step of your journey with us. Whether you are in search of cutting-edge equipment solutions, expert advice, or reliable maintenance services, we are here to exceed your expectations.With a steadfast dedication to quality craftsmanship and customer satisfaction, SENOC POINT OF SALE MARKETING stands as a trusted partner for all your heavy equipmen        t needs in the Philippines. Experience the difference with us today.
        <div style={{marginTop:"1rem", marginBottom:'2rem'}}>
         <ButtonM>
          Contact us 
         </ButtonM> 
        </div> 

        </Grid>
        

     </Grid>
    </Layout>
  )
}

export default aboutus
