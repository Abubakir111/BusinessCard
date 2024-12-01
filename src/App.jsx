import React from 'react';
import { DarkCard } from './components/DarkCard/DarkCard';
import styles from './App.module.css';

function App() {
  const photo = 'https://placehold.co/400x400';

  return (
    <div className={styles.container}>
      <div className={styles.content}>
        <DarkCard photo={photo} />
      </div>
    </div>
  );
}

export default App;