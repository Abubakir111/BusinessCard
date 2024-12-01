import React from 'react';
import { ContactInfo } from '../ContactInfo/ContactInfo';
import { Portfolio } from '../Portfolio/Portfolio';
import styles from './MinimalistCard.module.css';

export const MinimalistCard = ({ photo }) => {
  return (
    <div className={styles.card}>
      <div className={styles.header}>
        <img src={photo} alt="Profile" className={styles.photo} />
        <div>
          <h1 className={styles.title}>Frontend Developer</h1>
          <div className={styles.accent}></div>
        </div>
      </div>
      
      <ContactInfo 
        email="bakirbazarkul16@gmail.com"
        phone="+996 700 394 180"
        github="github.ru"
        theme="dark"
      />
      
      <Portfolio 
        projects={['Fanat.ks', 'Admin.ks', 'Jop.ks']}
        theme="dark"
      />
    </div>
  );
};