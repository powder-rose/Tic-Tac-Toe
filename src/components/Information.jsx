import InformationLayout from "./InformationLayout";
import PropTypes from "prop-types";

const Information = ({ isDraw, currentPlayer, isGameEnded }) => {
  return <InformationLayout isDraw={isDraw} currentPlayer={currentPlayer} isGameEnded={isGameEnded} />;
};

Information.propTypes = {
  field: PropTypes.array,
  isDraw: PropTypes.bool.isRequired,
  isGameEnded: PropTypes.bool,
};

export default Information;
