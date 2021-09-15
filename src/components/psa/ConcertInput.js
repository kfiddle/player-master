import styles from "./ConcertInput.module.css";

const ConcertInput = (props) => {
  return (
    <div className={styles.outerContainer}>
      <h2 className={styles.title}>{props.title}</h2>
      <div className={styles.radioButtonsDiv}>
        <div>
          <label className={styles.buttonLabel}>Accept</label>
          <input type="radio" />
        </div>
        <div>
          <label className={styles.buttonLabel}>Decline</label>
          <input type="radio" />
        </div>
      </div>
    </div>
  );
};

export default ConcertInput;
