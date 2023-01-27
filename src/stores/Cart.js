import { computed, ref } from "vue";
import { defineStore } from "pinia";

// Cart
export const useCart = defineStore("cart", () => {
  let cart = ref([]);
  function addProduct(product) {
    cart.value.push(product);
  }
  function deleteProduct(id) {}

  const cardLength = () => computed(() => cart.value.length);

  return { cart, cardLength, addProduct, deleteProduct };
});
