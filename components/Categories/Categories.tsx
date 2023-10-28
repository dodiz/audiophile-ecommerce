import { FC } from "react";
import styles from "./Categories.module.scss";
import { Button, Typography } from "@/ui";
import Image from "next/image";

export const Categories: FC = () => {
  return (
    <div className={styles.container}>
      <div className={styles.box}>
        <img
          className={styles.image}
          src="/images/desktop/earphones.png"
          alt="earphones"
        />
        <Typography variant="body" className={styles.label}>
          Speakers
        </Typography>
        <Button variant="tertiary">Shop </Button>
      </div>
      <div className={styles.box}>
        <img
          className={styles.image}
          src="/images/desktop/earphones.png"
          alt="earphones"
        />
        <Typography variant="body" className={styles.label}>
          Speakers
        </Typography>
        <Button variant="tertiary">Shop </Button>
      </div>
      <div className={styles.box}>
        <div className={styles.image}>
          <Image fill src="/images/desktop/earphones.png" alt="earphones" />
        </div>
        <Typography variant="body" className={styles.label}>
          Earphones
        </Typography>
        <Button variant="tertiary">Shop </Button>
      </div>
    </div>
  );
};
