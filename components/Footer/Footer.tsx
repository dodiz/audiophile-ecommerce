import { FC } from "react";
import Link from "next/link";
import {
  FacebookIcon,
  InstagramIcon,
  Logo,
  TwitterIcon,
  Typography,
} from "@/ui";
import styles from "./Footer.module.scss";

export const Footer: FC = () => {
  return (
    <div className={styles.container}>
      <div className={styles.inner}>
        <div className={styles.firstRow}>
          <Logo />
          <div className={styles.menu}>
            <Link href="/" className={styles.item}>
              Home
            </Link>
            <Link href="/headphones" className={styles.item}>
              Headphones
            </Link>
            <Link href="/speakers" className={styles.item}>
              Speakers
            </Link>
            <Link href="/earphones" className={styles.item}>
              Earphones
            </Link>
          </div>
        </div>
        <div className={styles.secondRow}>
          <Typography variant="body" className={styles.description}>
            Audiophile is an all in one stop to fulfill your audio needs. We're
            a small team of music lovers and sound specialists who are devoted
            to helping you get the most out of personal audio. Come and visit
            our demo facility - we're open 7 days a week.
          </Typography>
          <div className={styles.socials}>
            <FacebookIcon className={styles.social} />
            <TwitterIcon className={styles.social} />
            <InstagramIcon className={styles.social} />
          </div>
        </div>
        <Typography variant="body" className={styles.copyright}>
          Copyright 2023. All Rights Reserved
        </Typography>
      </div>
    </div>
  );
};
