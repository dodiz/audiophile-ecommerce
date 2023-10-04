import { FC, useMemo } from "react";
import cn from "classnames";
import { ButtonProps } from "./Button.types";
import styles from "./Button.module.scss";

export const Button: FC<ButtonProps> = ({
  children,
  variant = "primary",
  ...rest
}) => {
  const variantClassName = useMemo(() => styles[variant], [variant]);
  return (
    <button className={cn(styles.button, variantClassName)} {...rest}>
      {children}
    </button>
  );
};
