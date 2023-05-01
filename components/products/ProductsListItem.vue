<script setup lang="ts">
import { ProductInterface } from "~/models";

const props = defineProps({
  model: {
    type: Object as PropType<ProductInterface>,
    required: true,
  },
});

const emit = defineEmits<{
  (
    e: "addToCart",
    payload: { product: ProductInterface; amount: number }
  ): void;
}>();

const amountToAdd = ref(props.model.minOrderAmount);
</script>

<template>
  <li
    class="shadow rounded-lg p-4 text-center text-lg font-bold text-gray-700 bg-white flex-grow mb-2"
  >
    <div class="w-[300px] h-[300px] text-center mx-auto">
      <img
        :src="model.img"
        :alt="model.name"
        class="max-w-[100%] max-h-[100%]"
      />
    </div>

    <div>
      {{ model.name }} -
      <span class="text-green-500">${{ model.price }}</span>
      <div>Minimum order ammount: {{ model.minOrderAmount }}</div>
      <div>Available ammount: {{ model.availableAmount }}</div>
    </div>
    <ProductsCountInput
      v-model="amountToAdd"
      :min-value="model.minOrderAmount"
      :max-value="model.availableAmount"
    />

    <button
      class="rounded-xl p-2 bg-green-500 text-white hover:opacity-80"
      @click="$emit('addToCart', { product: model, amount: amountToAdd })"
    >
      Add to cart
    </button>
  </li>
</template>
