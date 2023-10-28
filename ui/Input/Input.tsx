import { FC, useState } from "react";
import classNames from "classnames";
import { InputProps } from "./Input.types";
import styles from "./Input.module.scss";

export const Input: FC<InputProps> = ({
  label,
  onBlur,
  onFocus,
  error,
  ...rest
}) => {
  const [isFocused, setIsFocused] = useState(false);
  return (
    <label className={classNames(styles.group, isFocused && styles.focus)}>
      {label && <h4 className={styles.label}>{label}</h4>}
      <div className={classNames(styles.inputWrapper, error && styles.error)}>
        <input
          onFocus={(e) => {
            setIsFocused(true);
            onFocus && onFocus(e);
          }}
          onBlur={(e) => {
            setIsFocused(false);
            onBlur && onBlur(e);
          }}
          className={styles.input}
          {...rest}
        />
        {error && <p className={styles.errorMessage}>{error}</p>}
      </div>
    </label>
  );
};
