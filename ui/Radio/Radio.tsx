import { FC } from "react";
import classNames from "classnames";
import { CheckIcon } from "@/ui";
import { SubTaskProps } from "./Radio.types.ts";
import styles from "./SubTask.module.scss";

export const SubTask: FC<SubTaskProps> = ({ selected, onClick, label }) => {
  return (
    <div className={styles.container} onClick={onClick}>
      <div className={classNames(styles.checkbox, selected && styles.checked)}>
        <CheckIcon className={styles.checkIcon} />
      </div>
      <p className={classNames(styles.label, selected && styles.checked)}>
        {label}
      </p>
    </div>
  );
};
