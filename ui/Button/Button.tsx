import { FC, useMemo } from "react";
import cn from "classnames";
import { ButtonProps } from "./Button.types";
import styles from "./Button.module.scss";
import Link from "next/link";

export const Button: FC<ButtonProps> = ({
  children,
  variant = "primary",
  href,
  ...rest
}) => {
  const variantClassName = useMemo(() => styles[variant], [variant]);
  if (href) {
    return (
      <Link className={cn(styles.button, variantClassName)} href={href}>
        {children}
      </Link>
    );
  }
  return (
    <button className={cn(styles.button, variantClassName)} {...rest}>
      {children}
    </button>
  );
};
