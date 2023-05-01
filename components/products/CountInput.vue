<script setup lang="ts">
const props = defineProps({
  modelValue: {
    type: Number,
    required: true,
  },
  minValue: {
    type: Number,
    required: true,
  },
  maxValue: {
    type: Number,
    required: true,
  },
});

const emit = defineEmits(["update:modelValue", "input"]);

const updateValue = (value: number) => {
  // In case user decides to type the amount make sure the value is still within the limits
  if (value > props.maxValue) value = props.maxValue;
  if (value < props.minValue) value = props.minValue;

  emit("update:modelValue", value);
};
</script>

<template>
  <div>
    <button
      class="cursor-pointer bg-gray-200 border border-gray-200 px-2 rounded-l disabled:cursor-not-allowed"
      :disabled="modelValue === minValue"
      @click="updateValue(modelValue > minValue ? modelValue - 1 : minValue)"
    >
      -
    </button>
    <input
      class="w-12 border border-gray-200 text-center appearance-none outline-none"
      type="number"
      :min="minValue"
      :max="maxValue"
      :value="modelValue"
      @input="updateValue(parseInt(($event.target as HTMLInputElement).value))"
    />
    <button
      class="cursor-pointer bg-gray-200 border border-gray-200 px-2 rounded-r disabled:cursor-not-allowed"
      :disabled="modelValue === maxValue"
      @click="updateValue(modelValue < maxValue ? modelValue + 1 : maxValue)"
    >
      +
    </button>
  </div>
</template>

<style scoped>
/* Chrome, Safari, Edge, Opera */
input::-webkit-outer-spin-button,
input::-webkit-inner-spin-button {
  -webkit-appearance: none;
  margin: 0;
}

/* Firefox */
input[type="number"] {
  -moz-appearance: textfield;
}
</style>
