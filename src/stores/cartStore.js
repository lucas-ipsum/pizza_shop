import { defineStore } from 'pinia'


export const useCartStore = defineStore('cartStore',{
  state: () => ({
    cart: {toppings: 'Cheese'},
    toppings: ['Cheese', 'Mais']
  })
})