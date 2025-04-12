/* eslint-disable @next/next/no-img-element */
import NextLink from 'next/link';
import { Grid, Link, Typography,  IconButton,
} from '@mui/material';
import Layout from '../components/Layout';
import db from '../utils/db';
import Product from '../models/Product';
import axios from 'axios';
import { useRouter } from 'next/router';
import { useContext } from 'react';
import { Store } from '../utils/Store';
import ProductItem from '../components/ProductItem';
import Carousel from 'react-material-ui-carousel';
import useStyles from '../utils/styles';
import styles from '../styles/Home.module.css';
import Button from '../components/button';
import { useState } from 'react';
import { SiTicktick } from "react-icons/si";
import { FaHeadset, FaShippingFast } from "react-icons/fa";

import { IoWallet } from "react-icons/io5";


export default function Home(props) {
  const classes = useStyles();
  const router = useRouter();
  const { state, dispatch } = useContext(Store);
  const { topRatedProducts, featuredProducts } = props;
  const addToCartHandler = async (product) => {
    const existItem = state.cart.cartItems.find((x) => x._id === product._id);
    const quantity = existItem ? existItem.quantity + 1 : 1;
    const { data } = await axios.get(`/api/products/${product._id}`);
    if (data.countInStock < quantity) {
      window.alert('Sorry. Product is out of stock');
      return;
    }
    dispatch({ type: 'CART_ADD_ITEM', payload: { ...product, quantity } });
    router.push('/cart');
  };


    const [query, ] = useState('');
  const submitHandler = (e) => {
    e.preventDefault();
    router.push(`/search?query=${query}`);
  };


  const imagelist = {
    images: [
      {
        id: 0,
        productphoto: 'images/jcb.webp',
      },
      {
        id: 1,
        productphoto: 'images/asv.webp',
      },
      {
        id: 2,
        productphoto: 'images/bobcat.webp',
      },
      {
        id: 3,
        productphoto: 'images/johndeere.webp',
      },
      {
        id: 4,
        productphoto: 'images/gehl.webp',
      },
      {
        id: 5,
        productphoto: 'images/kyboto.webp',
      },
      {
        id: 6,
        productphoto: 'images/wacker.webp',
      },

      {
        id: 7,
        productphoto: 'images/challenger.webp',
      },
      {
        id: 8,
        productphoto: 'images/massey.webp',
      },
      {
        id: 9,
        productphoto: 'images/duetz.webp',
      },
    ],
  };

  
  return (
    <Layout>
      <Typography align='center'
        
      >
       <Typography 
        style={{
          color:"#FF730E",
          fontSize:'1.5rem',

        }}>
          Welcome To
       </Typography>
       <Typography 
        align='center'
        style={{
          color:"#303030",
          fontSize:'2.5rem',
          fontWeight:"800"

        }}>
           SENOC POINT OF SALE
           MARKETING
  
       </Typography>

       <Typography
         style={{
          color:"#41A76A",
         }}
       >
        Your Trusted Source for Heavy Equipment Machinery in the Philippines
     
       </Typography>
           <br></br>
          
      </Typography>

      <Grid container item spacing={1}
      
        style={{
         marginTop:"4rem", 
         marginBottom:"4rem",
        }}
        >
        <Grid xs={6} md={3}
           
           >
          <FaShippingFast 
           size={30} 
           style={{
             color:"#FF730E",
           }}
          />
        <Typography style={{fontWeight:"800"}}>
           Free Shipping
        </Typography>
           Free Shipping On All Order
        </Grid>
        <Grid xs={6} md={3}>
          <SiTicktick
                      size={30} 
                      style={{
                        color:"#FF730E",
                      }}
          />
          <Typography style={{fontWeight:"800"}}>
               Money Guarantee
          </Typography>
           30 Day Money Back
        </Grid>
        <Grid xs={6} md={3}>
          <FaHeadset
            size={30} 
            style={{
              color:"#FF730E",
            }}
          />
          <Typography style={{fontWeight:"800"}}>
           Online Support 24/7
          </Typography>
           Technical Support 24/7
        </Grid>
        <Grid xs={6} md={3}>
          <IoWallet
                      size={30} 
                      style={{
                        color:"#FF730E",
                      }}
          />
          <Typography style={{fontWeight:"800"}}>
            Secure Payment
          </Typography>
            All Cards Accepted
            Why Choose Us
        </Grid>
      </Grid>



    <Grid container item      
    spacing={0}  
     style={
          {
            backgroundColor:"#41A76A",
            color:"white",
            borderRadius:20,
            padding:"1rem",
            // fontWeight:'bold',

          }}>
      <Grid xs={6}> 
        <Typography align='center'
>

          <h2 
           style={{
            fontSize:'3rem', 
            fontWeight:"2000",
            padding:"1rem",

           }}
          >
           Why Choose Us
          </h2> 
            At 
            SENOC POINT OF SALE MARKETING, we specialize in providing top-quality used heavy equipment machinery to meet the diverse needs of industries across the Philippines. From construction and agriculture to landscaping and more, we are dedicated to supplying reliable and efficient solutions to help you get the job done right.
            
            Quality Assurance: Our products undergo rigorous testing to ensure they meet the highest standards of durability and performance, giving you peace of mind with every purchase.
            
            Expertise: With years of experience and industry expertise, our team is well-equipped to provide personalized advice and guidance to help you find the perfect equipment for your specific requirements.
            
            Checkout Our
            Summer Sale
            Explore our extensive range of heavy equipment machinery, including skid steers, backhoes, and more, all designed to optimize productivity and efficiency on the job site.
            
            Shop
        </Typography>
      </Grid> 
      <Grid item xs={6}  
       style={{marginTop:"10%"}}>
       <Typography
               style={{
                padding:"1rem",
              }}
       >
        Checkout Our
       </Typography>
        <h2 
          style={{
            fontSize:'2rem', 
            fontWeight:"2000",
            padding:"1rem",

          }}
        >
         Summer Sale

        </h2>
        <Typography 
        style={{
          padding:"1rem",
        }}>
          Explore our extensive range of heavy equipment machinery, including skid steers, backhoes, and more, all designed to optimize productivity and efficiency on the job site.

        </Typography>
        <div>
           <form onSubmit={submitHandler} className={classes.searchForm}>
            <Grid container>

                {/* <Grid xs={12}>
                 <InputBase
                  name="query"
                  className={classes.searchInput}
                  placeholder="Search products"
                  onChange={queryChangeHandler}
                 />
                </Grid> */}
                <Grid xs={12}>
                <IconButton
                  type="submit"
                  className={classes.iconButton}
                  aria-label="search"
                >
                  <Button>
                    SHOP NOW!
                  </Button>
                 </IconButton>
                </Grid>
              
            </Grid>

           </form>
          </div>
      {/* <div style={{margin:"1rem"}}>
       <form onSubmit={submitHandler} className={classes.searchForm}>
        <Button>
          SHOP
        </Button>
       </form>

      </div>
       */}
      </Grid>
      

    </Grid>
 
      {/* <ProductItem> 
      {topRatedProducts}
      </ProductItem> */}
        {/* <Grid container spacing={3}>
          <Grid item md={4} >
            <Icard/>
          </Grid>
        </Grid> */}

         <Grid container item   direction="row-reverse"  
           style={{
            justifyContent: "center",
            alignItems: "center",
            marginTop:"4rem",
            marginBottom:"4rem",
           }}   >
            <Grid xs={12}>
             <Typography 
               style={{
                fontWeight:'800',
                fontSize:'2rem',

               }}
              >
              Shop By Brand
             </Typography>
            </Grid>  
      
         {imagelist.images.map((image,i) => (

              <Grid lg={2} md={3} sm={4} xs={6}
              key={i}
              sx={{
                justifyContent: "center",
                alignItems: "center",
              }}>
                
                      <div className={styles.square}>
                         <div className={styles.content}>
                           <img
                           key="d"
                             alt = "wf"
                             className={styles.transition}
                             src={image.productphoto}
                             // title={service.name}
                             style={{ 
                               width: '100%', 
                               height: '100%',
                               borderRadius: 20,
   
                               // backgroundColor:'transparent',
                             }}
                           ></img>
                         </div>
                       </div>
            </Grid>
           ))}
  
          </Grid>           

      <Carousel className={classes.mt1} animation="slide">
        {featuredProducts.map((product) => (
          <NextLink
            key={product._id}
            href={`/product/${product.slug}`}
            passHref
          >
            <Link>
              <img
                src={product.featuredImage}
                alt={product.name}
                className={classes.featuredImage}
              ></img>
            </Link>
          </NextLink>
        ))}
      </Carousel>
      <Typography variant="h2">Popular Products</Typography>
      <Grid container spacing={3}>
        {topRatedProducts.map((product) => (
          <Grid item md={4} key={product.name}>
            <ProductItem
              product={product}
              addToCartHandler={addToCartHandler}
            />
          </Grid>
        ))}
      </Grid>
    </Layout>
  );
}

export async function getServerSideProps() {
  await db.connect();
  const featuredProductsDocs = await Product.find(
    { isFeatured: true },
    '-reviews'
  )
    .lean()
    .limit(3);
  const topRatedProductsDocs = await Product.find({}, '-reviews')
    .lean()
    .sort({
      rating: -1,
    })
    .limit(6);
  await db.disconnect();
  return {
    props: {
      featuredProducts: featuredProductsDocs.map(db.convertDocToObj),
      topRatedProducts: topRatedProductsDocs.map(db.convertDocToObj),
    },
  };
}
