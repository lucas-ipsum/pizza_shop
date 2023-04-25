<template>
    <h1 class="category-title">Teigart auswählen</h1>
    <hr>
    <div class="wrapper">
        <SelectionIcon category="doughType" title="Standard" logo="src/assets/icons/standard_dough.png"/>
        <SelectionIcon category="doughType" title="Vollkorn" logo="src/assets/icons/whole_grain.png"/>
        <SelectionIcon category="doughType" title="Sauerteig" logo="src/assets/icons/sour_dough.png"/>
    </div>
</template>

<script>
    import SelectionIcon from './SelectionIcon.vue';
    export default {
    name: "DoughType",
    components: { SelectionIcon },
}
</script>

<style>
    .wrapper {
        display: flex;
        justify-content: space-evenly;
        margin-top: 20px;
    }
    hr {
        color: bisque;
    }
    .category-title {
        margin-top: 5px;
        text-align: left;
        font-size: larger;
    }
</style>