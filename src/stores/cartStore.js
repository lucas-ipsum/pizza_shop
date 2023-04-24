import { defineStore } from 'pinia'


export const useCartStore = defineStore('cartStore',{
  state: () => ({
    style: 'Italian',
    doughType: 'Vollkorn',
    toppings: ['Cheese', 'Mais']
  })
})