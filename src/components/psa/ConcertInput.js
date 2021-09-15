import styles from "./ConcertInput.module.css";

const ConcertInput = (props) => {
  return (
    <div className={styles.outerContainer}>
      <h2 className={styles.title}>{props.title}</h2>
      <div className={styles.radioButtonsDiv}>
        <div>
          <label>Accept</label>
          <input type="radio" />
        </div>
        <div>
          <label>Decline</label>
          <input type="radio" />
        </div>
      </div>
    </div>
  );
};

export default ConcertInput;
