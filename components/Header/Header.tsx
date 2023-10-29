import { FC } from "react";
import Link from "next/link";
import classNames from "classnames";
import { CartIcon, HamburgerIcon, Logo } from "@/ui";
import { HeaderProps } from "./Header.types";
import styles from "./Header.module.scss";

export const Header: FC<HeaderProps> = ({ variant = "absolute" }) => {
  return (
    <div className={classNames(styles.container, styles[variant])}>
      <header className={styles.header}>
        <HamburgerIcon className={styles.hamburger} />
        <Link href="/">
          <Logo />
        </Link>
        <nav className={styles.menu}>
          <Link className={styles.menuItem} href="/">
            Home
          </Link>
          <Link className={styles.menuItem} href="/headphones">
            Headphones
          </Link>
          <Link className={styles.menuItem} href="/speakers">
            Speakers
          </Link>
          <Link className={styles.menuItem} href="/earphones">
            Earphones
          </Link>
        </nav>
        <CartIcon className={styles.cartIcon} />
      </header>
    </div>
  );
};
