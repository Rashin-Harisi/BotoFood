import Choice from "../Icons/Choice";
import Clock from "../Icons/Clock";
import Fast from "../Icons/Fast";
import Food from "../Icons/Food";
import styles from "./Attributes.module.css";

function Attributes() {
  return (
    <div className={styles.container}>
      <h3>Why us?</h3>
      <div className={styles.subContainer}>
        <div>
          <Fast />
          <p>Fast</p>
        </div>
        <div>
          <Food />
          <p>Best Restaurants</p>
        </div>
        <div>
          <Choice />
          <p>Your Choice</p>
        </div>
        <div>
          <Clock />
          <p>24-7</p>
        </div>
      </div>
    </div>
  );
}

export default Attributes;