import { FC, useCallback } from "react";
import classNames from "classnames";
import { InputAmountProps } from "./InputAmount.types";
import styles from "./InputAmount.module.scss";

export const InputAmount: FC<InputAmountProps> = ({
  onChange,
  value,
  small,
  min,
}) => {
  const handleSubtract = useCallback(() => {
    if (min === undefined) return onChange(value - 1);
    if (value > min) {
      onChange(value - 1);
    }
  }, [min, onChange, value]);

  return (
    <div className={classNames(styles.container, small && styles.small)}>
      <div className={styles.add} onClick={handleSubtract}>
        -
      </div>
      <div className={styles.amount}>{value}</div>
      <div className={styles.add} onClick={() => onChange(value + 1)}>
        +
      </div>
    </div>
  );
};
