import { describe, expect, it } from "vitest";
import reducer, {
  addToCart,
  remove,
  removeCartItem,
  type CartItem,
} from "@/lib/features/carts/cartsSlice";

const tee: CartItem = {
  id: 1,
  name: "Ivory Boxy Tee",
  srcUrl: "/images/products/ivory-boxy-tee-1.jpg",
  price: 100,
  attributes: ["Large", "Ivory"],
  discount: { percentage: 20, amount: 0 },
  quantity: 2,
};

const coat: CartItem = {
  ...tee,
  id: 2,
  name: "Olive Coat Dress",
  price: 200,
  discount: { percentage: 0, amount: 50 },
  quantity: 1,
};

const start = reducer(undefined, { type: "init" });

describe("cartsSlice", () => {
  it("adds items and totals discounted prices", () => {
    const state = reducer(reducer(start, addToCart(tee)), addToCart(coat));

    expect(state.cart?.items).toHaveLength(2);
    expect(state.cart?.totalQuantities).toBe(3);
    expect(state.totalPrice).toBe(400);
    // 2 x 80 (20% off) + 150 ($50 off)
    expect(state.adjustedTotalPrice).toBe(310);
  });

  it("merges the same product and attributes into one line", () => {
    const state = reducer(reducer(start, addToCart(tee)), addToCart({ ...tee, quantity: 1 }));

    expect(state.cart?.items).toHaveLength(1);
    expect(state.cart?.items[0].quantity).toBe(3);
    expect(state.adjustedTotalPrice).toBe(240);
  });

  it("keeps different attributes as separate lines", () => {
    const state = reducer(
      reducer(start, addToCart(tee)),
      addToCart({ ...tee, attributes: ["Small", "Ivory"], quantity: 1 })
    );

    expect(state.cart?.items).toHaveLength(2);
  });

  it("decrements one unit and drops the line at zero", () => {
    let state = reducer(start, addToCart({ ...tee, quantity: 1 }));
    state = reducer(state, removeCartItem({ id: tee.id, attributes: tee.attributes }));

    expect(state.cart?.items).toHaveLength(0);
    expect(state.totalPrice).toBe(0);
    expect(state.adjustedTotalPrice).toBe(0);
  });

  it("removes a whole line", () => {
    let state = reducer(reducer(start, addToCart(tee)), addToCart(coat));
    state = reducer(state, remove({ id: tee.id, attributes: tee.attributes, quantity: 2 }));

    expect(state.cart?.items.map((i) => i.id)).toEqual([coat.id]);
    expect(state.totalPrice).toBe(200);
    expect(state.adjustedTotalPrice).toBe(150);
  });
});
