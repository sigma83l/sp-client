import * as React from 'react';
import styles from '../styles/home.module.css';
import { Image } from 'next/image'; 


export default function MediaCard() { 
  return (
    <div className={styles.square}>
     <div className={styles.content}>
      <Image
        className={styles.transition}
        alt="wdw"
        // component="img"
        src="../public/images/banner1.jpg"
        // title={service.name}
        style={{ width: '200px', height: '200px' }}
      ></Image>
     </div>
   </div>
  );
}
