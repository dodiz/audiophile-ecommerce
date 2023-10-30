import { useEffect, useCallback, type FC } from "react";
import { DialogProps } from "./Dialog.types";
import styles from "./Dialog.module.scss";
import classNames from "classnames";

export const Dialog: FC<DialogProps> = ({
  position = "center",
  children,
  show,
  onHide,
}) => {
  const escapeListener = useCallback(
    (e: KeyboardEvent) => e.key === "Escape" && onHide(),
    [onHide]
  );

  useEffect(() => {
    if (show) document.addEventListener("keydown", escapeListener);
    else document.removeEventListener("keydown", escapeListener);

    return () => document.removeEventListener("keydown", escapeListener);
  }, [onHide, show, escapeListener]);

  return (
    <div
      className={classNames(
        styles.backdrop,
        show && styles.show,
        styles[position]
      )}
      onClick={onHide}
    >
      <div className={styles.wrapper}>
        <div className={styles.modal} onClick={(e) => e.stopPropagation()}>
          {children}
        </div>
      </div>
    </div>
  );
};
