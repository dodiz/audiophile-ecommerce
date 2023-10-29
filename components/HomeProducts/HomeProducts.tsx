import { FC } from "react";
import Image from "next/image";
import classNames from "classnames";
import {
  speakerZx9Desktop,
  speakerZx7Desktop,
  earphonesYX1Desktop,
} from "@/images";
import { Button, Typography } from "@/ui";
import styles from "./HomeProducts.module.scss";

export const HomeProducts: FC = () => {
  return (
    <div className={styles.container}>
      <div className={classNames(styles.box, styles.first)}>
        <div className={styles.circle} />
        <Image
          className={styles.image}
          src={speakerZx9Desktop}
          alt="earphones"
        />
        <div className={styles.content}>
          <Typography variant="title-h1" className={styles.title}>
            ZX9 SPEAKER
          </Typography>
          <Typography variant="body" className={styles.description}>
            Upgrade to premium speakers that are phenomenally built to deliver
            truly remarkable sound
          </Typography>
          <div className={styles.button}>
            <Button variant="secondary-reverse">SEE PRODUCT</Button>
          </div>
        </div>
      </div>
      <div
        className={classNames(styles.box, styles.second)}
        style={{
          backgroundImage: `url(${speakerZx7Desktop.src})`,
        }}
      >
        <div className={styles.content}>
          <Typography variant="title-h4" className={styles.title}>
            ZX7 SPEAKER
          </Typography>
          <div className={styles.button}>
            <Button variant="secondary">SEE PRODUCT</Button>
          </div>
        </div>
      </div>
      <div className={classNames(styles.box, styles.third)}>
        <Image
          src={earphonesYX1Desktop}
          className={styles.image}
          alt="earphones"
        />
        <div className={styles.content}>
          <Typography variant="title-h4" className={styles.title}>
            YX1 EARPHONES
          </Typography>
          <div className={styles.button}>
            <Button variant="secondary">SEE PRODUCT</Button>
          </div>
        </div>
      </div>
    </div>
  );
};
