import React from "react";
import styles from "./LearnMore.module.css";

function Compatability() {
  return (
    <div className={styles.compatability_container}>
      <p>Connectivity and Compatibility:</p>
      <br />
      <ul>
        <li>Wi-Fi: IEEE 802.11ac for high-speed wireless connectivity</li>
        <li>Bluetooth: Bluetooth 5.0 for connecting to compatible devices</li>
        <li>
          Smart Home Integration: Compatibility with major smart home platforms
          for seamless automation and control
        </li>
      </ul>
    </div>
  );
}

export default Compatability;
