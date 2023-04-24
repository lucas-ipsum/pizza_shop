import { defineStore } from 'pinia'


export const useCartStore = defineStore('cartStore',{
  state: () => ({
    style: 'Italian',
    doughType: 'Vollkorn',
    toppings: ['Cheese', 'Mais']
  }),
  actions: {
    setStyle (style)  {
      return this.state.style = style;
    }
  }
})