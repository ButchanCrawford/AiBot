import React from "react";
import styles from "./LearnMore.module.css";
import { BsFillArrowUpRightCircleFill } from "react-icons/bs";
import { useState } from "react";
import Numbers from "./Numbers";
import Compatability from "./Compatability";

function LearnMore() {
  const [currentTab, setCurrentTab] = useState({
    numbers: true,
    compatability: false,
  });

  function onSelectForm(event) {
    const currentForm = event.target.id;

    switch (currentForm) {
      case "numbers":
        setCurrentTab((prevState) => {
          const ps = { ...prevState };

          ps.numbers = true;
          ps.compatability = false;

          return ps;
        });
        break;
      case "compatability":
        setCurrentTab((prevState) => {
          const ps = { ...prevState };

          ps.numbers = false;
          ps.compatability = true;

          return ps;
        });
        break;

      default:
        setCurrentTab((prevState) => {
          const ps = { ...prevState };

          ps.numbers = true;
          ps.compatability = false;

          return ps;
        });
    }
  }

  return (
    <>
      <div className={styles.learn_container}>
        <div className={styles.left}>
          <div>
            <p>HIGH PROFIENCY </p>
            <p>MEETS WITH</p>
            <p>FASTER SERVICE</p>
            <p>EVERY TIME</p>
          </div>
        </div>
        <div className={styles.right}>
          <div>
            <img
              src="https://cdn.midjourney.com/6831970b-bfda-4e58-b179-d28347397709/0_1.png"
              alt=""
            />
            <p>
              Performs multiple functions in dynamic environments both indoors
              and outdoors. Specifically designed for public places such as
              airports , hospitals , malls and parks.
            </p>
          </div>

          <div className={styles.details}>
            <div className={styles.selection_menu}>
              <p id="numbers" onClick={onSelectForm}>
                THE NUMBERS
              </p>
              <p id="compatability" onClick={onSelectForm}>
                COMPATABILITY
              </p>
            </div>
            <div className={styles.render_container}>
              {currentTab.numbers && <Numbers />}
              {currentTab.compatability && <Compatability />}
            </div>
            <button>
              <div>
                Learn More <div></div> <BsFillArrowUpRightCircleFill />
              </div>
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default LearnMore;
