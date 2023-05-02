import { describe, it, expect, vi, beforeEach, afterEach } from "vitest";
import { useState } from "nuxt/app";
import { useCart } from "../useCart";

import { ref } from "vue";
import { CartItem } from "~/types";

vi.mock("nuxt/app", () => {
  return {
    useState: vi.fn(() => ref([])),
  };
});

const mockData = [
  {
    product: {
      id: "1",
      price: 1,
    },
    amount: 10,
  },
  {
    product: {
      id: "1",
      price: 1,
    },
    amount: 10,
  },
  {
    product: {
      id: "2",
      price: 10,
    },
    amount: 10,
  },
] as CartItem[];
describe("useCart", () => {
  it("should return right totalAmount, itemsCount, totalPrice", () => {
    const { itemsCount, totalAmount, totalPrice, addItem } = useCart();

    expect(itemsCount.value).toBe(0);

    addItem(mockData[0]);
    addItem(mockData[1]);
    addItem(mockData[2]);

    expect(itemsCount.value).toBe(2);
    expect(totalAmount.value).toBe(30);
    expect(totalPrice.value).toBe(120);
  });
});
