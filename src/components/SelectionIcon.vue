<template>
    <div class="wrapper">
        <div class="select-btn">
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
    // Icon Imports                         <img src={{ logo }} :width="40"> <img src="../assets/icons/italy.png" :width="40" alt="" />
    // <img :src="require(`../assets/icons/'${{logo}}`)" :width="40">
    // <img src="../assets/icons/italy.png" :width="40" alt="" />
    export default {
        name : 'SelectionIcon',
        props: {
            title: String,
            logo: String
        }, 
    }
    function getImageUrl() {
    // This path must be correct for your file
    return new URL(`../assets/icons/${props.logo}`, import.meta.url)
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
