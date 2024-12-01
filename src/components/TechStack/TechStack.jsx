import React from 'react';
import styles from './TechStack.module.css';

export const TechStack = ({ skills, theme = 'dark' }) => {
  const skillClass = theme === 'light' ? styles.skillLight : styles.skillDark;
  
  return (
    <div className={styles.container}>
      <h2 className={styles.title}>Tech Stack</h2>
      <div className={styles.skills}>
        {skills.map((skill, index) => (
          <span 
            key={index}
            className={`${styles.skill} ${skillClass}`}
          >
            {skill}
          </span>
        ))}
      </div>
    </div>
  );
};