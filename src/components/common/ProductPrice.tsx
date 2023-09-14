import { cn } from "@/lib/utils";
import { discountLabel, getDiscountedPrice, hasDiscount } from "@/lib/pricing";
import type { Discount } from "@/types/product.types";

type ProductPriceProps = {
  price: number;
  discount: Discount;
  size?: "md" | "lg";
};

const sizes = {
  md: { price: "text-xl xl:text-2xl", badge: "text-[10px] xl:text-xs" },
  lg: { price: "text-2xl sm:text-[32px]", badge: "text-[10px] sm:text-xs" },
};

/** Final price, the struck-through original and a discount badge when on sale. */
const ProductPrice = ({ price, discount, size = "md" }: ProductPriceProps) => {
  const item = { price, discount };
  const label = discountLabel(item);

  return (
    <>
      <span className={cn("font-bold text-black", sizes[size].price)}>
        ${getDiscountedPrice(item)}
      </span>
      {hasDiscount(item) && (
        <span className={cn("font-bold text-black/40 line-through", sizes[size].price)}>
          <span className="sr-only">Original price </span>${price}
        </span>
      )}
      {label && (
        <span
          className={cn(
            "font-medium py-1.5 px-3.5 rounded-full bg-[#FF3333]/10 text-[#FF3333]",
            sizes[size].badge
          )}
        >
          {label}
        </span>
      )}
    </>
  );
};

export default ProductPrice;
