import Information from "./Information.jsx";
import Field from "./Field.jsx";

const GameLayout = ({ field, isDraw, currentPlayer, isGameEnded, handleClick }) => {
  return (
    <>
      <Information isDraw={isDraw} currentPlayer={currentPlayer} isGameEnded={isGameEnded} />
      <Field field={field} currentPlayer={currentPlayer} handleClick={handleClick} />
    </>
  );
};

export default GameLayout;
