import { FC, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import classNames from "classnames";
import { BestGear, Categories } from "@/components";
import { useCart } from "@/hooks";
import { Button, InputAmount, Typography } from "@/ui";
import styles from "./ProductPage.module.scss";
import { ProductPageProps } from "./ProductPage.types";

export const ProductPage: FC<ProductPageProps> = ({ product }) => {
  const { add } = useCart();
  const [amount, setAmount] = useState(1);
  return (
    <div className={styles.container}>
      <div>
        <Typography variant="body" className={styles.breadcrumb}>
          <Link href="/">Go Back</Link>
        </Typography>
        <div className={styles.product}>
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
            <p className={styles.price}>$ {product.price}</p>
            <div className={styles.buttons}>
              <InputAmount min={1} onChange={setAmount} value={amount} />
              <Button
                onClick={() =>
                  add({
                    id: product.id,
                    name: product.shortName,
                    price: product.price,
                    quantity: amount,
                    image: product.image.desktop,
                  })
                }
              >
                Add to cart
              </Button>
            </div>
          </div>
        </div>
      </div>
      <div className={styles.details}>
        <div className={styles.features}>
          <Typography variant="title-h3">FEATURES</Typography>
          <Typography variant="body" className={styles.content}>
            {product.features}
          </Typography>
        </div>
        <div className={styles.inBox}>
          <Typography variant="title-h3">IN THE BOX</Typography>
          <div className={styles.includes}>
            {product.includes.map((include) => (
              <div className={styles.include} key={include.item}>
                <p className={styles.quantity}>{include.quantity}x</p>
                <Typography variant="body">{include.item}</Typography>
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className={styles.gallery}>
        <div className={styles.galleryImage}>
          <Image
            className={styles.image}
            fill
            src={product.gallery.first.desktop}
            alt={product.name}
          />
        </div>
        <div className={styles.galleryImage}>
          <Image
            className={styles.image}
            fill
            src={product.gallery.second.desktop}
            alt={product.name}
          />
        </div>
        <div className={classNames(styles.galleryImage, styles.big)}>
          <Image
            className={styles.image}
            fill
            src={product.gallery.third.desktop}
            alt={product.name}
          />
        </div>
      </div>
      <div className={styles.related}>
        <Typography variant="title-h3">YOU MAY ALSO LIKE</Typography>
        <div className={styles.list}>
          {product.others.map((other) => (
            <div className={styles.item} key={other.slug}>
              <div className={styles.imageContainer}>
                <Image
                  className={styles.image}
                  fill
                  src={other.image.desktop}
                  alt={other.name}
                />
              </div>
              <Typography variant="title-h4">{other.name}</Typography>
              <Button href={`/products/${other.slug}`}>See product</Button>
            </div>
          ))}
        </div>
      </div>
      <div className={styles.categories}>
        <Categories />
        <BestGear />
      </div>
    </div>
  );
};
