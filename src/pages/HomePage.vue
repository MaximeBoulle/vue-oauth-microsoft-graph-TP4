<template>
    <div class="home-page">
        <h1>Welcome to the Home Page</h1>
        <p>This is a simple home page for your Vue.js application.</p>
        <div class="buttons">
            <BaseButton >BaseButton</BaseButton>
            <BaseButton disabled="true">BaseButton disabled</BaseButton>
            <BaseButton color="orange " >BaseButton with color props</BaseButton>
            <BaseButton color="red" >BaseButton with color props</BaseButton>
            <AsyncButton @click="wait(clickNumber*1000)">AsyncButton</AsyncButton>
        </div>
    </div>
</template>

<style>

.home-page{
    min-height: 80vh;
}

.buttons{
    margin-top : 20px;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap : 5px;
}

</style>

<script>

import BaseButton from '@/components/BaseButton.vue';
import AsyncButton from '@/components/AsyncButton.vue';


export default {
    name: 'HomePage',
    components: {
        BaseButton,
        AsyncButton
    },
    methods: {
        wait (ms) {
            console.log(ms)
            this.clickNumber++
            return new Promise(resolve => setTimeout(resolve, ms));
        }
    },
    data() {
        return {
            clickNumber: 0
        };
    },
}
</script>

