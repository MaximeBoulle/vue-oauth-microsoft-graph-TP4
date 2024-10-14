<template>
    <div class="home-page">
        <div class="text">
            <h1>Welcome to the Home Page</h1>
            <p>This is a simple home page for your Vue.js application.</p>
        </div>
        <div class="buttons">
            <BaseButton >BaseButton</BaseButton>
            <BaseButton :disabled="true">BaseButton disabled</BaseButton>
            <BaseButton color="orange" >BaseButton with color props</BaseButton>
            <BaseButton color="red" >BaseButton with color props</BaseButton>
            <AsyncButton @click="wait(clickNumber*1000)">AsyncButton</AsyncButton>
        </div>
        <ul class="info" v-if="user">
            <li>User Info:</li>
            <li>Name: {{ user.name }}</li>
            <li>Email: {{ user.username }}</li>
        </ul>
    </div>
</template> 
<style>

.home-page{
    min-height: 80vh;
    display: flex;
    flex-direction: column; 
    align-items: center;
}

.info{
    display : flex;
    flex-direction: column;
    margin-top: 50px;
    width: 300px;
    list-style: none;
    box-shadow: 1px 1px 5px 1px #888888;
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
import { mapState } from 'vuex';


export default {
    name: 'HomePage',
    computed: {
        ...mapState(['user'])
    },
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
            clickNumber: 0,
        };
    },
}
</script>

