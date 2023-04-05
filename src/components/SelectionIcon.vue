<template>
    <div class="wrapper">
        <section>
            <h2>Italienisch</h2>
        </section>
        <section>
            <img src="../assets/icons/pizza.png" :width="75" alt="" />
        </section>
        <h1>Hallo</h1>
    </div>
</template>

<script>
    export default {
        name : 'SelectionIcon'
    }
</script>

<style scoped>
 div {
    margin: '5px';
    background-color: aliceblue;
    border-radius: 5%;
    color: black;
    max-width: 200px;
    height: 100px;
 }
 div:hover {
    border: solid orange;

 }
 h1 {
    color: black;
 }
</style>
