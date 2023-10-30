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
            Audiophile is an ecommerce webapp made for portfolio purposes only.
            Challenge and design was provided by <b>Frontend Mentor</b>.<br />
            <a
              target="_blank"
              className={styles.link}
              href="https://www.frontendmentor.io/challenges/audiophile-ecommerce-website-C8cuSd_wx"
            >
              You can check it out here.
            </a>
            <br />
            All code is available to checkout on{" "}
            <a
              className={styles.link}
              href="https://github.com/dodiz/audiophile-ecommerce"
            >
              my github repo.
            </a>
          </Typography>
          <div className={styles.socials}>
            <a href="https://www.facebook.com/" target="_blank">
              <FacebookIcon className={styles.social} />
            </a>
            <a href="https://twitter.com/" target="_blank">
              <TwitterIcon className={styles.social} />
            </a>
            <a href="https://www.instagram.com/" target="_blank">
              <InstagramIcon className={styles.social} />
            </a>
          </div>
        </div>
        <Typography variant="body" className={styles.copyright}>
          Copyright 2023 @dodiz. All Rights Reserved
        </Typography>
      </div>
    </div>
  );
};
