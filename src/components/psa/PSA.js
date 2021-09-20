import { useRef, useEffect, useState } from "react";

import GetAList from "../helperFunctions/GetAList";
import ConcertInput from "./ConcertInput";
import styles from "./PSA.module.css";

const PSA = (props) => {
  const [gigsList, setGigsList] = useState([]);
  const [gigsWithAnswers, setGigsWithAnswers] = useState([]);

  useEffect(async () => {
    const gigsResponseList = await GetAList("get-all-performances");
    let listToFill = [];
    for (let performance of gigsResponseList) {
      let answerState = [];
      listToFill.push({ performance, answerState });
    }

    setGigsWithAnswers(listToFill);
    setGigsList(gigsResponseList);
  }, []);

  const putStateInList = (performance, state) => {
    console.log(performance, state)
    // let tempList = gigsWithAnswers;
    // for (let gigAndAnswer of tempList) {
    //   if (gigAndAnswer.performance === performance) {
    //     gigAndAnswer.answerState = state;
    //   }
    // }
    // setGigsWithAnswers(tempList);
  };

  const testingMethod = (performance, state) => {
    console.log(performance, state)
  }

  const displayableConcerts = gigsWithAnswers.map((gigAnswer) => (
    <ConcertInput
      performance={gigAnswer.performance}
      label={gigAnswer.performance.title}
      key={gigAnswer.performance.id}
      setInputState={putStateInList}
      testingMethod={testingMethod}
    />
  ));

  const showAnswers = (event) => {
    event.preventDefault();
    console.log(gigsWithAnswers);
  };

  return (
    <div className={styles.outerContainer}>
      <div className={styles.textDiv}>
        <p>
          Dear so-and-so, this form will serve as your Personal Service
          Agreement, (PSA). Below is a listing of all the services you are being
          offered by the Erie Philharmonic for the 2022-23 season, as of April
          22, 2022. As per the </p>
        <h2 className={styles.masterAgreement}>
          <a>Master Agreement</a>
        </h2> <p>
        , Article III(d), you must accept or decline these services no later
        than June 30th of this year. Please check one of the boxes next to EACH
        service listed below, indicating whether you intend to accept or decline
        it. Once each service has been marked, click Submit to enter your
        responses. Although you will be able to view your responses, you will
        not be able to amend this form after June 30th. </p>
        <p>
          For the 2022-23 season, the Erie Philharmonic is currently able to
          offer you a total of 46 services at the position of Concertmaster.
        </p>
        <p>
          You will be paid as per the{" "}
          <h2 className={styles.masterAgreement}>
            <a>Master Agreement</a>
          </h2>
          , Article IV(b)
        </p>
      </div>

      <form className={styles.psaForm}>
        {/* <ConcertInput title="Pops Uno" />
        <ConcertInput title="Messiah" />
        <ConcertInput title="Sym 1" />
        <ConcertInput title="Pops 2" />
        <ConcertInput title="Beat Beethoven" /> */}

        {displayableConcerts}

        <button className={styles.submitButton} onClick={showAnswers}>
          Submit
        </button>
      </form>
    </div>
  );
};

export default PSA;
