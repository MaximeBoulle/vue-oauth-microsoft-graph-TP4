<template>
    <v-app-bar class="bar" :elevation="2">
        <SigninButton  color="#6fd472" class="signin" @connected="setAccount">
            <div v-if="account">
                {{ account.name }}
            </div>
            <div v-else>
                Signin with Microsoft
            </div>  
        </SigninButton>
    </v-app-bar>
</template>

<script>
import SigninButton from '@/components/SigninButton.vue';
export default {
    name: 'BaseHeader',
    components: {
        SigninButton
    },
    data (){
        return {
            account: null,
        }
    },
    methods: {
        setAccount(account){
            this.account = account;
            
            this.$emit('userChanged', account);
        }
    }
}
</script>

<style scoped>
    
</style>
