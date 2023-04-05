<template>
    <h1 class="category-title">Pizza Style</h1>
    <hr>
    <div class="wrapper">
        <SelectionIcon title="Italienisch" logo="src/assets/icons/italy.png"/>
    </div>
</template>

<script>
import SelectionIcon from './SelectionIcon.vue';
    import usLogo from "../assets/icons/american.png"
//         <SelectionIcon title="Amerikanisch" :logo="../assets/icons/american.png"/>


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