<template>
    <h1 class="category-title">Teigart auswählen</h1>
    <hr>
    <div class="wrapper">
        <SelectionIcon title="Salami" logo="src/assets/icons/salami.png"/>
        <SelectionIcon title="Paprika" logo="src/assets/icons/paprika.png"/>
        <SelectionIcon title="Knoblauch" logo="src/assets/icons/knoblauch.png"/>
    </div>
    <diw class="wrapper">
        <SelectionIcon title="Käse" logo="src/assets/icons/kase.png"/>
        <SelectionIcon title="Mais" logo="src/assets/icons/mais.png"/>
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