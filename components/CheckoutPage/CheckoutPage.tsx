import { FC, useMemo } from "react";
import Link from "next/link";
import Image from "next/image";
import classNames from "classnames";
import { useFormik } from "formik";
import { z } from "zod";
import { toFormikValidate } from "zod-formik-adapter";
import { useCart } from "@/hooks";
import { formatPrice } from "@/utils";
import { Typography, Input, Radio, CashOnDeliveryIcon, Button } from "@/ui";
import styles from "./CheckoutPage.module.scss";

export const CheckoutPage: FC = () => {
  const { clear, items } = useCart();
  const formik = useFormik({
    initialValues: {
      name: "",
      email: "",
      phone: "",
      address: "",
      zip: "",
      city: "",
      country: "",
      isCash: true,
      eMoneyNumber: "",
      eMoneyPin: "",
    },
    validate: toFormikValidate(
      z.object({
        name: z.string().min(1, "Can't be empty"),
        email: z.string().email("Wrong format"),
        phone: z
          .string()
          .min(10, "Wrong format")
          .regex(
            /^([+]?[\s0-9]+)?(\d{3}|[(]?[0-9]+[)])?([-]?[\s]?[0-9])+$/,
            "Wrong format"
          ),
        address: z.string().min(1, "Can't be empty"),
        zip: z.string().min(5, "Can't be empty"),
        city: z.string().min(1, "Can't be empty"),
        country: z.string().min(1, "Can't be empty"),
        isCash: z.boolean(),
        eMoneyNumber: z.string(),
        eMoneyPin: z.string(),
      })
    ),
    onSubmit: clear,
  });
  const subTotal = useMemo(() => {
    return items.reduce((acc, item) => acc + item.price * item.quantity, 0);
  }, [items]);
  const Vat = useMemo(() => {
    return (subTotal * 20) / 120;
  }, [subTotal]);

  return (
    <div className={styles.wrapper}>
      <div className={styles.container}>
        <Typography variant="body" className={styles.breadcrumb}>
          <Link href="/">Go Back</Link>
        </Typography>
        <div className={styles.boxes}>
          <div className={classNames(styles.box, styles.checkout)}>
            <Typography variant="title-h3">Checkout</Typography>
            <Typography variant="sub-title" className={styles.subtitle}>
              Billing details
            </Typography>
            <div className={classNames(styles.form, styles.billing)}>
              <Input
                label="Name"
                name="name"
                placeholder="Your name"
                value={formik.values.name}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                error={(formik.touched.name && formik.errors.name) || ""}
              />
              <Input
                label="Email"
                name="email"
                placeholder="Your name"
                value={formik.values.email}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                error={(formik.touched.email && formik.errors.email) || ""}
              />
              <Input
                label="Phone Number"
                name="phone"
                placeholder="+1 123-555-1234"
                value={formik.values.phone}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                error={(formik.touched.phone && formik.errors.phone) || ""}
              />
            </div>
            <Typography variant="sub-title" className={styles.subtitle}>
              Shipping info
            </Typography>
            <div className={classNames(styles.form, styles.shipping)}>
              <div className={styles.address}>
                <Input
                  label="Address"
                  name="address"
                  placeholder="Your address"
                  value={formik.values.address}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  error={
                    (formik.touched.address && formik.errors.address) || ""
                  }
                />
              </div>
              <Input
                label="ZIP Code"
                name="zip"
                placeholder="10001"
                value={formik.values.zip}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                error={(formik.touched.zip && formik.errors.zip) || ""}
              />
              <Input
                label="City"
                name="city"
                placeholder="New York"
                value={formik.values.city}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                error={(formik.touched.city && formik.errors.city) || ""}
              />
              <Input
                label="Country"
                name="country"
                placeholder="United States"
                value={formik.values.country}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                error={(formik.touched.country && formik.errors.country) || ""}
              />
            </div>
            <Typography variant="sub-title" className={styles.subtitle}>
              Payment details
            </Typography>
            <div className={classNames(styles.form, styles.payment)}>
              <Radio
                label="e-Money"
                checked={!formik.values.isCash}
                onChange={() => formik.setFieldValue("isCash", false)}
              />
              <Radio
                label="Cash on Delivery"
                checked={formik.values.isCash}
                onChange={() => formik.setFieldValue("isCash", true)}
              />
              {!formik.values.isCash && (
                <>
                  <Input
                    label="e-Money Number"
                    name="eMoneyNumber"
                    placeholder="1234 1234 1234 1234"
                    value={formik.values.eMoneyNumber}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    error={
                      (formik.touched.eMoneyNumber &&
                        formik.errors.eMoneyNumber) ||
                      ""
                    }
                  />
                  <Input
                    label="e-Money PIN"
                    name="eMoneyPin"
                    placeholder="****"
                    value={formik.values.eMoneyPin}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    error={
                      (formik.touched.eMoneyPin && formik.errors.eMoneyPin) ||
                      ""
                    }
                  />
                </>
              )}
            </div>
            {formik.values.isCash && (
              <div className={styles.cash}>
                <CashOnDeliveryIcon width={120} />
                <Typography variant="body" className={styles.cash}>
                  The 'Cash on Delivery' option enables you to pay in cash when
                  our delivery courier arrives at your residence. Just make sure
                  your address is correct so that your order will not be
                  cancelled.
                </Typography>
              </div>
            )}
          </div>
          <div className={classNames(styles.box, styles.summary)}>
            <Typography variant="title-h3">Summary</Typography>
            <div className={styles.products}>
              {items.map((product) => (
                <div key={product.id} className={styles.product}>
                  <div className={styles.info}>
                    <div className={styles.imageBox}>
                      <Image alt={product.name} fill src={product.image} />
                    </div>
                    <div>
                      <p className={styles.label}>{product.name}</p>
                      <p className={styles.price}>
                        {formatPrice(product.price)}
                      </p>
                    </div>
                  </div>
                  <div className={styles.quantity}>x{product.quantity}</div>
                </div>
              ))}
              <div className={styles.total}>
                <div className={styles.row}>
                  <p className={styles.label}>total</p>
                  <p className={styles.amount}>{formatPrice(subTotal)}</p>
                </div>
                <div className={styles.row}>
                  <p className={styles.label}>Shipping</p>
                  <p className={styles.amount}>{formatPrice(50)}</p>
                </div>
                <div className={styles.row}>
                  <p className={styles.label}>Vat (included)</p>
                  <p className={styles.amount}>{formatPrice(Vat)}</p>
                </div>
                <div className={classNames(styles.row, styles.grand)}>
                  <p className={styles.label}>grand total</p>
                  <p className={styles.amount}>{formatPrice(subTotal + 50)}</p>
                </div>
              </div>
              <Button onClick={() => formik.handleSubmit()}>
                Confirm Order
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
