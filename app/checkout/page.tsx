"use client";
import { redirect } from "next/navigation";
import { CheckoutPage } from "@/components";
import { useCart } from "@/hooks";

export default function Page() {
  const { items } = useCart();
  if (items.length === 0) redirect("/");
  return <CheckoutPage />;
}
