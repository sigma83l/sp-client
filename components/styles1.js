import { makeStyles } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  dropdown: {
    position: 'relative',
    display: 'inline-block',
  },

  dropdown_content: {
    display: 'none',
    position: 'absolute',
    backgroundColor: '#f9f9f9',
    minWidth: '160px',
    boxShadow: '0px 8px 16px 0px rgba(0,0,0,0.2)',
    padding: '12px 16px',
    // z-index: 1,
  },

  dropdown_hover: {
    display: 'block',
  },

  error: {
    color: '#f04040',
  },

  info: {
    color: '#334e71',
  },
  
  success: {
    color: '#648723',
  },

  alignTitleContent: {
    width: '100vw',
    // width:'1150px',
    height: 100,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 1,
    marginBottom: 1,

    //  margin: auto 0;
  },

  alignItemsAndJustifyContent: {
    width: '100%',
    // width:'1150px',
    height: 400,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 5,
    marginBottom: 5,

    //  margin: auto 0;
  },
  /* Next & previous buttons */
  prev: {
    cursor: 'pointer',
    position: 'absolute',
    top: '50%',
    width: 'auto',
    padding: '16px',
    marginTop: '-22px',
    left: '20px',
    color: 'white',
    fontWeight: 'bold',
    fontSize: 18,
    transition: '0.6s ease',
    borderRadius: '0 3px 3px 0',
    // user-select: 'none',
  },
  next: {
    cursor: 'pointer',
    position: 'absolute',
    top: '50%',
    width: 'auto',
    padding: '16px',
    marginTop: '-22px',
    right: '20px',
    color: 'white',
    fontWeight: 'bold',
    fontSize: 18,
    transition: '0.6s ease',
    borderRadius: '0 3px 3px 0',
    // user-select: 'none',
  },



  prev2: {
    cursor: 'pointer',
    position: 'absolute',
    // top: '50%',
    width: 'auto',
    padding: '16px',
    marginTop: '-22px',
    left: '20px',
    color: 'white',
    fontWeight: 'bold',
    fontSize: 18,
    transition: '0.6s ease',
    borderRadius: '0 3px 3px 0',
    // user-select: 'none',
  },
  next2: {
    cursor: 'pointer',
    position: 'absolute',
    // top: '50%',
    width: 'auto',
    padding: '16px',
    marginTop: '-22px',
    right: '20px',
    color: 'white',
    fontWeight: 'bold',
    fontSize: 18,
    transition: '0.6s ease',
    borderRadius: '0 3px 3px 0',
    // user-select: 'none',
  },

  numbertext: {
    color: '#f2f2f2',
    fontSize: '12',
    padding: '8 12',
    position: 'absolute',
    top: 0,
  },

  /* Position the image container (needed to position the left and right arrows) */
  slideshowgallery_container: {
    maxWidth: '100%',
    position: 'relative',
    boxShadow: '2px 8px 16px 2px rgba(0, 0, 0, 0.4)',
  },

  slideshow_container: {
    maxWidth: '100%',
    // height: '600px',
    position: 'relative',
    // position: 'fixed',
    margin: '70px auto',
    // margin: 0,
    boxShadow: '2px 8px 16px 2px rgba(0, 0, 0, 0.4)',
  },
  /* Container for image text */
  caption_container: {
    textAlign: 'center',
    backgroundColor: '#222',
    padding: '2px 16px',
    color: 'white',
  },

  demo_cursor: {
    cursor: 'pointer',
    opacity: '0.6',
  },

  column: {
    float: 'left',
    width: '16.66%',
  },

  row: {
    content: '',
    display: 'table',
    clear: 'both',
    marginLeft: '20px',
    marginRight: '20px',
    textAlign: 'center',
  },

  center: {
    display: 'block',
    marginLeft: 'auto',
    marginRight: 'auto',
    // width: '50%',
  },

  mySlides: {
    display: 'none',
  },
  /* The dots/bullets/indicators */
  dot: {
    cursor: 'pointer',
    height: '15px',
    width: '15px',
    margin: '0 2px ',
    backgroundColor: '#bbb',
    borderRadius: '50%',
    display: 'inline-block',
    transition: 'background-color 0.6s ease',
  },
  dot_active: {
    cursor: 'pointer',
    height: '15px',
    width: '15px',
    margin: '0 3px ',
    backgroundColor: '#717171',
    borderRadius: '50%',
    display: 'inline-block',
    transition: 'background-color 0.6s ease',
  },

  // dot:hover: {
  //   background-color: '#717171',
  // },

  appbar: {
    // backgroundColor: '#203040',
    zIndex:200,

    marginBottom: '60px',
    '& a': {
      color: '#ffffff',
      marginLeft: 10,
    },
  },
  brand: {
    fontWeight: 'bold',
    fontSize: '1.5rem',
  },
  grow: {
    flexGrow: 1,
  },
  main: {
    // maxWidth: '95vw',
    minWidth: '95vw',
    minHeight: '80vh',
    marginLeft: 0,
    marginRight: 0,
    // marginTop: 60,
    textAlign: 'center',
  },
  footer: {
    backgroundColor: '#9090CC',
    height: 50,
    marginTop: 10,
    textAlign: 'center',
    verticalAlign: 'middle',
  },
  img: {
    margin: 40,
  },
  section: {
    marginTop: 17,
    marginBottom: 10,
  },
  card: {
    maxWidth: 300,
    margin: 'auto',
    transition: '0.3s',
    boxShadow: '0 8px 40px -12px rgba(0,0,0,0.3)',
    '&:hover': {
      boxShadow: '0 16px 70px -12.125px rgba(0,0,0,0.3)',
    },
  },
  container: {
    direction: 'rtl',
    marginTop: 70,
    marginBottom: 10,
  },

  form: {
    direction: 'rtl',
    width: '100%',
    maxWidth: 800,
    margin: '0 auto',
  },
  navbarButton: {
    color: '#ffffff',
    textTransform: 'initial',
  },
  transparentBackgroud: {
    direction: 'rtl',
    backgroundColor: 'transparent',
  },

  fullWidth: {
    width: '100%',
  },
  reviewForm: {
    maxWidth: 800,
    width: '100%',
  },
  reviewItem: {
    marginRight: '1rem',
    borderRight: '1px #808080 solid',
    paddingRight: '1rem',
  },
  toolbar: {
    justifyContent: 'space-between',
  },
  menuButton: { padding: 0 },
  mt1: { marginTop: '1rem' },
  // search
  searchSection: {
    display: 'none',
    [theme.breakpoints.up('md')]: {
      display: 'flex',
    },
  },
  searchForm: {
    border: '1px solid #ffffff',
    backgroundColor: '#ffffff',
    borderRadius: 5,
  },
  searchInput: {
    paddingLeft: 5,
    color: '#000000',
    '& ::placeholder': {
      color: '#606060',
    },
  },
  iconButton: {
    backgroundColor: '#f8c040',
    padding: 5,
    borderRadius: '0 5px 5px 0',
    '& span': {
      color: '#000000',
    },
  },
  sort: {
    marginRight: 5,
  },

  fullContainer: { height: '100vh' },
  mapInputBox: {
    position: 'absolute',
    display: 'flex',
    left: 0,
    right: 0,
    margin: '10px auto',
    width: 300,
    height: 40,
    '& input': {
      width: 250,
    },
  },
}));
export default useStyles;
