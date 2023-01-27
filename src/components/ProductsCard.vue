<script setup>
import { onMounted } from "vue";
import { useProducts } from "../stores/Proucts";
import { useCart } from "../stores/Cart";
const products = useProducts();
const cart = useCart();
onMounted(async () => {
  await products.getAllProducts();
});
</script>
<template>
  <div
    class="inline-grid 2xl:grid-cols-4 lg:grid-cols-3 md:grid-cols-2 xs:grid-cols-1 gap-8"
  >
    <div v-for="product in products.products" :key="product.id">
      <div
        class="bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700"
      >
        <img
          class="p-8 rounded-t-lg w-full h-96"
          :src="product.image"
          alt="product image"
        />
        <div class="px-5 pb-5">
          <div class="flex items-center justify-between mt-5">
            <span class="text-3xl font-bold text-gray-900 dark:text-white">{{
              `$${product.price.toFixed(2)}`
            }}</span>
            <a
              class="text-white bg-green-400 px-5 py-2 rounded cursor-pointer"
              @click="cart.addProduct(product)"
              >Add to cart</a
            >
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script></script>

<style scoped></style>
