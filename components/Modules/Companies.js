import styles from "./Companies.module.css";

import SpaceX from "../Icons/SpaceX";
import Tesla from "../Icons/Tesla";
import Apple from "../Icons/Apple";
import Binance from "../Icons/Binance";

function Companies() {
  return (
    <div className={styles.container}>
      <Apple />
      <SpaceX />
      <Binance />
      <Tesla />
    </div>
  );
}

export default Companies;