import FieldLayout from "./FieldLayout.jsx";
import PropTypes from "prop-types";

const Field = ({ field, makeMove }) => {
  return <FieldLayout field={field} makeMove={makeMove} />;
};

Field.propTypes = {
  field: PropTypes.string,
  makeMove: PropTypes.func,
};

export default Field;
