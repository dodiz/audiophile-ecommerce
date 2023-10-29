import { FC } from "react";
import styles from "./Radio.module.scss";
import classNames from "classnames";

type RadioProps = {
  label: string;
  checked: boolean;
  onChange: () => void;
};

export const Radio: FC<RadioProps> = ({ label, checked, onChange }) => {
  return (
    <label
      onClick={onChange}
      className={classNames(styles.container, checked && styles.checked)}
    >
      <div className={styles.radioContainer}>
        <div className={styles.radio} />
      </div>
      <p className={styles.label}>{label}</p>
    </label>
  );
};
