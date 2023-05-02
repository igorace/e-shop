import { describe, it, expect, vi, beforeEach, afterEach } from "vitest";
import { useState, useFetch } from "nuxt/app";
import { useProducts } from "../useProducts";
import { ref } from "vue";
import { CartItem } from "~/types";

vi.mock("nuxt/app", () => {
  return {
    useState: vi.fn(() => ref([])),
    useFetch: vi.fn(() => {
      return {
        data: ref([
          {
            id: "1",
            price: 10,
            availableAmount: 10,
          },
          {
            id: "2",
            price: 20,
          },
          {
            id: "3",
            price: 30,
          },
          {
            id: "4",
            price: 40,
          },
          {
            id: "5",
            price: 50,
          },
        ]),
      };
    }),
  };
});

describe("useProduct", () => {
  it("should check products if products are empty", () => {
    const { products } = useProducts();
    expect(products.value.length).toBe(0);
  });

  it("should fetch products", async () => {
    const { products, fetchProducts } = useProducts();
    await fetchProducts();
    expect(products.value.length).toBe(5);
  });

  it("should decrease product count", async () => {
    const { products, fetchProducts, updateProductCount } = useProducts();
    await fetchProducts();
    updateProductCount("1", -5);
    expect(products.value[0].availableAmount).toBe(5);
  });

  it("should add product count", async () => {
    const { products, fetchProducts, updateProductCount } = useProducts();
    await fetchProducts();
    updateProductCount("1", 5);
    expect(products.value[0].availableAmount).toBe(15);
  });
});
