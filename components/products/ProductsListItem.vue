<script setup lang="ts">
import { CartItem, ProductInterface } from "~/types";

const props = defineProps({
  model: {
    type: Object as PropType<ProductInterface>,
    required: true,
  },
});

const emit = defineEmits<{
  (e: "addToCart", payload: CartItem): void;
}>();

const amountToAdd = ref(props.model.minOrderAmount);
</script>

<template>
  <li
    class="shadow rounded-lg p-4 text-center text-lg text-gray-700 bg-white flex-grow mb-2"
    data-test="product-item"
  >
    <div class="w-[200px] h-[200px] mx-auto">
      <img
        :src="model.img"
        :alt="model.name"
        class="max-w-[100%] max-h-[100%]"
      />
    </div>

    <div>
      {{ model.name }} -
      <span class="text-blue-500">${{ model.price }}</span>
      <div>Minimum order: {{ model.minOrderAmount }}</div>
      <div>Available: {{ model.availableAmount }}</div>
    </div>
    <ProductsCountInput
      v-model="amountToAdd"
      :min-value="model.minOrderAmount"
      :max-value="model.availableAmount"
      class="my-2"
    />

    <button
      class="rounded-xl p-2 bg-blue-500 text-white text-sm px-4 hover:opacity-80 disabled:cursor-not-allowed disabled:opacity-50"
      :disabled="model.availableAmount < model.minOrderAmount"
      @click="$emit('addToCart', { product: model, amount: amountToAdd })"
      :data-test="`addToCart-${model.id}`"
    >
      Add to cart
    </button>
  </li>
</template>
