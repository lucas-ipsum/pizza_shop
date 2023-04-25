<template>
    <div class="wrapper">
        <div id="btn" class="select-btn" type="button" v-on:click="setElement()">
            <section>
                <h1>{{ title }}</h1>
            </section>
            <section>
                <img :src=logo :width="40" alt="">
            </section>
        </div>
    </div>
</template>

<script>
import { useCartStore } from '../stores/cartStore';

    export default {
        name : 'SelectionIcon',

        props: {
            title: String,
            logo: String,
            category: String
        }, 
        methods: {
        // clickEvent
            setElement: function() {
                const cartStore = useCartStore()    
                if (this.category === 'style') {
                    cartStore.setStyle(this.title);
                } else if (this.category === 'doughType') {
                    cartStore.setDoughType(this.title);
                } else if (this.category === 'toppings') {
                    cartStore.addToppings(this.title); 
                }
            },
        }
    }
</script>

<style scoped>
 .select-btn {
    margin: '5px';
    padding: '5px';
    background-color: aliceblue;
    border-radius: 5%;
    color: black;
    max-width: 200px;
    min-width: 110px;
    height: 100px;
    display: flex;
    flex-direction: column;
 }
 .select-btn:hover {
    border: solid orange;
    cursor: pointer;

 }
 h1 {
    font-size: x-large;
    color: black;
 }
 section {
    align-self: center;
 }
</style>
