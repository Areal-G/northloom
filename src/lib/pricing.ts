import type { Discount } from "@/types/product.types";

type Priced = { price: number; discount: Discount };

/** Unit price after discount. A percentage discount takes precedence over a fixed amount. */
export function getDiscountedPrice({ price, discount }: Priced): number {
  if (discount.percentage > 0) {
    return Math.round(price - (price * discount.percentage) / 100);
  }
  if (discount.amount > 0) {
    return Math.max(0, Math.round(price - discount.amount));
  }
  return price;
}

export function hasDiscount({ discount }: Priced): boolean {
  return discount.percentage > 0 || discount.amount > 0;
}

/** Short badge label such as "-20%" or "-$15", or null when not discounted. */
export function discountLabel({ discount }: Priced): string | null {
  if (discount.percentage > 0) return `-${discount.percentage}%`;
  if (discount.amount > 0) return `-$${discount.amount}`;
  return null;
}
