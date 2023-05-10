import React from "react";
import styles from "./Details.module.css";

function Features() {
  return (
    <div>
      <p className={styles.features_header}>MAKE WORK FASTER AND EASIER</p>

      <div className={styles.cards_container}>
        <div className={styles.details_card}>
          <img
            src="https://images.pexels.com/photos/3184292/pexels-photo-3184292.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            alt="productive"
          />
          <p className={styles.card_header}>60% More </p>
          <p className={styles.card_header}>in Productivity</p>
          <p>
            Performs multiple functions in dynamic environments boot indoors and
            outdoors.
          </p>
        </div>
        <span></span>
        <div className={styles.details_card}>
          <img
            src="https://images.pexels.com/photos/355915/pexels-photo-355915.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            alt="time"
          />
          <p className={styles.card_header}>30% Less </p>
          <p className={styles.card_header}>Time Consuming</p>
          <p>
            {" "}
            Performs multiple functions in dynamic environments boot indoors and
            outdoors.
          </p>
        </div>
        <span></span>
        <div className={styles.details_card}>
          <img
            src="https://images.pexels.com/photos/262438/pexels-photo-262438.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            alt="target"
          />
          <p className={styles.card_header}>99% Task </p>
          <p className={styles.card_header}>Accuracy Assured</p>
          <p>
            {" "}
            Performs multiple functions in dynamic environments boot indoors and
            outdoors.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Features;
