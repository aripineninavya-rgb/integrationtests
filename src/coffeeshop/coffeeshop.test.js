import { describe, it, expect } from "vitest";
import { createDrink, prepareOrder } from "./coffeeshop.js";

describe("CoffeeShop tests", () => {
  it("creates latte correctly", () => {
    expect(createDrink("latte")).toEqual({
      type: "latte",
      price: 45,
    });
  });

  it("unknown drink has price 0", () => {
    expect(createDrink("tea").price).toBe(0);
  });

  it("prepareOrder returns number 0-999", () => {
    const ticket = prepareOrder({ type: "latte" });

    expect(typeof ticket).toBe("number");
    expect(ticket).toBeGreaterThanOrEqual(0);
    expect(ticket).toBeLessThan(1000);
  });
});
