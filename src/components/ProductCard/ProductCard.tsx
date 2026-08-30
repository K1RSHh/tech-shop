import React from "react";
import { Link } from "react-router-dom";
import { Heart, ShoppingCart, Star } from "lucide-react";

import type { Product } from "../../types/product";

interface ProductCardProps {
  product: Product;
}

export const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
  return (
    <div draggable={false} className="select-none group z-40">
      <div>
        <div className="flex w-40 h-40 md:w-56 md:h-56 m-auto mb-3 mt-3 justify-center items-center">
          {/* hover element */}
          <div className="absolute z-50 top-2 right-2 flex flex-col gap-2 opacity-0 group-hover:opacity-100 translate-x-3 group-hover:translate-x-0 transition-all duration-200 ease-out">
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
          <Link to="/test">
            <img
              src={product.image}
              alt={product.title}
              draggable={false}
              className="max-w-40 max-h-40 md:max-w-56 md:max-h-56 m-auto pointer-events-none"
            />
          </Link>
        </div>
        {/* product rating */}
        <div className="flex gap-0.5 items-center">
          <Star color="#ffbb00" fill="#ffbb00" size={13} />
          <Star color="#ffbb00" fill="#ffbb00" size={13} />
          <Star color="#ffbb00" fill="#ffbb00" size={13} />
          <Star color="#ffbb00" fill="#ffbb00" size={13} />
          <Star color="#c4c4c4" fill="#c4c4c4" size={13} />
          <div>
            <p className="text-sm text-stone-300 pl-1">Reviews (4)</p>
          </div>
        </div>
        <h4 className="text-sm font-normal mt-1 text-black">{product.title}</h4>
      </div>

      <div className="mt-2">
        <span className="text-base font-bold text-black mb-2">
          ${product.price}
        </span>
      </div>
    </div>
  );
};
