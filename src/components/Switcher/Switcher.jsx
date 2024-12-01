import React from 'react';
import styles from './Switcher.module.css';

export const Switcher = ({ selected, onSelect }) => {
  return (
    <div className={styles.container}>
      <button
        onClick={() => onSelect(0)}
        className={`${styles.button} ${selected === 0 ? styles.active : styles.inactive}`}
      >
        Minimalist
      </button>
      <button
        onClick={() => onSelect(1)}
        className={`${styles.button} ${selected === 1 ? styles.active : styles.inactive}`}
      >
        Gradient
      </button>
      <button
        onClick={() => onSelect(2)}
        className={`${styles.button} ${selected === 2 ? styles.active : styles.inactive}`}
      >
        Dark
      </button>
    </div>
  );
};