<script setup lang="ts">
import { ProductInterface } from "~/models";

const data = (await import("~/public/static/mock/data.json"))
  .default as ProductInterface[];
</script>

<template>
  <ProductsList :products="data" />
</template>
