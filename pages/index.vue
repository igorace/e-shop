<script setup lang="ts">
const { products, fetchProducts } = useProducts();
await fetchProducts();

const { itemsCount } = useCart();
</script>

<template>
  <Head>
    <Title>Products</Title>
    <Meta name="description" content="Nice product page" />
  </Head>
  <NuxtLink
    to="cart"
    class="p-2 bg-orange-500 rounded-xl text-white hover:opacity-80"
    >My cart (items: {{ itemsCount }})</NuxtLink
  >

  <ProductsList :products="products" class="mt-8" />
</template>
