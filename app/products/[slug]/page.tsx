import { products } from "@/data/products";
import { ProductPage } from "@/components";

export default function Page({
  params: { slug },
}: {
  params: { slug: string };
}) {
  const product = products.find((product) => product.slug === slug)!;
  return <ProductPage product={product} />;
}
