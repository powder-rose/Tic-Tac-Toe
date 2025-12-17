import PropTypes from "prop-types";
import Information from "./Information.jsx";

const InformationLayout = ({ isDraw, currentPlayer, isGameEnded }) => {
  if (isDraw === true) {
    return <h1>Ничья</h1>;
  } else if (isDraw === false && isGameEnded === true) {
    return <h1>{`Победа: ${currentPlayer}`}</h1>;
  } else if (isDraw === false && isGameEnded === false) {
    return <h1>{`Ходит: ${currentPlayer}`}</h1>;
  }
};

InformationLayout.propTypes = {
  isDraw: PropTypes.bool,
  isGameEnded: PropTypes.bool,
  currentPlayer: PropTypes.string,
};

export default InformationLayout;
