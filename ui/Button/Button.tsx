import { FC } from "react";
import Link from "next/link";
import classNames from "classnames";
import { ButtonProps } from "./Button.types";
import styles from "./Button.module.scss";

export const Button: FC<ButtonProps> = ({
  children,
  variant = "primary",
  href,
  disabled,
  className,
  ...rest
}) => {
  if (!disabled && href) {
    return (
      <Link className={classNames(styles.button, styles[variant])} href={href}>
        {children}
      </Link>
    );
  }
  return (
    <button
      disabled={disabled}
      className={classNames(styles.button, styles[variant])}
      {...rest}
    >
      {children}
    </button>
  );
};
