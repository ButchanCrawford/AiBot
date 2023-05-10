import React from "react";
import styles from "./Footer.module.css";
import { BsFillArrowRightCircleFill } from "react-icons/bs";
import { BsGithub, BsLinkedin, BsFillEnvelopeFill } from "react-icons/bs";
import { IoIosMail } from "react-icons/io";

function Footer() {
  return (
    <>
      <div className={styles.footer_container}>
        <div className={styles.socials}>
          <p>
            <span>Ai</span>Bot
          </p>
          <p>Butchan Crawford</p>
          <div>
            <span>
              <a href="https://github.com/ButchanCrawford" target="_blank">
                <BsGithub size={24} />
              </a>
            </span>
            <span>
              <a href="https://www.linkedin.com/in/bdkc/" target="_blank">
                <BsLinkedin size={24} />
              </a>
            </span>
            <span>
              {" "}
              <a href="mailto:butchancrawf@gmail.com" target="_blank">
                <BsFillEnvelopeFill size={24} />
              </a>
            </span>
          </div>
        </div>
        <div className={styles.lower}>
          <div className={styles.lower_left}>
            <div className={styles.service}>
              <h4>Service</h4>
              <p>Design</p>
              <p>Build</p>
              <p>Distribute</p>
            </div>
            <div className={styles.manufacturer}>
              <h4>Manufacturer</h4>
              <p>Machineries</p>
              <p>Optics</p>
              <p>Robots</p>
            </div>
          </div>
          <div className={styles.lower_right}>
            <p>NEWSLETTER</p>
            <div className={styles.form_container}>
              <div>
                <input type="email" placeholder="email@email.com" />
                <button>
                  <BsFillArrowRightCircleFill size={23} />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Footer;
