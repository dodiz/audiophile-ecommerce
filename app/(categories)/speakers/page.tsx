import { products } from "@/data/products";
import { CategoryPage } from "@/components";

export default function Page() {
  const filteredProducts = products.filter(
    (product) => product.category === "speakers"
  );
  return <CategoryPage title="speakers" products={filteredProducts} />;
}
