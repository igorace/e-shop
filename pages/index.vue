<script setup lang="ts">
const { products, fetchProducts } = useProducts();
await fetchProducts();

const { itemsCount } = useCart();
</script>

<template>
  <div class="sticky top-10 w-full bg-transparent h-10 flex">
    <NuxtLink
      to="cart"
      class="p-2 bg-orange-500 rounded-xl text-white hover:opacity-80"
      >My cart (items: {{ itemsCount }})</NuxtLink
    >
  </div>

  <ProductsList :products="products" class="mt-8" />
</template>
