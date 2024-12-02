import React from 'react';
import { DarkCard } from './components/DarkCard/DarkCard';
import styles from './App.module.css';
import isMy from '../src/images/isMy.jpg';

function App() {
  // const photo = 'https://placehold.co/400x400';

  return (
    <div className={styles.container}>
      <div className={styles.content}>
        <DarkCard photo={isMy} />
      </div>
    </div>
  );
}

export default App;
