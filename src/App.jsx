import isMy2 from "../src/images/is_my2.jpg";
import styles from "./App.module.css";
import { DarkCard } from "./components/DarkCard/DarkCard";

function App() {
  // const photo = 'https://placehold.co/400x400';

  return (
    <div className={styles.container}>
      <div className={styles.content}>
        <DarkCard photo={isMy2} />
      </div>
    </div>
  );
}

export default App;
