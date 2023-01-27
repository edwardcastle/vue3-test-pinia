import { ref } from "vue";
import { defineStore } from "pinia";

export const useProducts = defineStore("products", () => {
  let products = ref([]);
  async function getAllProducts() {
    products.value = await fetch(`https://fakestoreapi.com/products`).then(
      (response) => response.json()
    );
  }
  return { products, getAllProducts };
});
