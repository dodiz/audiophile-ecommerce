import { FC } from "react";
import Image from "next/image";
import { earphones, headphones, speakers } from "@/images";
import { ArrowRightIcon, Button, Typography } from "@/ui";
import styles from "./Categories.module.scss";

const categories = [
  {
    image: headphones,
    label: "Headphones",
    href: "/headphones",
  },
  {
    image: speakers,
    label: "Speakers",
    href: "/speakers",
  },
  {
    image: earphones,
    label: "Earphones",
    href: "/earphones",
  },
];

export const Categories: FC = () => {
  return (
    <div className={styles.container}>
      {categories.map((category) => (
        <div className={styles.box} key={category.label}>
          <Image
            className={styles.image}
            src={category.image}
            alt={category.label}
          />
          <Typography variant="body" className={styles.label}>
            {category.label}
          </Typography>
          <Button variant="tertiary" href={category.href}>
            Shop <ArrowRightIcon />
          </Button>
        </div>
      ))}
    </div>
  );
};
