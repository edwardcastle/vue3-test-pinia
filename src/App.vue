<script setup>
import LoadingSpinner from "./components/LoadingSpinner.vue";
import { RouterView } from "vue-router";
</script>

<template>
  <RouterView />
  <loading-spinner />
</template>

<style scoped></style>
