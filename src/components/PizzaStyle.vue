<template>
    <h1 class="category-title">Pizza Style</h1>
    <hr>
    <div class="wrapper">
        <SelectionIcon category="style" title="Italienisch" logo="italy.png"/>
        <SelectionIcon category="style" title="Amerikanisch" logo="american.png"/>
    </div>
</template>

<script>
    import SelectionIcon from './SelectionIcon.vue';
    export default {
    name: "PizzaStyle",
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