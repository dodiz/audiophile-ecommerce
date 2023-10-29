import { FC } from "react";
import { heroMobile, heroTablet, heroDesktop } from "@/images";
import { useResponsive } from "@/hooks";
import { Button, Typography } from "@/ui";
import styles from "./Hero.module.scss";

export const Hero: FC = () => {
  const { isMobile, isTablet } = useResponsive();
  return (
    <div
      className={styles.container}
      style={{
        backgroundImage: `url(${
          isMobile
            ? heroMobile.src
            : isTablet
            ? heroTablet.src
            : heroDesktop.src
        })`,
      }}
    >
      <div className={styles.hero}>
        <Typography variant="overline" className={styles.overline}>
          New Product
        </Typography>
        <Typography variant="title-h1" className={styles.title}>
          XX99 MARK II HEADPHONES
        </Typography>
        <Typography variant="body" className={styles.subtitle}>
          Experience natural, lifelike audio and exceptional build quality made
          for the passionate music enthusiast.
        </Typography>
        <div>
          <Button>See Product</Button>
        </div>
      </div>
    </div>
  );
};
