import { makeStyles } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  navbar: {
    backgroundColor: '#EEEEEE',
    borderRadius:'30px',
    padding:"0.5rem",
    '& a': {
      color: '#303030',
      marginLeft: 11,
    },
  },
  footertext: {
    fontWeight:'bold',
    fontSize:20,
  },
  brand: {
    fontWeight: 'bold',
    fontSize: '1rem',
    // color:"gold"
  },
  grow: {
    flexGrow: 1,
  },
  main: {
    minHeight: '80vh',
  },
  footer: {
    margin: 20,
    marginTop: 50,
    marginBottom: 50,
    borderTop:"3px solid orange",
    textAlign: 'center',
    paddingTop:"1rem",
  },
  section: {
    marginTop: 10,
    marginBottom: 10,
  },
  form: {
    width: '100%',
    maxWidth: 800,
    margin: '0 auto',
  },
  navbarButton: {
    color: '#202020',
    textTransform: 'initial',
  },
  transparentBackgroud: {
    backgroundColor: 'transparent',
  },
  error: {
    color: '#f04040',
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
  menuButton: { 
    padding: 0,
    color:"#202020"
  },
  mt1: { marginTop: '1rem' },
  // search
  searchSection: {
    display: 'none',
    marginTop:"3px",

    [theme.breakpoints.up('sm')]: {
      display: 'flex',
    },
  },
  searchSection2: {
    // display: 'flex',
    [theme.breakpoints.up('sm')]: {
      display: 'none',
    },
  },
  searchForm: {
    // border: '1px solid #ffffff',
    // backgroundColor: '#ffffff',
    borderRadius: 5,
  },
  searchInput: {
    paddingLeft: 10,
    // margin:"10px",
    width:"100%",
    color: '#000000',
    backgroundColor:"lightgray",
    borderRadius:"20px",
    '& ::placeholder': {
      color: '#606060',
    },
  },
  iconButton: {
    // backgroundColor: '#ffffff',
    padding: 5,
    fontSize: 19,
    borderRadius: '0 5px 5px 0',
    '& span': {
      color: '#FF730E',
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
