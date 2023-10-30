import { FC } from "react";
import Image from "next/image";
import classNames from "classnames";
import {
  speakerZx9Desktop,
  speakerZx9Tablet,
  speakerZx9Mobile,
  speakerZx7Desktop,
  speakerZx7Tablet,
  speakerZx7Mobile,
  earphonesYX1Desktop,
  earphonesYX1Tablet,
  earphonesYX1Mobile,
} from "@/images";
import { useResponsive } from "@/hooks";
import { Button, Typography } from "@/ui";
import styles from "./HomeProducts.module.scss";

export const HomeProducts: FC = () => {
  const { isMobile, isTablet } = useResponsive();
  return (
    <div className={styles.container}>
      <div
        data-aos="fade-right"
        className={classNames(styles.box, styles.first)}
      >
        <div className={styles.circle} />
        <Image
          className={styles.image}
          src={
            isMobile
              ? speakerZx9Mobile
              : isTablet
              ? speakerZx9Tablet
              : speakerZx9Desktop
          }
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
            <Button href="/products/zx9-speaker" variant="secondary-reverse">
              SEE PRODUCT
            </Button>
          </div>
        </div>
      </div>
      <div
        data-aos="fade-left"
        className={classNames(styles.box, styles.second)}
      >
        <Image
          className={styles.image}
          src={
            isMobile
              ? speakerZx7Mobile
              : isTablet
              ? speakerZx7Tablet
              : speakerZx7Desktop
          }
          alt="speaker"
        />
        <div className={styles.content}>
          <Typography variant="title-h4" className={styles.title}>
            ZX7 SPEAKER
          </Typography>
          <div className={styles.button}>
            <Button href="/products/zx7-speaker" variant="secondary">
              SEE PRODUCT
            </Button>
          </div>
        </div>
      </div>
      <div
        data-aos="fade-right"
        className={classNames(styles.box, styles.third)}
      >
        <Image
          src={
            isMobile
              ? earphonesYX1Mobile
              : isTablet
              ? earphonesYX1Tablet
              : earphonesYX1Desktop
          }
          className={styles.image}
          alt="earphones"
        />
        <div className={styles.content}>
          <Typography variant="title-h4" className={styles.title}>
            YX1 EARPHONES
          </Typography>
          <div className={styles.button}>
            <Button href="/products/yx1-earphones" variant="secondary">
              SEE PRODUCT
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};
