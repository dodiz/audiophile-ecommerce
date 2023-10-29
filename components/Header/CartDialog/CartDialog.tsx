import { FC } from "react";
import { useCart } from "@/store";
import { Button, Dialog, InputAmount, Typography } from "@/ui";
import { CartDialogProps } from "./CartDialog.types";
import styles from "./CartDialog.module.scss";

export const CartDialog: FC<CartDialogProps> = ({ onHide, show }) => {
  const { items, clear } = useCart();
  return (
    <Dialog show={show} onHide={onHide}>
      <div className={styles.container}>
        <div className={styles.header}>
          <Typography variant="title-h4">Cart ({items.length})</Typography>
          <p className={styles.clear}>Remove all</p>
        </div>
        <div className={styles.products}>
          {items.map((item) => (
            <div key={item.id} className={styles.product}>
              <div className={styles.info}>
                <img
                  src={item.image}
                  className={styles.image}
                  alt="Earphones"
                />
                <div className={styles.label}>
                  <Typography variant="title-h5">Earphones</Typography>
                  <Typography variant="body">1 x $599</Typography>
                </div>
              </div>
              <InputAmount value={item.quantity} onChange={() => {}} />
            </div>
          ))}
        </div>
        <div className={styles.total}>
          <Typography variant="title-h5">Total</Typography>
          <Typography variant="title-h5">$599</Typography>
        </div>
        <Button className={styles.checkout}>Checkout</Button>
      </div>
    </Dialog>
  );
};
