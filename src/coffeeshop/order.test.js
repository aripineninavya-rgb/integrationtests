import { describe, it, expect } from "vitest";
import { orderDrink } from "./coffeeshop.js";

describe("Order tests", () => {
  it("orderDrink latte returns true", () => {
    expect(orderDrink("latte")).toBe(true);
  });
});
