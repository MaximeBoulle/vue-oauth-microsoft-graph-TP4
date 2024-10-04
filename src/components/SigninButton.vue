<template>
    <BaseButton @click="signInAndGetUser">        
        <slot></slot>
    </BaseButton>
</template>

<script>
import BaseButton from '@/components/BaseButton.vue';
import {signInAndGetUser} from '../lib/microsoftGraph';
export default {
    name: 'SignInButton',
    components: {
        BaseButton
    },
    methods: {
        async signInAndGetUser() {
            const account = await signInAndGetUser();
            this.account = account;
            console.log(account);
        }
    },
    data() {
        return {
            account : null
        };
    },

}
</script>