<template>
  <BaseLayout @userChanged="setAccount">
    <HomePage :user="account"/>
  </BaseLayout>
</template>

<script>

import BaseLayout from './pages/BaseLayout.vue'
import HomePage from './pages/HomePage.vue';


export default {
  name: 'App',
  components: {
    HomePage,
    BaseLayout
  },
  data() {
    return {
      account: null
    };
  },
  methods: {
    setAccount(account){
      this.account = account;
      console.log(account);
    }
  },
}

</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
