import { Fragment, useState, useEffect } from "react";
import classes from "./Layout.module.css";
import MainNavigation from "../mainNavigation/MainNavigation";


const Layout = (props) => {
  const [playerEntryFormRendered, setPlayerEntryFormRendered] = useState(false);
  const [pieceEntryFormRendered, setPieceEntryFormRendered] = useState(false);
  const [instrumentEntryFormRendered, setInstrumentEntryFormRendered] =
    useState(false);

  // const playerEntryClicked = () => {
  //   setPlayerEntryFormRendered(true);
  //   props.modalCloseHandler(false);
  // };

  // const pieceEntryClicked = () => {
  //   setPieceEntryFormRendered(true);
  //   props.modalCloseHandler(false);

  // };

  // const instrumentEntryClicked = () => {
  //   setInstrumentEntryFormRendered(true);
  //   props.modalCloseHandler(false);

  // };

  // const closeModal = () => {
  //   setPlayerEntryFormRendered(false);
  //   setPieceEntryFormRendered(false);
  //   setInstrumentEntryFormRendered(false);
  //   props.modalCloseHandler(true);

  // };

  return (
    <Fragment>
      <MainNavigation
        // playerEntryClicked={playerEntryClicked}
        // pieceEntryClicked={pieceEntryClicked}
        // instrumentEntryClicked={instrumentEntryClicked}
        // modalChange={playerEntryFormRendered}
      />
      {/* {playerEntryFormRendered && <PlayerEntry closeModal={closeModal} />}
      {pieceEntryFormRendered && <PieceEntry closeModal={closeModal} />}
      {instrumentEntryFormRendered && (
        <InstrumentEntry closeModal={closeModal} />
      )} */}

      <main className={classes.main}>{props.children}</main>
    </Fragment>
  );
};

export default Layout;
