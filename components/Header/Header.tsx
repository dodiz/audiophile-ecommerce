import { ElementRef, FC, useEffect, useRef, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import classNames from "classnames";
import { Categories } from "@/components";
import { useCart, useClickOutside } from "@/hooks";
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
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const pathname = usePathname();
  const [isScrolled, setIsScrolled] = useState(false);
  const headerRef = useRef<ElementRef<"div">>(null);

  useEffect(() => {
    if (!headerRef.current) return;
    if (window.scrollY > headerRef.current.getBoundingClientRect().height) {
      setIsScrolled(true);
    } else {
      setIsScrolled(false);
    }
    const handleScroll = () => {
      if (!headerRef.current) return;
      if (window.scrollY > headerRef.current.getBoundingClientRect().height) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [headerRef]);
  const mobileMenuRef = useClickOutside(() => setIsMenuOpen(false));

  return (
    <>
      <CartDialog show={isCartOpen} onHide={() => setIsCartOpen(false)} />
      <div
        className={classNames(
          styles.container,
          styles[variant],
          isScrolled && styles.scrolled
        )}
      >
        <header ref={headerRef} className={styles.header}>
          <HamburgerIcon
            className={styles.hamburger}
            onClick={() => setIsMenuOpen((p) => !p)}
          />
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
        {isMenuOpen && (
          <div ref={mobileMenuRef} className={styles.mobileMenu}>
            <Categories />
          </div>
        )}
      </div>
    </>
  );
};
