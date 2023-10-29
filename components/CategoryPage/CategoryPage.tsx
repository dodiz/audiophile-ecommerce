import { BestGear } from "@/components";
import { Button, Typography } from "@/ui";
import styles from "./CategoryPage.module.scss";

export const CategoryPage = () => {
  return (
    <>
      <div className={styles.hero}>
        <Typography variant="title-h2" className={styles.title}>
          HEADPHONES
        </Typography>
      </div>
      <div className={styles.products}>
        <div className={styles.product}>
          <div className={styles.image} />
          <div className={styles.content}>
            <Typography variant="overline">NEW PRODUCT</Typography>
            <Typography variant="title-h2">XX99 MARK II HEADPHONES</Typography>
            <Typography variant="body">
              The new XX99 Mark II headphones is the pinnacle of pristine audio.
              It redefines your premium headphone experience by reproducing the
              balanced depth and precision of studio-quality sound.
            </Typography>
            <Button>SEE PRODUCT</Button>
          </div>
        </div>
      </div>
      <BestGear />
    </>
  );
};
