import { ref, computed } from 'vue'
import { defineStore } from 'pinia'

/*
export const useCounterStore = defineStore('counter', () => {
  const count = ref(0)
  const doubleCount = computed(() => count.value * 2)
  function increment() {
    count.value++
  }

  return { count, doubleCount, increment }
})
*/ 


export const userCartStore = defineStore('cartList',{
  state: () => ({
    cartList: []
  }),
  actions: {
    addToCart(item) {
      // const created = {style: style};
      // this.cart = [created, ...this.cart]
      // this.cart
      this.cartList.push({item})
    }
  }
})
