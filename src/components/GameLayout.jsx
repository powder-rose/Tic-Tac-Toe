import Information from "./Information.jsx";
import Field from "./Field.jsx";
import PropTypes from "prop-types";

const GameLayout = ({ field, isDraw, currentPlayer, isGameEnded, makeMove }) => {
  return (
    <>
      <Information isDraw={isDraw} currentPlayer={currentPlayer} isGameEnded={isGameEnded} />
      <Field field={field} currentPlayer={currentPlayer} makeMove={makeMove} />
    </>
  );
};

GameLayout.propTypes = {
  field: PropTypes.string,
  makeMove: PropTypes.func,
  currentPlayer: PropTypes.string,
  isGameEnded: PropTypes.bool,
  isDraw: PropTypes.bool,
};

export default GameLayout;
