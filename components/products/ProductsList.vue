<script setup lang="ts">
import { CartItem, ProductInterface } from "~/types";

defineProps({
  products: {
    type: Object as PropType<ProductInterface[]>,
    required: true,
  },
});

const addToCart = (item: CartItem) => {
  const { addItem } = useCart();
  const { updateProductCount } = useProducts();
  addItem(item);
  updateProductCount(item.product.id, -item.amount);
};
</script>

<template>
  <ul class="sm:flex flex-wrap gap-4 tablet:gap-10 tablet:text-blue">
    <ProductsListItem
      v-for="product in products"
      :key="product.id"
      :model="product"
      @add-to-cart="addToCart"
    />
  </ul>
</template>
