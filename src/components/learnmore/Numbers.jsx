import React from "react";
import styles from "./LearnMore.module.css";

function Numbers() {
  return (
    <>
      {" "}
      <div className={styles.card}>
        <p className={styles.card_header}>
          {" "}
          <ul>
            <li>99% Task Accuracy assured</li>
          </ul>{" "}
        </p>
        <p className={styles.card_text}>
          Using AiBot guarantees up to a 99% accuracy rate during task
          completion
        </p>
      </div>
      <div className={styles.card}>
        <p className={styles.card_header}>
          {" "}
          <ul>
            <li>160% Efficiency proved</li>
          </ul>{" "}
        </p>
        <p className={styles.card_text}>
          With faster and more efficicient work completion AiBot guarantees youa
          160% profit boost over competing models.
        </p>
      </div>
    </>
  );
}

export default Numbers;
