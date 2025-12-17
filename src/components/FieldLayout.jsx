import styles from "./Field.module.css";
import PropTypes from "prop-types";

const FieldLayout = ({ field, makeMove }) => {
  return (
    <div className={styles.field}>
      {field.map((element, index) => {
        return (
          <div onClick={() => makeMove(index)} className={styles["field-item"]}>
            {element}
          </div>
        );
      })}
    </div>
  );
};

FieldLayout.propTypes = {
  field: PropTypes.array,
  makeMove: PropTypes.func,
};

export default FieldLayout;
