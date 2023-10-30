import { FC } from "react";
import Image from "next/image";
import { beastGearDesktop } from "@/images";
import { Typography } from "@/ui";
import styles from "./BestGear.module.scss";

export const BestGear: FC = () => {
  return (
    <div className={styles.container}>
      <div className={styles.content} data-aos="fade-left">
        <Typography variant="title-h2">
          Bringing you the <span className={styles.accent}>best </span>
          audio gear
        </Typography>
        <Typography variant="body">
          Located at the heart of New York City, Audiophile is the premier store
          for high end headphones, earphones, speakers, and audio accessories.
          We have a large showroom and luxury demonstration rooms available for
          you to browse and experience a wide range of our products. Stop by our
          store to meet some of the fantastic people who make Audiophile the
          best place to buy your portable audio equipment.
        </Typography>
      </div>
      <Image
        data-aos="zoom-in"
        className={styles.image}
        src={beastGearDesktop}
        alt="beast gear"
      />
    </div>
  );
};
