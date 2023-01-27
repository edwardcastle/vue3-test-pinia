<script setup>
import { useCart } from "../stores/Cart";
const carts = useCart();

function removeProduct(id) {
  const index = carts.cart
    .map((value) => {
      return value.id;
    })
    .indexOf(id);
  carts.cart.splice(index, 1);
}
</script>

<template>
  <div class="pointer-events-auto">
    <div class="flex h-full flex-col bg-white">
      <div class="flex-1 overflow-y-auto py-6 px-4 sm:px-6">
        <div class="mt-8">
          <div class="flow-root">
            <ul
              v-for="cart in carts.cart"
              :key="cart.id"
              role="list"
              class="-my-6 divide-y divide-gray-200"
            >
              <li class="flex py-6">
                <div
                  class="h-24 w-24 flex-shrink-0 overflow-hidden rounded-md border border-gray-200"
                >
                  <img
                    :src="cart.image"
                    class="h-full w-full object-cover object-center"
                  />
                </div>

                <div class="ml-4 flex flex-1 flex-col">
                  <div>
                    <div
                      class="flex justify-between text-base font-medium text-gray-900"
                    >
                      <p>{{ cart.title }}</p>
                      <p class="ml-4">${{ cart.price.toFixed(2) }}</p>
                    </div>
                  </div>
                  <div class="flex flex-1 items-end justify-between text-sm">
                    <p class="text-gray-500" />
                    <div class="flex">
                      <button
                        type="button"
                        class="font-medium text-green-600 hover:text-green-500"
                        @click="removeProduct(cart.id)"
                      >
                        Remove
                      </button>
                    </div>
                  </div>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div class="border-t border-gray-200 py-6 px-4 sm:px-6">
        <div class="flex justify-between text-base font-medium text-gray-900">
          <p>Total</p>
          <p>${{ carts.totalPrice() }}</p>
        </div>
      </div>
    </div>
  </div>
</template>
