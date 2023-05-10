import React from "react";
import styles from "./Details.module.css";

function Specifications() {
  return (
    <div className={styles.specs}>
      <p className={styles.features_header}>STATE OF THE ART</p>
      <div className={styles.spec_flex}>
        <div className={styles.specs_container}>
          <div className={styles.spec_left}>
            <p>Processing and AI Capabilities:</p>
            <br />
            <ul>
              <li>
                Processor: High-performance AI processor for quick and efficient
                data processing.
              </li>
              <li>
                Artificial Intelligence: Advanced machine learning algorithms
                for adaptive behavior and decision-making.
              </li>
              <li>
                Sensory Perception: Integrated cameras, depth sensors, and
                microphones for environment perception.
              </li>
            </ul>
          </div>
          <div className={styles.spec_right}>
            <p>Security and Privacy:</p>
            <ul>
              <br />

              <li>
                Data Protection: Encryption and secure protocols for
                safeguarding personal information.
              </li>
              <li>
                User Recognition: Facial recognition technology for user
                identification and personalized experiences.
              </li>
              <li>
                Secure Communication: Secure connections for data transmission
                and remote access.
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Specifications;
