import React from 'react';
import { FaGithub, FaEnvelope, FaPhone } from 'react-icons/fa';
import styles from './ContactInfo.module.css';

export const ContactInfo = ({ email, phone, github, theme = 'dark' }) => {
  const textColorClass = theme === 'light' ? styles.light : styles.dark;
  
  return (
    <div className={styles.container}>
      <div className={`${styles.item} ${textColorClass}`}>
        <FaEnvelope />
        <span>{email}</span>
      </div>
      <div className={`${styles.item} ${textColorClass}`}>
        <FaPhone />
        <span>{phone}</span>
      </div>
      <div className={`${styles.item} ${textColorClass}`}>
        <FaGithub />
        <span>{github}</span>
      </div>
    </div>
  );
};