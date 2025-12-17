import InformationLayout from "./InformationLayout";

const Information = ({ isDraw, currentPlayer, isGameEnded }) => {
  return <InformationLayout isDraw={isDraw} currentPlayer={currentPlayer} isGameEnded={isGameEnded} />;
};

export default Information;
