<script setup lang="ts">
import { PropType } from "nuxt/dist/app/compat/capi";
import { ProductInterface } from "~/models";

defineProps({
  products: {
    type: Object as PropType<ProductInterface[]>,
    required: true,
  },
});
</script>

<template>
  <ul>
    <ProductsListItem
      v-for="product in products"
      :key="product.id"
      :model="product"
    />
  </ul>
</template>
