import { FC, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import classNames from "classnames";
import { useCart } from "@/hooks";
import { CartIcon, HamburgerIcon, Logo } from "@/ui";
import { CartDialog } from "./CartDialog";
import { HeaderProps } from "./Header.types";
import styles from "./Header.module.scss";

const menu = [
  { label: "Home", href: "/" },
  { label: "Headphones", href: "/headphones" },
  { label: "Speakers", href: "/speakers" },
  { label: "Earphones", href: "/earphones" },
];

export const Header: FC<HeaderProps> = ({ variant = "absolute" }) => {
  const { items } = useCart();
  const [isCartOpen, setIsCartOpen] = useState(false);
  const pathname = usePathname();

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
            {menu.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className={classNames(
                  styles.menuItem,
                  pathname === item.href && styles.active
                )}
              >
                {item.label}
              </Link>
            ))}
          </nav>
          <div className={styles.cart}>
            {items.length > 0 && <p className={styles.label}>{items.length}</p>}
            <CartIcon
              className={styles.cartIcon}
              onClick={() => setIsCartOpen((p) => !p)}
            />
          </div>
        </header>
      </div>
    </>
  );
};
