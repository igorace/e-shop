<script setup lang="ts">
const { items, itemsCount, totalAmount, totalPrice, isEmpty } = useCart();
</script>

<template>
  <Head>
    <Title>My cart</Title>
    <Meta name="description" content="Cart with all added items" />
  </Head>
  <NuxtLink
    to="/"
    class="p-2 bg-orange-500 rounded-xl text-white hover:opacity-80"
    >Go back</NuxtLink
  >
  <h1 class="text-2xl font-bold mt-4">My cart:</h1>
  <template v-if="!isEmpty">
    <ul class="p-8">
      <li
        v-for="item in items"
        :key="item.product.id"
        class="flex items-center gap-8 border-b"
      >
        <div class="w-[100px] h-[100px]">
          <img
            :src="item.product.img"
            alt=""
            class="max-w-[100%] max-h-[100%]"
          />
        </div>
        <div>
          <div>Order amount: {{ item.amount }}</div>
          <div>Price per unit: ${{ item.product.price }}</div>
          <div>Total price: ${{ item.product.price * item.amount }}</div>
        </div>
      </li>
    </ul>
    <div class="text-xl">
      Items: <span class="font-bold">{{ itemsCount }}</span>
    </div>
    <div class="text-xl">
      Total amount: <span class="font-bold">{{ totalAmount }}</span>
    </div>
    <div class="text-xl">
      Total price: <span class="font-bold">${{ totalPrice }}</span>
    </div>
  </template>
  <h2 class="text-xl my-10 font-bold" v-else>Your cart is empty!</h2>
</template>
