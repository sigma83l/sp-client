import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import styles from '../styles/home.module.css';
import useStyles from '../components/styles1';


export default function MediaCard() { const classes = useStyles();
  return (
    <div className={styles.square}>
     <div className={styles.content}>
      <img
        className={styles.transition}
        // component="img"
        src="../public/images/banner1.jpg"
        // title={service.name}
        style={{ width: '200px', height: '200px' }}
      ></img>
     </div>
   </div>
  );
}
