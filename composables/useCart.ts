import { CartItem } from "~/types";
import { useState } from "nuxt/app";
import { computed } from "vue";

export function useCart() {
  const items = useState<CartItem[]>("cart-items", () => []);

  const addItem = (item: CartItem) => {
    let isAdded = false;
    items.value.forEach((i) => {
      if (i.product.id === item.product.id) {
        i.amount += item.amount;
        isAdded = true;
      }
    });
    if (!isAdded) items.value.push(item);
  };

  const itemsCount = computed(() => {
    return items.value.length;
  });

  const totalAmount = computed(() => {
    return items.value.reduce((acc, current) => {
      return (acc += current.amount);
    }, 0);
  });

  const totalPrice = computed(() => {
    return items.value.reduce((acc, current) => {
      return (acc += current.product.price * current.amount);
    }, 0);
  });

  const isEmpty = computed(() => {
    return !items.value.length;
  });

  return {
    items,
    addItem,
    itemsCount,
    totalAmount,
    totalPrice,
    isEmpty,
  };
}
