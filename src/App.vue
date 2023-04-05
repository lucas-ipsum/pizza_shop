<script setup>
  import Header from './components/Header.vue';
  import PizzaStyle from './components/PizzaStyle.vue';
  import DoughType from './components/DoughType.vue';
  import Toppings from './components/Toppings.vue';
  import CurrentShoppingCart from './components/CurrentShoppingCart.vue';
</script>

<template>
  <Header /> 
  <CurrentShoppingCart /> 
  <PizzaStyle />
  <DoughType />
  <Toppings />
</template>

<style scoped>
  html {
    background-color: black;
  }
  template {
    display: flex;
    flex-direction: row;
    row-gap: 20px;
  }
</style>
