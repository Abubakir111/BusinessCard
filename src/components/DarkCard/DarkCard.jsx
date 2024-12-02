import React from 'react';
import { ContactInfo } from '../ContactInfo/ContactInfo';
import { Portfolio } from '../Portfolio/Portfolio';
import { LocationInfo } from '../LocationInfo/LocationInfo';
import { TechStack } from '../TechStack/TechStack';
import styles from './DarkCard.module.css';

export const DarkCard = ({ photo }) => {
  const skills = [
    'React.js',
    'Redux Toolkit',
    'JavaScript',
    'Git',
    'REST API',
    'Figma',
    'Cross-browser',
    'Responsive Design'
  ];
  const projects = [
    { name: 'Fanat.kg', link: 'https://fanat.kg/' },
    { name: 'Cheatfusion', link: 'https://cheatfusion.store/' }
  ];
  return (
    <div className={styles.card}>
      <div className={styles.header}>
        <h1 className={styles.name}>Bakir</h1>
        <h2 className={styles.title}>Frontend Developer</h2>
      </div>

      <img src={photo} alt='Profile' className={styles.photo} />

      <div>
        <ContactInfo
          email='bakirbazarkul16@gmail.com'
          phone='+996 700 394 180'
          github='github.ru'
          theme='dark'
          userGithub='https://github.com/Abubakir111'
        />
      </div>

      <div className={styles.divider}></div>

      <LocationInfo location='Bishkek' workFormat='Remote Work' theme='dark' />

      <div className={styles.divider}></div>

      <TechStack skills={skills} theme='dark' />

      <div className={styles.divider}></div>

      <Portfolio projects={projects} theme='dark' />
    </div>
  );
};
