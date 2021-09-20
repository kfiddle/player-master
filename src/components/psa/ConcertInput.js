import { useState } from "react";

import React from "react";

import styles from "./ConcertInput.module.css";

const ConcertInput = (props) => {
  const [selectedState, setSelectedState] = useState([false, false]);

  const sendUpAnswerState = (whichInput) => {
    whichInput === "accept"
      ? setSelectedState((previous) => [!previous[0], false])
      : setSelectedState((previous) => [false, !previous[1]]);

    props.setInputState(props.performance, selectedState);
    console.log("this one says " + selectedState);
  };

  return (
    <div className={styles.outerContainer}>
      <h2 className={styles.title}>{props.label}</h2>
      <div className={styles.radioButtonsDiv}>
        <div>
          <label className={styles.buttonLabel}>Accept</label>

          <input
            type="radio"
            checked={selectedState[0]}
            onChange={() => {
              sendUpAnswerState("accept");
            }}
          />
        </div>

        <div>
          <label className={styles.buttonLabel}>Decline</label>
          <input
            type="radio"
            checked={selectedState[1]}
            onChange={ () => {
              sendUpAnswerState("decline");
            }}
          />
        </div>
      </div>
    </div>
  );
};

export default ConcertInput;
