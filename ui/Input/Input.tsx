import { FC } from "react";
import classNames from "classnames";
import { InputProps } from "./Input.types";
import styles from "./Input.module.scss";

export const Input: FC<InputProps> = ({ label, error, ...rest }) => {
  return (
    <label className={classNames(styles.container, error && styles.error)}>
      <div className={styles.header}>
        <p className={styles.label}>{label}</p>
        {error && <p className={styles.errorText}>{error}</p>}
      </div>
      <input className={styles.input} {...rest} />
    </label>
  );
};
