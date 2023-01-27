<script setup>
import LoadingSpinner from "./components/LoadingSpinner.vue";
import { RouterView } from "vue-router";
import { useProducts } from "./stores/Proucts";

const product = useProducts();
</script>

<template>
  <RouterView />
  <loading-spinner v-if="product.loading" />
</template>

<style scoped></style>
