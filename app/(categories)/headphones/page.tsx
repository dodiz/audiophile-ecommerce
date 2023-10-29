import { products } from "@/data/products";
import { CategoryPage } from "@/components";

export default function Page() {
  const filteredProducts = products.filter(
    (product) => product.category === "headphones"
  );
  return <CategoryPage title="headphones" products={filteredProducts} />;
}
