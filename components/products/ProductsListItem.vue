<script setup lang="ts">
import { ProductInterface } from "~/models";

defineProps({
  model: {
    type: Object as PropType<ProductInterface>,
    required: true,
  },
});
</script>

<template>
  <li
    class="shadow rounded-lg p-4 text-center text-lg font-bold text-gray-700 bg-white sm:w-1/3 flex-grow mb-2"
  >
    <img :src="model.img" :alt="model.name" width="300" class="mx-auto" />

    <div>
      {{ model.name }} -
      <span class="text-green-500">${{ model.price }}</span>
    </div>
  </li>
</template>

<style module></style>
