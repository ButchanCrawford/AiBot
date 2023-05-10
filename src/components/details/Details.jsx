import React from "react";
import styles from "./Details.module.css";
import { useState } from "react";
import Description from "./Description";
import Specifications from "./Specifications";
import Feature from "./Feature";

function Details() {
  const [currentTab, setCurrentTab] = useState({
    description: false,
    features: true,
    specification: false,
  });

  function onSelectForm(event) {
    const currentForm = event.target.id;

    switch (currentForm) {
      case "description":
        setCurrentTab((prevState) => {
          const ps = { ...prevState };

          ps.description = true;
          ps.features = false;
          ps.specification = false;

          return ps;
        });
        break;
      case "features":
        setCurrentTab((prevState) => {
          const ps = { ...prevState };

          ps.description = false;
          ps.features = true;
          ps.specification = false;

          return ps;
        });
        break;
      case "specification":
        setCurrentTab((prevState) => {
          const ps = { ...prevState };

          ps.description = false;
          ps.features = false;
          ps.specification = true;

          return ps;
        });
        break;

      default:
        setCurrentTab((prevState) => {
          const ps = { ...prevState };

          ps.description = true;
          ps.features = false;
          ps.specification = false;

          return ps;
        });
    }
  }
  return (
    <>
      <div className={styles.details_container}>
        <div className={styles.details}>
          <div className={styles.selection_menu}>
            <p id="features" onClick={onSelectForm}>
              FEATURES
            </p>
            <p id="description" onClick={onSelectForm}>
              DESCRIPTION
            </p>
            <p id="specification" onClick={onSelectForm}>
              SPECIFICATION
            </p>
          </div>
          <div className={styles.render_container}>
            {currentTab.description && <Description />}
            {currentTab.features && <Feature />}
            {currentTab.specification && <Specifications />}
          </div>
        </div>
      </div>
    </>
  );
}

export default Details;
