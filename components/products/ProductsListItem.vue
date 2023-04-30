<script setup lang="ts">
import { ProductInterface } from "~/models";

defineProps({
  model: {
    type: Object as PropType<ProductInterface>,
    default: () => {},
  },
});
</script>

<template>
  <li>
    <h1>{{ model.name }}</h1>
    <img :src="model.img" :alt="model.name" />
  </li>
</template>

<style module></style>
