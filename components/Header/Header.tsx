import { FC } from "react";
import Link from "next/link";
import { CartIcon, HamburgerIcon, Logo } from "@/ui";
import styles from "./Header.module.scss";

export const Header: FC = () => {
  return (
    <div className={styles.container}>
      <header className={styles.header}>
        <HamburgerIcon className={styles.hamburger} />
        <Logo />
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
