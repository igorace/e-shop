<script setup lang="ts">
import { ProductInterface } from "~/models";

const data = (await import("~/public/static/mock/data.json"))
  .default as ProductInterface[];

const { itemsCount } = useCart();
</script>

<template>
  <NuxtLink to="cart">Go to cart (items: {{ itemsCount }})</NuxtLink>
  <ProductsList :products="data" />
</template>
