import { FC } from "react";
import Image from "next/image";
import { BestGear, Categories } from "@/components";
import { Button, Typography } from "@/ui";
import styles from "./CategoryPage.module.scss";

type CategoryPageProps = {
  title: string;
  products: typeof import("@/data/products").products;
};

export const CategoryPage: FC<CategoryPageProps> = ({ title, products }) => {
  return (
    <>
      <div className={styles.hero}>
        <Typography variant="title-h2" className={styles.title}>
          {title}
        </Typography>
      </div>
      <div className={styles.container}>
        <div className={styles.products}>
          {products.map((product) => (
            <div key={product.id} className={styles.product}>
              <div className={styles.imageBox}>
                <Image
                  className={styles.image}
                  fill
                  src={product.image.desktop}
                  alt={product.name}
                />
              </div>
              <div className={styles.content}>
                {product.new && (
                  <Typography variant="overline" className={styles.overline}>
                    NEW PRODUCT
                  </Typography>
                )}
                <Typography variant="title-h2">{product.name}</Typography>
                <Typography variant="body" className={styles.description}>
                  {product.description}
                </Typography>
                <div className={styles.button}>
                  <Button href={`/products/${product.slug}`}>
                    SEE PRODUCT
                  </Button>
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className={styles.categories}>
          <Categories />
        </div>
        <BestGear />
      </div>
    </>
  );
};
