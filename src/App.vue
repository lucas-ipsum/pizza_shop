<script setup>
  import Test from './components/Test.vue';
  import Header from './components/Header.vue';
  import SelectionIcon from './components/SelectionIcon.vue'
import PizzaStyle from './components/PizzaStyle.vue';
</script>

<template>
  <Header /> 
  <SelectionIcon /> 
  <PizzaStyle />
  <Test />  

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
