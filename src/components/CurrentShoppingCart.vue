<template>
    <div class="wrapper">
        <div class="p-3 w-1/2 min-h-full max-h-fit border">
            <h1 class="font-bold">Aktuelle Pizza</h1>

            <!-- Section Pizza Style-->
            <p class="text-white text-left">Style:</p>
            <hr>
            <div class="flex flex-row my-2">
                <Chip text="Hallo"/>     
                <Chip text="Hallo"/>                     
            </div>

            <!-- Section Pizza Toppings -->
            <p class="text-white text-left">Toppings:</p>
            <hr>
            <div class="flex flex-row my-2">
                <div  v-for="topping in cartStore.toppings">
                    <Chip :text="topping"/>  
                </div>
            </div>



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