import { FC } from "react";
import styles from "./Categories.module.scss";
import { Button, Typography } from "@/ui";

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
        <img
          className={styles.image}
          src="/images/desktop/earphones.png"
          alt="earphones"
        />
        <Typography variant="body" className={styles.label}>
          Earphones
        </Typography>
        <Button variant="tertiary">Shop </Button>
      </div>
    </div>
  );
};
