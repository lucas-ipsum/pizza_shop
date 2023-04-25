<template>
    <div class="wrapper">
        <div class="p-3 w-1/2 min-h-full max-h-fit border">
            <h1 class="font-bold">Aktuelle Pizza</h1>
        <!-- Section Pizza Toppings -->
            <hr>
            <div class="flex flex-row my-2 flex-wrap">
                <div  v-if="cartStore.style">
                    <Chip :text="cartStore.style"/>  
                </div>
                <div  v-if="cartStore.doughType">
                    <Chip :text="cartStore.doughType"/>  
                </div>
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