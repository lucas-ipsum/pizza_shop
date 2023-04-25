<template>
    <h1 class="category-title">Toppings auswählen</h1>
    <hr>
    <div class="wrapper">
        <SelectionIcon category="toppings" title="Salami" logo="src/assets/icons/salami.png"/>
        <SelectionIcon category="toppings" title="Paprika" logo="src/assets/icons/paprika.png"/>
        <SelectionIcon category="toppings" title="Knoblauch" logo="src/assets/icons/knoblauch.png"/>
    </div>
    <diw class="wrapper">
        <SelectionIcon category="toppings" title="Käse" logo="src/assets/icons/kase.png"/>
        <SelectionIcon category="toppings" title="Mais" logo="src/assets/icons/mais.png"/>
    </diw>
</template>

<script>
    import SelectionIcon from './SelectionIcon.vue';
    export default {
    name: "Toppings",
    components: { SelectionIcon },

}
</script>

<style>
    .wrapper {
        display: flex;
        justify-content: space-evenly;
        margin-top: 5px;
    }
    hr {
        color: bisque;
    }
    .category-title {
        margin-top: 25px;
        text-align: left;
        font-size: larger;
    }
</style>