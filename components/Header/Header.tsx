import { FC, useState } from "react";
import Link from "next/link";
import classNames from "classnames";
import { CartIcon, HamburgerIcon, Logo } from "@/ui";
import { CartDialog } from "./CartDialog";
import { HeaderProps } from "./Header.types";
import styles from "./Header.module.scss";

export const Header: FC<HeaderProps> = ({ variant = "absolute" }) => {
  const [isCartOpen, setIsCartOpen] = useState(false);
  return (
    <>
      <CartDialog show={isCartOpen} onHide={() => setIsCartOpen(false)} />
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
          <CartIcon
            className={styles.cartIcon}
            onClick={() => setIsCartOpen((p) => !p)}
          />
        </header>
      </div>
    </>
  );
};
