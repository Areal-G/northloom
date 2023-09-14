import { describe, expect, it } from "vitest";
import { discountLabel, getDiscountedPrice, hasDiscount } from "@/lib/pricing";

const item = (price: number, percentage = 0, amount = 0) => ({
  price,
  discount: { percentage, amount },
});

describe("getDiscountedPrice", () => {
  it("returns the full price without a discount", () => {
    expect(getDiscountedPrice(item(120))).toBe(120);
  });

  it("applies and rounds a percentage discount", () => {
    expect(getDiscountedPrice(item(145, 20))).toBe(116);
    expect(getDiscountedPrice(item(99, 30))).toBe(69);
  });

  it("applies a fixed amount discount", () => {
    expect(getDiscountedPrice(item(180, 0, 30))).toBe(150);
  });

  it("prefers the percentage when both are set", () => {
    expect(getDiscountedPrice(item(100, 10, 50))).toBe(90);
  });

  it("never goes below zero", () => {
    expect(getDiscountedPrice(item(20, 0, 50))).toBe(0);
  });
});

describe("discount labels", () => {
  it("formats the badge", () => {
    expect(discountLabel(item(100, 20))).toBe("-20%");
    expect(discountLabel(item(100, 0, 15))).toBe("-$15");
    expect(discountLabel(item(100))).toBeNull();
  });

  it("reports whether an item is on sale", () => {
    expect(hasDiscount(item(100))).toBe(false);
    expect(hasDiscount(item(100, 0, 5))).toBe(true);
  });
});
