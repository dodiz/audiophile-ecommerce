import { FC } from "react";
import styles from "./Categories.module.scss";
import { ArrowRightIcon, Button, Typography } from "@/ui";
import Image from "next/image";

export const Categories: FC = () => {
  return (
    <div className={styles.container}>
      <div className={styles.box}>
        <div className={styles.image}>
          <Image fill src="/images/desktop/headphones.png" alt="earphones" />
        </div>
        <Typography variant="body" className={styles.label}>
          Speakers
        </Typography>
        <div>
          <Button variant="tertiary">
            Shop <ArrowRightIcon />
          </Button>
        </div>
      </div>
      <div className={styles.box}>
        <div className={styles.image}>
          <Image fill src="/images/desktop/speakers.png" alt="speakers" />
        </div>
        <Typography variant="body" className={styles.label}>
          Speakers
        </Typography>
        <div>
          <Button variant="tertiary">
            Shop <ArrowRightIcon />
          </Button>
        </div>
      </div>
      <div className={styles.box}>
        <div className={styles.image}>
          <Image fill src="/images/desktop/earphones.png" alt="earphones" />
        </div>
        <Typography variant="body" className={styles.label}>
          Earphones
        </Typography>
        <div>
          <Button variant="tertiary">
            Shop <ArrowRightIcon />
          </Button>
        </div>
      </div>
    </div>
  );
};
