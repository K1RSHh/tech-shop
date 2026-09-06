import { useFilteredProducts } from "../hooks/useFilteredProducts";
import { ProductCard } from "../components/ProductCard/ProductCard";

function Catalog() {
  const { products, loading, error } = useFilteredProducts();

  if (loading) return <div>Loading...</div>;
  if (error) return <div className="text-red-500">{error}</div>;
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-6 overflow-x-hidden">
      {products.map((product) => (
        <div
          key={product.id}
          className="flex-[0_0_230px] md:flex-[0_0_234px] relative min-w-0 rounded-xl p-4 md:p-0 flex flex-col justify-between select-none"
        >
          <ProductCard product={product} />
        </div>
      ))}
    </div>
  );
}

export default Catalog;
