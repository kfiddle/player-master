import styles from "./PSA.module.css";

const PSA = (props) => {
  return (
    <div className={styles.outerContainer}>
      <div className={styles.textDiv}>
        <p>
          Dear so-and-so, this form will serve as your Personal Service
          Agreement, (PSA). Below is a listing of all the services you are being
          offered by the Erie Philharmonic for the 2022-23 season, as of April
          22, 2022.
        </p>
        As per the
        <h2 className={styles.masterAgreement}>
          <a>Master Agreement</a>
        </h2>
        , Article III(d), you must accept or decline these services no later
        than June 30th of this year. Please check one of the boxes next to EACH
        service listed below, indicating whether you intend to accept or decline
        it. Once each service has been marked, click Submit to enter your
        responses. Although you will be able to view your responses, you will
        not be able to amend this form after June 30th.
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
        <div>
          <h3>Pops 1</h3>
          <div>
            <label>Accept</label>
            <input type="radio" />
          </div>

          <div>
            <label>Decline</label>
            <input type="radio" />
          </div>
        </div>
        <div>
          <h3>Messiah</h3>
        </div>
        <div>
          <h3>Sym 1</h3>
        </div>
        <div>
          <h3>Pops 2</h3>
        </div>
      </form>
    </div>
  );
};

export default PSA;
