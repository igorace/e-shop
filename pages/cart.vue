<script setup lang="ts">
const { items, itemsCount } = useCart();
</script>

<template>
  <div>Cart Page (items: {{ itemsCount }})</div>
  <pre>{{ items }}</pre>
</template>
