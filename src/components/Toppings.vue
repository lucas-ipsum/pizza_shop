<template>
    <h1 class="category-title">Toppings auswählen</h1>
    <hr>
    <div class="wrapper">
        <SelectionIcon category="toppings" title="Salami" logo="salami.png"/>
        <SelectionIcon category="toppings" title="Paprika" logo="paprika.png"/>
        <SelectionIcon category="toppings" title="Knoblauch" logo="knoblauch.png"/>
    </div>
    <diw class="wrapper">
        <SelectionIcon category="toppings" title="Käse" logo="kase.png"/>
        <SelectionIcon category="toppings" title="Mais" logo="mais.png"/>
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