<template>
    <div class="bar" :elevation="2">
        <ul class="nav">      
            <li>
                <router-link to="/">
                    <BaseButton>
                        Home
                    </BaseButton>
                </router-link>
            </li>
            <li>  
                <router-link to="/conversations">
                    <BaseButton>
                        Conversation
                    </BaseButton>
                </router-link>
            </li>

        </ul>

        <SigninButton  color="#6fd472" class="signin" @connected="setAccount">
            <div v-if="account">
                {{ account.name }}
            </div>
            <div v-else>
                Signin with Microsoft
            </div>  
        </SigninButton>

    </div>
</template>

<script>
import SigninButton from '@/components/SigninButton.vue';
import BaseButton from '@/components/BaseButton.vue';

export default {
    name: 'BaseHeader',
    components: {
        SigninButton,
        BaseButton
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

    .bar{
        display: flex;
        justify-content: space-evenly;
        box-shadow: 1px 1px 5px 1px #888888;
        top : 0;
        padding-top: 20px;
        padding-bottom: 20px;
    }

    .nav{
        display: flex;
        gap: 10px;
        list-style: none;
    }

    
</style>
