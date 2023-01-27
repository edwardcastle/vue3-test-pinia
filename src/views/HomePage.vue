<script setup>
import { onMounted } from "vue";
import { useProducts } from "../stores/Proucts";
const products = useProducts();
onMounted(async () => {
  await products.getAllProducts();
});
</script>

<template>
  <div class="container">
    {{ products.products }}
  </div>
</template>

<style scoped></style>
