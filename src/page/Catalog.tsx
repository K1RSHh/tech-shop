import { useFilteredProducts } from "../hooks/useFilteredProducts";
import { ProductCard } from "../components/ProductCard/ProductCard";

function Catalog() {
  const { products, loading, error } = useFilteredProducts();

  if (loading) return <div>Loading...</div>;
  if (error) return <div className="text-red-500">{error}</div>;
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-6">
      {products.map((product) => (
        <ProductCard key={product.id} product={product} />
      ))}
    </div>
  );
}

export default Catalog;
