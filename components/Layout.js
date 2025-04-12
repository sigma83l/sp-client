import React, { useContext } from 'react';
import Head from 'next/head';
import NextLink from 'next/link';

import Mytextfield from '../components/textfield'
import {
  Typography,
  Container,
  Link,
  createMuiTheme,
  ThemeProvider,
  CssBaseline,
  Badge,
  // Button,
  Menu,
  MenuItem,
  Box,
  IconButton,
  Drawer,
  List,
  ListItem,
  Divider,
  InputBase,
  Button
} from '@material-ui/core';
import Grid from '@mui/material/Grid';
// import Button from '../components/button'

import MenuIcon from '@material-ui/icons/Menu';
import CancelIcon from '@material-ui/icons/Cancel';
import SearchIcon from '@material-ui/icons/Search';
import useStyles from '../utils/styles';
import { Store } from '../utils/Store';
import { getError } from '../utils/error';
import Cookies from 'js-cookie';
import { useState } from 'react';
import { useRouter } from 'next/router';
import { useSnackbar } from 'notistack';
import axios from 'axios';
import { useEffect } from 'react';
import ShoppingCartRoundedIcon from '@mui/icons-material/ShoppingCartRounded';

export default function Layout({ title, description, children }, ) {
  const router = useRouter();
  const { state, dispatch } = useContext(Store);
  const { darkMode, cart, userInfo } = state;
  const theme = createMuiTheme({
    typography: {
      h1: {
        fontSize: '1.6rem',
        fontWeight: 400,
        margin: '1rem 0',
      },
      h2: {
        fontSize: '1.4rem',
        fontWeight: 400,
        margin: '1rem 0',
      },
    },
    palette: {
      type: darkMode ? 'dark' : 'light',
      primary: {
        main: '#f0c000',
      },
      secondary: {
        main: '#208080',
      },
    },
  });
  const classes = useStyles();

  const [sidbarVisible, setSidebarVisible] = useState(false);
  const sidebarOpenHandler = () => {
    setSidebarVisible(true);
  };
  const sidebarCloseHandler = () => {
    setSidebarVisible(false);
  };

  const [, setCategories] = useState([]);
  const { enqueueSnackbar } = useSnackbar();

  const fetchCategories = async () => {
    try {
      const { data } = await axios.get(`/api/products/categories`);
      setCategories(data);
    } catch (err) {
      enqueueSnackbar(getError(err), { variant: 'error' });
    }
  };

  const [query, setQuery] = useState('');
  const queryChangeHandler = (e) => {
    setQuery(e.target.value);
  };
  const submitHandler = (e) => {
    e.preventDefault();
    router.push(`/search?query=${query}`);
  };

  useEffect(() => {
    const fetchCategories = async () => {
      try {
        const { data } = await axios.get(`/api/products/categories`);
        setCategories(data);
      } catch (err) {
        enqueueSnackbar(getError(err), { variant: 'error' });
      }
    };
    fetchCategories();
  }, []);

  // const darkModeChangeHandler = () => {
  //   dispatch({ type: darkMode ? 'DARK_MODE_OFF' : 'DARK_MODE_ON' });
  //   const newDarkMode = !darkMode;
  //   Cookies.set('darkMode', newDarkMode ? 'ON' : 'OFF');
  // };
  const [anchorEl, setAnchorEl] = useState(null);
  const loginClickHandler = (e) => {
    setAnchorEl(e.currentTarget);
  };
  const loginMenuCloseHandler = (e, redirect) => {
    setAnchorEl(null);
    if (redirect) {
      router.push(redirect);
    }
  };
  const logoutClickHandler = () => {
    setAnchorEl(null);
    dispatch({ type: 'USER_LOGOUT' });
    Cookies.remove('userInfo');
    Cookies.remove('cartItems');
    Cookies.remove('shippinhAddress');
    Cookies.remove('paymentMethod');
    router.push('/');
  };
  return (
    <div>
      <Head>
        <title>{title ? `${title} -SP-MARKETING` : 'SP MARKETING'}</title>
        {description && <meta name="description" content={description}></meta>}
      </Head>
      <ThemeProvider theme={theme}>
        <CssBaseline />

     <Box 
     sx={{padding:"20px", marginBottom:'2rem'}}
     >
        <Grid container 
          direction="row"
          sx={{
            justifyContent: "space-between",
            alignItems: "center",
          }}
        position="static" 
        className={classes.navbar}>
          {/* <Toolbar className={classes.toolbar}> */}
   {/* <Grid container 
>   */}
    {/* <Grid container item>
     <Grid item xs={12}  
            > */}
          <Grid item xs={5}>

            <Box display="flex" alignItems="center"
             sx={{padding:"0.8rem", color:'black'}}
            >
              <IconButton
                edge="start"
                aria-label="open drawer"
                onClick={sidebarOpenHandler}
                className={classes.menuButton}
              >
                <MenuIcon className={classes.navbarButton} />
              </IconButton>
              <NextLink href="/" passHref>
                <Link>
                  <Typography className={classes.brand}>SP MARKETING</Typography>
                </Link>
              </NextLink>
            </Box>
          </Grid>
          <div              
           style={{color:"red"}}
          >
             <Drawer
               anchor="left"
              open={sidbarVisible}
              onClose={sidebarCloseHandler}
              style={{color:"black"}}
            >
              <List>
                <ListItem>
                  <Box
                    display="flex"
                    alignItems="center"
                    justifyContent="space-between"
                  >
                    {/* <Typography>Shopping by category</Typography> */}
                    <IconButton
                      aria-label="close"
                      onClick={sidebarCloseHandler}
                    >
                      <CancelIcon />
                    </IconButton>
                  </Box>
                </ListItem>
                <Divider light />
                {/* {categories.map((category) => (
                  <NextLink
                    key={category}
                    href={`/search?category=${category}`}
                    passHref
                  >
                    <ListItem
                      button
                      component="a"
                      onClick={sidebarCloseHandler}
                    >
                      <ListItemText primary={category}></ListItemText>
                    </ListItem>
                  </NextLink>
                ))} */}
              <ListItem>  
               <NextLink href='/aboutus' passHref>
                <Link>  
                  <Typography > 
                     About us
                  </Typography>
                </Link>
               </NextLink>
              </ListItem>  

              <ListItem>  
               <NextLink href='/contactus' passHref>
                <Link>  
                  <Typography > 
                  Contact us
                  </Typography>
                </Link>
               </NextLink>
              </ListItem>  

              </List>
            </Drawer>
          </div> 
           
        <Grid item xs>
          
          <div className={classes.searchSection}>
           <form onSubmit={submitHandler} className={classes.searchForm}>
            <Grid container>

                <Grid xs={11}>
                 <InputBase
                  name="query"
                  className={classes.searchInput}
                  placeholder="Search products"
                  onChange={queryChangeHandler}
                 />
                </Grid>
                <Grid xs={1}>
                <IconButton
                  type="submit"
                  className={classes.iconButton}
                  aria-label="search"
                >
                  <SearchIcon />
                </IconButton>
                </Grid>
              
            </Grid>

           </form>
          </div>
            </Grid>

         <Grid item xs={4} alignContent='right'>
          <Box display="flex" justifyContent="flex-end" sx={{paddingRight:"12px"}}>

            <div>
              {/* <Switch
                checked={darkMode}
                onChange={darkModeChangeHandler}
              ></Switch> */}
              <NextLink href="/cart" passHref>
                <Link>
                  <Typography component="span" >
                    {cart.cartItems.length > 0 ? (
                      <Badge
                        color="secondary"
                        badgeContent={cart.cartItems.length}
                      >
                        Cart
                      </Badge>
                    ) : (
                      <ShoppingCartRoundedIcon 
                        sx={{marginTop:"11px",
                          // backgroundColor:"#FF730E",
                          borderRadius:"100px",
                          // padding:'2px',
                          // margin:'0.4rem'
                        
                        }}/>
                      )}
                  </Typography>
                </Link>
              </NextLink>
              {userInfo ? (
                <>
                  <Button
                    aria-controls="simple-menu"
                    aria-haspopup="true"
                    onClick={loginClickHandler}
                    className={classes.navbarButton}
                  >
                    {userInfo.name}
                  </Button>
                  <Menu
                    id="simple-menu"
                    anchorEl={anchorEl}
                    keepMounted
                    open={Boolean(anchorEl)}
                    onClose={loginMenuCloseHandler}
                  >
                    <MenuItem
                      onClick={(e) => loginMenuCloseHandler(e, '/profile')}
                    >
                      Profile
                    </MenuItem>
                    <MenuItem
                      onClick={(e) =>
                        loginMenuCloseHandler(e, '/order-history')
                      }
                    >
                      Order Hisotry
                    </MenuItem>
                    {userInfo.isAdmin && (
                      <MenuItem
                        onClick={(e) =>
                          loginMenuCloseHandler(e, '/admin/dashboard')
                        }
                      >
                        Admin Dashboard
                      </MenuItem>
                    )}
                    <MenuItem onClick={logoutClickHandler}>Logout</MenuItem>
                  </Menu>
                </>
              ) : (
                <NextLink href="/login" passHref>
                  <Link>
                    <Typography component="span"
                    style={{
                      marginBottom:"1rem"
                    }}
                    >Login</Typography>
                  </Link>
                </NextLink>
              )}
            </div>

            {/* <Mainbutt>
              aaaaaaa
            </Mainbutt> */}

           </Box>  
          </Grid>

            {/* </Grid> */}
          {/* <Grid item xs={12} > */}
            
           {/* <div className={classes.searchSection2} > */}
            {/* <Grid item xs={11} className={classes.searchSection2} >
             <Box sx={{padding:"10px"}}>

              <form onSubmit={submitHandler} className={classes.searchForm} >
                <InputBase
                  name="query"
                  className={classes.searchInput}
                  placeholder="Search products..."
                  onChange={queryChangeHandler}
                />

              </form>
             </Box> 
            </Grid> */}

        
            <Grid item xs={12}>
          
          <div className={classes.searchSection2}>
          <form onSubmit={submitHandler} className={classes.searchForm}>
          <Grid container>

              <Grid xs={11}>
               <InputBase
                name="query"
                className={classes.searchInput}
                placeholder="Search products"
                onChange={queryChangeHandler}
               />
              </Grid>
              <Grid xs={1}>
              <IconButton
                type="submit"
                className={classes.iconButton}
                aria-label="search"
              >
                <SearchIcon />
              </IconButton>
              </Grid>
            
            </Grid>

            </form>
          </div>
          </Grid>
            
           {/* </Grid> */}
          {/* </Grid>  */}
        {/* </Grid>   */}

          {/* </Toolbar> */}
        </Grid>
      </Box>   
 
        <Container className={classes.main}>{children}</Container>
        <footer className={classes.footer}>
          {/* <Typography>All rights reserved. SP MARKETING.</Typography> */}
           <Grid
             container
             direction={{xs:"column", lg:'row'}}
             justifyContent={{xs:'center'}}
             sx={{
              // justifyContent: "flex-start",
              alignItems: "flex-start",
             }}
           >
          <Grid lg={3} md={6} xs={12} sx={{padding:'1rem'}} >
            <Typography className={classes.footertext}> 
              SP MARKETING
            </Typography>
            <Typography>
             Your Trusted Source for Heavy Equipment Machinery in the Philippines
            </Typography>
          </Grid>

          <Grid lg={3} md={6} xs={12} sx={{padding:'1rem'}}>      
            <Typography className={classes.footertext}> 
              Qiuck Links
            </Typography>

              <NextLink href="/" passHref>
               <Link>
                <Typography>
                   Home
                </Typography>
               </Link>
              </NextLink>

              <NextLink href="/aboutus" passHref>
               <Link>
                 <IconButton
                      className={classes.iconButton}
                 >
                    About
                 </IconButton>
               </Link>
              </NextLink> 

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
                  Shop
                </IconButton>
                </Grid>
              
            </Grid>

           </form>
          </div>
  
          <NextLink href='/contactus' passHref>
           <Link>
            <IconButton
                      className={classes.iconButton}         
            >
               Contacts
            </IconButton> 
           </Link>  
          </NextLink>

          </Grid>
       
          <Grid lg={3} md={6} xs={12}sx={{padding:'1rem'}}>
            <Typography className={classes.footertext}> 
              Contact 
            </Typography> 
            <Typography> 
              {/* 63FJ+QUX, Terelay Industrial Estate, Bo. Pittland, Provincial Rd, Cabuyao, Laguna, Philippines */}
              
              {/* Email: contact@senocpointofsalemarketing.com */}
              
              Phone: +63 920 142 7892
              
              Business hours:
              Mondays to Fridays (9:00 am to 6:00pm) Saturday (9:00 am to 3:00pm) Sundays (non-working day)
           
            
            </Typography> 
          </Grid>
          <Grid lg={3} md={6} xs={12} sx={{padding:'1rem'}}>

            <Typography>
               Subscribe To Our Email
            </Typography>
            <Typography className={classes.footertext}> 
              For Latest News & Updates
            </Typography>
            <Mytextfield 
            style={{
              marginLeft:'1rem',
              marginRight:'1rem',
            }}
            >

            </Mytextfield> 
            <Button 
             style={{
              //  backgroundColor:'#ec504a',
              backgroundColor:"#FF730E",

               color:"white",
               marginTop:'0.5rem',
               borderRadius:'200px',
              //  fontSize:'1'
             }} >
              SUBSCRIBE
            </Button>
          </Grid>
         </Grid>
        </footer>
      </ThemeProvider>
    </div>
  );
}
