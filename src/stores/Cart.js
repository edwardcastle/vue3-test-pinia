import { computed, ref } from "vue";
import { defineStore } from "pinia";

// Cart
export const useCart = defineStore("cart", () => {
  let cart = ref([]);
  function addProduct(product) {
    cart.value.push(product);
  }
  const totalPrice = () =>
    computed(() => cart.value.reduce((total, cart) => total + cart.price, 0));

  const cartLength = () => computed(() => cart.value.length);

  return { cart, cartLength, addProduct, totalPrice };
});
