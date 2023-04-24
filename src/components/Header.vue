<template>
    <div class="wrapper">
        <header>
            <img class="mb-3" src="../assets/icons/pizza.png" :width="75" alt="" />
        </header>
    </div>
</template>

<script>
    export default {
        name : 'Header'
    }
</script>

<style>
    .wrapper {
        display: flex;
        justify-content: center;
    }
    h1 {
        color: antiquewhite;
        font-family: Verdana, Geneva, Tahoma, sans-serif;
        font-size: xx-large;
    }
    header {
        display: flex;
        flex-direction: column;
        row-gap: 25px;
    }
    img {
        align-self: center;
    }
</style>