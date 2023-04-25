import { defineStore } from 'pinia'


export const useCartStore = defineStore('cartStore',{
  state: () => ({
    style: '',
    doughType: '',
    toppings: []
  }),
  actions: {
    setStyle (style) {
      this.style = style;
    },
    setDoughType (type) {
      this.doughType = type;
    },
    addToppings (topping) {
      // Checks if element already in store
      if (this.toppings.find(el => el === topping) !== topping) {
        this.toppings.push(topping);
      } else {
        // on double click remove element 
        this.toppings = this.toppings.filter(el => {
          return el !== topping;
        })
      }
    }
  }
})