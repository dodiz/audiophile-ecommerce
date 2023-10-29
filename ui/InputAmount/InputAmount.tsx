import { FC } from "react";
import { InputAmountProps } from "./InputAmount.types";
import styles from "./InputAmount.module.scss";

export const InputAmount: FC<InputAmountProps> = ({ onChange, value }) => {
  return (
    <div className={styles.container}>
      <div
        className={styles.add}
        onClick={() => value > 1 && onChange(value - 1)}
      >
        -
      </div>
      <div className={styles.amount}>{value}</div>
      <div className={styles.add} onClick={() => onChange(value + 1)}>
        +
      </div>
    </div>
  );
};
