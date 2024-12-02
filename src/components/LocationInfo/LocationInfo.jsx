import React from 'react';
import { FaMapMarkerAlt, FaLaptopHouse } from 'react-icons/fa';
import styles from './LocationInfo.module.css';

export const LocationInfo = ({ location, workFormat, theme = 'dark' }) => {
  const textColorClass = theme === 'light' ? styles.light : styles.dark;

  return (
    <div className={styles.container}>
      <a href='https://www.google.com/maps/place/Bishkek/' target='_blank' rel='noopener noreferrer'>
        <div className={`${styles.item} ${textColorClass}`}>
          <FaMapMarkerAlt />
          <span>{location}</span>
        </div>
      </a>
      <div className={`${styles.item} ${textColorClass}`}>
        <FaLaptopHouse />
        <span>{workFormat}</span>
      </div>
    </div>
  );
};
