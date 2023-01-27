import { ref } from "vue";
import { defineStore } from "pinia";

// Products
export const useProducts = defineStore("products", () => {
  let products = ref([]);
  let loading = ref(false);
  async function getAllProducts() {
    loading.value = true;
    products.value = await fetch(`https://fakestoreapi.com/products`).then(
      (response) => response.json()
    );
    loading.value = false;
  }
  return { loading, products, getAllProducts };
});
