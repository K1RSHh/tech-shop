import { Heart, ShoppingCart } from "lucide-react";

function HoverCart() {
  return (
    <div className="absolute top-2 right-2 flex flex-col gap-2 opacity-0 group-hover:opacity-100 translate-x-3 group-hover:translate-x-0 transition-all duration-200 ease-out">
      <button
        title="Add to Wishlist"
        className="p-2 bg-white rounded-full shadow cursor-pointer hover:bg-red-50 hover:text-red-500 text-black transition-colors"
      >
        <Heart size={16} />
      </button>
      <button
        title="Add to Cart"
        className="p-2 bg-white rounded-full shadow cursor-pointer hover:bg-sky-200 hover:text-sky-800 text-black transition-colors"
      >
        <ShoppingCart size={16} />
      </button>
    </div>
  );
}


export default HoverCart