import { FC, useMemo, useState } from "react";
import Image from "next/image";
import classNames from "classnames";
import { Button, CheckIcon, Dialog, Typography } from "@/ui";
import { formatPrice } from "@/utils";
import { CheckoutSuccessDialogProps } from "./CheckoutSuccessDialog.types";
import styles from "./CheckoutSuccessDialog.module.scss";

export const CheckoutSuccessDialog: FC<CheckoutSuccessDialogProps> = ({
  products,
}) => {
  const [viewAll, setViewAll] = useState(false);

  const grandTotal = useMemo(() => {
    return (
      products.reduce((acc, item) => acc + item.price * item.quantity, 0) + 50
    );
  }, [products]);

  const printedItems = viewAll ? products : products.slice(0, 1);

  return (
    <Dialog show={products.length > 0} onHide={() => {}}>
      <div className={styles.container}>
        <CheckIcon />
        <Typography variant="title-h3" className={styles.title}>
          Thank you for your order
        </Typography>
        <Typography variant="body" className={styles.description}>
          You will receive an email confirmation shortly.
        </Typography>
        <div className={styles.summary}>
          <div className={styles.left}>
            <div className={styles.products}>
              {printedItems.map((product) => (
                <div key={product.id} className={styles.product}>
                  <div className={styles.imageBox}>
                    <Image src={product.image} fill alt={product.name} />
                  </div>
                  <div className={styles.info}>
                    <p className={styles.name}>{product.name}</p>
                    <p className={styles.price}>{formatPrice(product.price)}</p>
                  </div>
                  <p className={styles.quantity}>x{product.quantity}</p>
                </div>
              ))}
            </div>
            <div className={styles.line} />
            <p className={styles.viewAll} onClick={() => setViewAll((p) => !p)}>
              {viewAll ? "View less" : "View more"}
            </p>
          </div>
          <div className={classNames(styles.right, viewAll && styles.viewAll)}>
            <p className={styles.label}>Grand total</p>
            <p className={styles.amount}>{formatPrice(grandTotal)}</p>
          </div>
        </div>
        <div className={styles.button}>
          <Button href="/">Back to home</Button>
        </div>
      </div>
    </Dialog>
  );
};
