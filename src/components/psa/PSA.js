import { useRef, useEffect, useState } from "react";

import GetAList from "../helperFunctions/GetAList";
import PushBasic from '../helperFunctions/pushFunctions/PushBasic';
import ConcertInput from "./ConcertInput";
import styles from "./PSA.module.css";

const PSA = (props) => {
  const [gigsWithAnswers, setGigsWithAnswers] = useState([]);
  const [listOfPlayers, setListOfPlayers] = useState([]);
  const [chosenPlayer, setChosenPlayer] = useState(null);

  useEffect(async () => {
    const gigsResponseList = await GetAList("get-all-performances");
    let listToFill = [];
    for (let performance of gigsResponseList) {
      let answerState = false;
      listToFill.push({ performance, answerState });
    }

    setGigsWithAnswers(listToFill);

    const allContracts = await GetAList("get-all-contracted-players");
    setListOfPlayers(allContracts);
  }, []);

  const putStateInList = (performance, acceptOrNot) => {
    let tempList = gigsWithAnswers;
    for (let gigObject of tempList) {
      if (gigObject.performance === performance) {
        gigObject.answerState = acceptOrNot;
      }
    }
    setGigsWithAnswers(tempList);
  };

  const displayableConcerts = gigsWithAnswers.map((gigAnswer) => (
    <ConcertInput
      performance={gigAnswer.performance}
      label={gigAnswer.performance.title}
      key={gigAnswer.performance.id}
      putStateInList={putStateInList}
    />
  ));

  const choosePlayer = (player) => {
    setChosenPlayer(player);
  };

  const displayablePlayers = listOfPlayers.map((player) => (
    <div
      key={player.id}
      style={{ margin: "2rem", cursor: "pointer" }}
      onClick={() => choosePlayer(player)}
    >
      <h2>{player.lastName}</h2>
    </div>
  ));

  const showAnswers = async (event) => {
    event.preventDefault();
    console.log(gigsWithAnswers);

    const playerAndAnswersObject = {
      player: chosenPlayer.id,
      availablePerformances: gigsWithAnswers,
    };

    const sendItUp = await PushBasic(playerAndAnswersObject, 'set-psa') 
  };

  return (
    <div className={styles.outerContainer}>
      <div className={styles.outerTextContainer}>
        <div className={styles.psaText}>
          Dear so-and-so, this form will serve as your Personal Service
          Agreement, (PSA). Below is a listing of all the services you are being
          offered by the Erie Philharmonic for the 2022-23 season, as of April
          22, 2022. As per the{" "}
          <h2 className={styles.masterAgreement}>
            <a>Master Agreement</a>
          </h2>{" "}
          , Article III(d), you must accept or decline these services no later
          than June 30th of this year. Please check one of the boxes next to
          EACH service listed below, indicating whether you intend to accept or
          decline it. Once each service has been marked, click Submit to enter
          your responses. Although you will be able to view your responses, you
          will not be able to amend this form after June 30th. For the 2022-23
          season, the Erie Philharmonic is currently able to offer you a total
          of 46 services at the position of Concertmaster. You will be paid as
          per the
          <h2 className={styles.masterAgreement}>
            <a>Master Agreement</a>
          </h2>
          , Article IV(b)
        </div>
      </div>

      <form className={styles.psaForm}>
        {displayableConcerts}
        <button className={styles.submitButton} onClick={showAnswers}>
          Submit
        </button>
      </form>
      <div style={{ marginLeft: "12rem" }}>{displayablePlayers}</div>
    </div>
  );
};

export default PSA;
