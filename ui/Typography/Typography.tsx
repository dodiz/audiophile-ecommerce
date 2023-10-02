import { FC, useMemo } from "react";
import classNames from "classnames";
import { TypographyProps } from "./Typography.types";
import styles from "./Typography.module.scss";

export const Typography: FC<TypographyProps> = ({
  children,
  variant,
  className,
}) => {
  const typography = useMemo(() => {
    switch (variant) {
      case "title-h1":
        return <h1 className={classNames(styles.h1, className)}>{children}</h1>;
      case "title-h2":
        return <h2 className={classNames(styles.h2, className)}>{children}</h2>;
      case "title-h3":
        return <h3 className={classNames(styles.h3, className)}>{children}</h3>;
      case "title-h4":
        return <h4 className={classNames(styles.h4, className)}>{children}</h4>;
      case "title-h5":
        return <h5 className={classNames(styles.h5, className)}>{children}</h5>;
      case "title-h6":
        return <h6 className={classNames(styles.h6, className)}>{children}</h6>;
      case "overline":
        return (
          <p className={classNames(styles.overline, className)}>{children}</p>
        );
      case "sub-title":
        return (
          <p className={classNames(styles.subTitle, className)}>{children}</p>
        );
      default: //body
        return <p className={classNames(styles.body, className)}>{children}</p>;
    }
  }, [variant, children, className]);

  return typography;
};
