import styles from "./Button.module.css";
import PropTypes from "prop-types";

const RestartButton = ({ setIsDraw, setField, setIsGameEnded, setCurrentPlayer }) => {
  const restart = () => {
    setIsGameEnded(false);
    setCurrentPlayer("X");
    setIsDraw(false);
    setField(["", "", "", "", "", "", "", "", ""]);
  };

  return (
    <button className={styles["restart-btn"]} onClick={() => restart()}>
      Начать сначала
    </button>
  );
};

RestartButton.propTypes = {
  setIsDraw: PropTypes.func,
  setField: PropTypes.func,
  setIsGameEnded: PropTypes.func,
  setCurrentPlayer: PropTypes.func,
};

export default RestartButton;
