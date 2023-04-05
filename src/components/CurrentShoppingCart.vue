<template>
    <div class="wrapper">
        <h1>CART</h1>

    </div>
</template>

<script>
import {computed} from "vue";
import {userCartStore} from '../stores/cartStore';
import { ref } from "vue";

    export default {
        name : 'CurrentShoppingCart',
        setup() {
            // const cart = ref('')
            const store = userCartStore()


            function addToCart(item) {
                store.addToCart('TEST')
            }
            /*
            const store = userCartStore()
            console.log(store)
            const showCart = computed(() => store.$state.style);
            const cartList = computed(() => store.$state.cart)
            console.log('first')
            console.log(cartList)
            */
        }

    }
</script>

<style>


</style>