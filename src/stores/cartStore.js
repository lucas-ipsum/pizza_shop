import { defineStore } from 'pinia'


export const userCartStore = defineStore('cartStore',{
  state: () => ({
    cart: {toppings: 'Cheese'}
  })
})