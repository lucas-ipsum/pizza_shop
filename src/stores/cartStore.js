import { defineStore } from 'pinia'


export const useCartStore = defineStore('cartStore',{
  state: () => ({
    style: '',
    doughType: '',
    toppings: ['Cheese', 'Mais']
  }),
  actions: {
    setStyle (style) {
      this.style = style;
    },
    setDoughType (type) {
      this.doughType = type;
    }
  }
})