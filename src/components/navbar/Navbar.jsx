import React from "react";
import styles from "./Navbar.module.css";

function Navbar() {
  return (
    <>
      <header className={styles.navbar}>
        <div>
          <p>Menu</p>
        </div>
        <div>
          <p>
            <span>Ai</span>Bot
          </p>
        </div>
        <div>
          <p>Contact us</p>
        </div>
      </header>
    </>
  );
}

export default Navbar;
