<template>
    <AsyncButton @click="signInAndGetUser">        
        <slot></slot>
    </AsyncButton>
</template>

<script>
import {signInAndGetUser} from '../lib/microsoftGraph';
import AsyncButton from '@/components/AsyncButton.vue';
import { mapMutations } from 'vuex'; 

export default {
    name: 'SignInButton',
    components: {
        AsyncButton
    },
    methods: {
        ...mapMutations(['setUser']),
        async signInAndGetUser() {
            const account = await signInAndGetUser();
            this.setUser(account);
        }
    },
}
</script>