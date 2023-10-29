import { FC } from "react";
import Image from "next/image";
import { useCart } from "@/hooks";
import { Button, Dialog, InputAmount, Typography } from "@/ui";
import { formatPrice } from "@/utils";
import { CartDialogProps } from "./CartDialog.types";
import styles from "./CartDialog.module.scss";

export const CartDialog: FC<CartDialogProps> = ({ onHide, show }) => {
  const { items, clear, update } = useCart();
  return (
    <Dialog show={show} onHide={onHide}>
      <div className={styles.container}>
        <div className={styles.header}>
          <Typography variant="title-h6">Cart ({items.length})</Typography>
          <p className={styles.clear} onClick={clear}>
            Remove all
          </p>
        </div>
        <div className={styles.products}>
          {items.map((item) => (
            <div key={item.id} className={styles.product}>
              <div className={styles.info}>
                <div className={styles.imageBox}>
                  <Image
                    fill
                    src={item.image}
                    className={styles.image}
                    alt={item.name}
                  />
                </div>
                <div>
                  <p className={styles.label}>{item.name}</p>
                  <p className={styles.price}>{formatPrice(item.price)}</p>
                </div>
              </div>
              <InputAmount
                small
                value={item.quantity}
                onChange={(v) => update(item.id, v)}
              />
            </div>
          ))}
        </div>
        <div className={styles.total}>
          <p className={styles.label}>Total</p>
          <p className={styles.amount}>
            {formatPrice(
              items.reduce((acc, item) => acc + item.price * item.quantity, 0)
            )}
          </p>
        </div>
        <Button
          disabled
          href="/checkout"
          variant="primary"
          className={styles.checkout}
        >
          Checkout
        </Button>
      </div>
    </Dialog>
  );
};
