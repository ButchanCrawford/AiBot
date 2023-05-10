import React from "react";
import styles from "./Hero.module.css";
import { BsFillArrowUpRightCircleFill } from "react-icons/bs";

function Hero() {
  return (
    <>
      <div className={styles.hero_container}>
        <div className={styles.hero}>
          <div className={styles.left}>
            <div>
              <p>ROBOTICS</p>
              <p>FOR FASTER &</p>
              <p>BETTER SERVICE</p>
            </div>
            <p className={styles.hero_details}>
              Perform multiple function in dynamic environments both indoors and
              outdoors. Specifically designed for public places such as
              airports, hospitals, malls and industrial parks.
            </p>
            <div className={styles.buttons_container}>
              <button>
                SERVICES <BsFillArrowUpRightCircleFill />
              </button>
              <button>
                LEARN MORE <BsFillArrowUpRightCircleFill />
              </button>
            </div>
          </div>

          <div className={styles.right}>
            <img src="https://tinyurl.com/y3kwsf8p" alt="robot" />
          </div>
        </div>
      </div>
    </>
  );
}

export default Hero;
