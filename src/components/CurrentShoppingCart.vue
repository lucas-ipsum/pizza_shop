<template>
    <div class="wrapper">
        <div class="p-3 w-1/2 min-h-full max-h-fit border">
            <h1 class="font-bold">Aktuelle Pizza</h1>


            <Chip text="Hallo"/> 
            <Chip text="Hallo"/> 
            <Chip text="Hallo"/> 

            <h1>{{ cartStore.cart.toppings }}</h1>

        </div>

    </div>
</template>

<script>
import { useCartStore } from '../stores/cartStore';             // import Store 
import Chip from './Chip.vue';

    export default {
        name : 'CurrentShoppingCart',
        components: { Chip },
        setup() {
            const cartStore = useCartStore(); 

            return { cartStore }
        }

    }
</script>

<style>


</style>