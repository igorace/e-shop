<script setup lang="ts">
import { PropType } from "nuxt/dist/app/compat/capi";
import { ProductInterface } from "~/models";

defineProps({
  products: {
    type: Object as PropType<ProductInterface[]>,
    required: true,
  },
});

const addToCart = (item: { product: ProductInterface; amount: number }) => {
  const { addItem, items } = useCart();
  addItem(item);
  console.log(items.value);
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
