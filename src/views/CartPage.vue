<script setup>
import CartItems from "../components/CartItems.vue";
import { useProducts } from "../stores/Proucts";
import { useCart } from "../stores/Cart";
const product = useProducts();
const cart = useCart();
</script>
<template>
  <div class="container mx-auto px-4 py-16">
    <button
      type="button"
      class="font-medium text-green-600 hover:text-green-500"
      @click="$router.push({ name: 'home' })"
    >
      Go back
    </button>
    <p class="mt-10 text-center text-5xl">Cart ({{ cart.cartLength() }})</p>
    <cart-items v-if="!product.loading" />
  </div>
</template>
