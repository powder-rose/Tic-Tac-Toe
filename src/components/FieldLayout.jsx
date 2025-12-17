import styles from "./Field.module.css";

const FieldLayout = ({ field, handleClick }) => {
  return (
    <div className={styles.field}>
      {field.map((element, index) => {
        return (
          <div onClick={() => handleClick(index)} className={styles["field-item"]}>
            {element}
          </div>
        );
      })}
    </div>
  );
};

export default FieldLayout;
